"use client";

import { useCallback, useEffect, useRef, useState } from "react";
// Type-only: erased at build time, so this adds nothing to the bundle. The
// runtime three.js import stays dynamic inside the effect below.
import type * as THREE from "three";
import { MODEL_PART_LABELS, t } from "@/lib/content";
import type { Lang } from "@/lib/locale";

type Part = { id: string; label: string; meshCount: number };

/** room_shell -> "Room shell", used when a group has no curated label. */
function prettify(name: string) {
  const s = name.replace(/[_-]+/g, " ").trim();
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Interactive 3D view of a use case.
 *
 * three.js is imported lazily so ~160KB of renderer stays off every other page.
 * The GLB's top-level groups (room_shell, ptz_camera, …) become a clickable
 * parts list; clicking either the list or the model itself selects and
 * highlights that group.
 */
export default function ModelDialog({
  src,
  title,
  lang,
  onClose,
}: {
  src: string;
  title: string;
  lang: Lang;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  /** Imperative handle into the three.js scene, set once the model has loaded. */
  const sceneApi = useRef<{ select: (id: string | null) => void; frame: (id: string | null) => void } | null>(null);

  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [progress, setProgress] = useState(0);
  const [parts, setParts] = useState<Part[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  const copy = t(lang).useCasesPage;

  // ----- dialog chrome: escape, focus trap, scroll lock -------------------
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.addEventListener("keydown", onKeyDown);
    const { overflow, paddingInlineEnd } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingInlineEnd = `${scrollbar}px`;
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      document.body.style.paddingInlineEnd = paddingInlineEnd;
      previouslyFocused?.focus?.();
    };
  }, [onKeyDown]);

  // ----- three.js scene ---------------------------------------------------
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let disposed = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const THREE = await import("three");
      const { GLTFLoader } = await import("three/examples/jsm/loaders/GLTFLoader.js");
      const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls.js");
      if (disposed) return;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color("#eef4fe");

      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 500);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      mount.appendChild(renderer.domElement);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";
      renderer.domElement.style.touchAction = "none";

      scene.add(new THREE.HemisphereLight(0xffffff, 0x8899bb, 2.2));
      const key = new THREE.DirectionalLight(0xffffff, 2.2);
      key.position.set(6, 10, 7);
      key.castShadow = true;
      key.shadow.mapSize.set(1024, 1024);
      scene.add(key);
      const fill = new THREE.DirectionalLight(0xffffff, 0.7);
      fill.position.set(-7, 5, -5);
      scene.add(fill);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      controls.autoRotate = !prefersReducedMotion;
      controls.autoRotateSpeed = 0.6;

      // group id -> meshes belonging to it
      const groupMeshes = new Map<string, THREE.Mesh[]>();
      const meshToGroup = new Map<THREE.Mesh, string>();
      const originalEmissive = new Map<THREE.Mesh, { color: number; intensity: number }>();
      const groupBoxes = new Map<string, InstanceType<typeof THREE.Box3>>();
      let currentSelection: string | null = null;

      const applySelection = (id: string | null) => {
        currentSelection = id;
        groupMeshes.forEach((meshes, groupId) => {
          const on = groupId === id;
          meshes.forEach((mesh) => {
            const mat = mesh.material as THREE.MeshStandardMaterial;
            if (!mat || !("emissive" in mat)) return;
            const original = originalEmissive.get(mesh);
            if (on) {
              mat.emissive.setHex(0x1e93e8);
              mat.emissiveIntensity = 0.55;
            } else if (original) {
              mat.emissive.setHex(original.color);
              mat.emissiveIntensity = original.intensity;
            }
          });
        });
      };

      const loader = new GLTFLoader();
      loader.load(
        src,
        (gltf) => {
          if (disposed) return;
          const model = gltf.scene;

          // Centre the model on the origin and sit it on the ground plane.
          const box = new THREE.Box3().setFromObject(model);
          const size = box.getSize(new THREE.Vector3());
          const centre = box.getCenter(new THREE.Vector3());
          model.position.sub(centre);
          model.position.y += size.y / 2;
          scene.add(model);

          // The GLB root wraps everything in one node; its children are the systems.
          const root = model.children.length === 1 ? model.children[0] : model;
          const discovered: Part[] = [];

          root.children.forEach((child) => {
            const meshes: THREE.Mesh[] = [];
            child.traverse((o) => {
              const m = o as THREE.Mesh;
              if (!m.isMesh) return;
              // Unique material per mesh so highlighting one group cannot bleed
              // into another that happens to share a material.
              if (Array.isArray(m.material)) {
                m.material = m.material.map((mm: THREE.Material) => mm.clone());
              } else if (m.material) {
                m.material = (m.material as THREE.Material).clone();
              }
              const mat = m.material as THREE.MeshStandardMaterial;
              if (mat && "emissive" in mat) {
                originalEmissive.set(m, { color: mat.emissive.getHex(), intensity: mat.emissiveIntensity ?? 1 });
              }
              m.castShadow = true;
              m.receiveShadow = true;
              meshes.push(m);
              meshToGroup.set(m, child.name);
            });
            if (meshes.length === 0) return;
            groupMeshes.set(child.name, meshes);
            groupBoxes.set(child.name, new THREE.Box3().setFromObject(child));
            discovered.push({
              id: child.name,
              label: MODEL_PART_LABELS[child.name]?.[lang] ?? prettify(child.name),
              meshCount: meshes.length,
            });
          });

          setParts(discovered);

          // Frame the whole model.
          const radius = Math.max(size.x, size.y, size.z);
          const defaultTarget = new THREE.Vector3(0, size.y / 2, 0);
          camera.position.set(radius * 0.9, radius * 0.75, radius * 1.15);
          controls.target.copy(defaultTarget);
          controls.update();

          sceneApi.current = {
            select: (id) => applySelection(id),
            frame: (id) => {
              const target = new THREE.Vector3();
              let dist = radius * 1.4;
              if (id && groupBoxes.has(id)) {
                const gb = groupBoxes.get(id)!.clone().translate(model.position);
                gb.getCenter(target);
                const gs = gb.getSize(new THREE.Vector3());
                dist = Math.max(gs.x, gs.y, gs.z) * 2.6 + 1.2;
              } else {
                target.copy(defaultTarget);
              }
              const dir = new THREE.Vector3(0.8, 0.6, 1).normalize();
              camera.position.copy(target).addScaledVector(dir, dist);
              controls.target.copy(target);
              controls.update();
            },
          };

          setStatus("ready");
        },
        (evt) => {
          if (evt.total > 0) setProgress(Math.round((evt.loaded / evt.total) * 100));
        },
        () => {
          if (!disposed) setStatus("error");
        }
      );

      // ----- picking --------------------------------------------------------
      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();
      let downAt: { x: number; y: number } | null = null;

      const onPointerDown = (e: PointerEvent) => {
        downAt = { x: e.clientX, y: e.clientY };
      };
      const onPointerUp = (e: PointerEvent) => {
        if (!downAt) return;
        const moved = Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y);
        downAt = null;
        if (moved > 5) return; // that was an orbit drag, not a click

        const rect = renderer.domElement.getBoundingClientRect();
        pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(pointer, camera);
        const hits = raycaster.intersectObjects(scene.children, true);
        const hit = hits.find((h) => meshToGroup.has(h.object as THREE.Mesh));
        const groupId = hit ? meshToGroup.get(hit.object as THREE.Mesh)! : null;
        const next = groupId === currentSelection ? null : groupId;
        applySelection(next);
        setSelected(next);
      };

      renderer.domElement.addEventListener("pointerdown", onPointerDown);
      renderer.domElement.addEventListener("pointerup", onPointerUp);

      // ----- sizing + loop --------------------------------------------------
      const resize = () => {
        const w = mount.clientWidth || 1;
        const h = mount.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(mount);

      let raf = 0;
      const tick = () => {
        controls.update();
        renderer.render(scene, camera);
        raf = requestAnimationFrame(tick);
      };
      tick();

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        renderer.domElement.removeEventListener("pointerdown", onPointerDown);
        renderer.domElement.removeEventListener("pointerup", onPointerUp);
        controls.dispose();
        scene.traverse((o) => {
          const m = o as THREE.Mesh;
          if (!m.isMesh) return;
          m.geometry?.dispose();
          const mat = m.material;
          if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
          else mat?.dispose();
        });
        renderer.dispose();
        if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
        sceneApi.current = null;
      };
    })().catch(() => {
      if (!disposed) setStatus("error");
    });

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, [src, lang]);

  // Selecting from the list drives the scene and re-frames the camera.
  const choosePart = (id: string | null) => {
    const next = id === selected ? null : id;
    setSelected(next);
    sceneApi.current?.select(next);
    sceneApi.current?.frame(next);
  };

  const selectedLabel = parts.find((p) => p.id === selected)?.label ?? null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} — ${copy.view3d}`}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[rgba(11,16,48,0.82)] p-3 backdrop-blur-sm animate-fade-in motion-reduce:animate-none sm:p-6"
    >
      <div
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto w-full max-w-[1120px] overflow-hidden rounded-card-lg bg-white shadow-[0_40px_80px_-32px_rgba(11,16,48,0.6)] animate-zoom-in motion-reduce:animate-none"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hairline px-6 py-4">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary">{copy.view3d}</p>
            <h2 className="mt-1 font-display text-xl font-bold text-ink">{title}</h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={copy.close}
            className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-hairline bg-white text-lg leading-none text-ink transition-colors duration-200 hover:border-primary hover:text-primary"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px]">
          <div className="relative h-[46vh] min-h-[300px] w-full bg-[linear-gradient(160deg,#F2FBFD,#EEF4FE)] lg:h-[62vh]">
            <div ref={mountRef} className="absolute inset-0" />

            {status === "loading" && (
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 text-sm text-ink-muted">
                <span className="h-8 w-8 animate-spin rounded-full border-2 border-hairline border-t-primary motion-reduce:animate-none" />
                {copy.modelLoading}
                {progress > 0 && <span className="text-xs tabular-nums">{progress}%</span>}
              </div>
            )}

            {status === "error" && (
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-sm text-ink-muted">
                {copy.modelError}
              </div>
            )}

            {status === "ready" && selectedLabel && (
              <span className="pointer-events-none absolute bottom-3 start-3 rounded-full bg-indigo px-3 py-1.5 text-xs font-semibold text-cyan-light shadow-sm">
                {selectedLabel}
              </span>
            )}
          </div>

          <div className="flex max-h-[38vh] flex-col border-t border-hairline lg:max-h-[62vh] lg:border-s lg:border-t-0">
            <div className="flex items-center justify-between gap-2 border-b border-hairline px-4 py-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
                {copy.partsTitle} {parts.length > 0 && <span className="text-ink-muted">({parts.length})</span>}
              </p>
              {selected && (
                <button
                  type="button"
                  onClick={() => choosePart(null)}
                  className="text-[11px] font-semibold text-primary transition-opacity duration-200 hover:opacity-70"
                >
                  {copy.clearSelection}
                </button>
              )}
            </div>

            <div className="flex-1 overflow-y-auto p-2">
              {parts.length === 0 ? (
                <p className="p-3 text-[13px] text-ink-muted">{copy.modelLoading}</p>
              ) : (
                <ul className="flex flex-col gap-1">
                  {parts.map((part) => {
                    const on = part.id === selected;
                    return (
                      <li key={part.id}>
                        <button
                          type="button"
                          onClick={() => choosePart(part.id)}
                          aria-pressed={on}
                          className={`flex w-full items-center justify-between gap-2 rounded-control px-3 py-2.5 text-start text-[13px] font-semibold transition-colors duration-150 ${
                            on ? "bg-indigo text-white" : "text-ink hover:bg-surface"
                          }`}
                        >
                          <span className="min-w-0 truncate">{part.label}</span>
                          <span className={`flex-none text-[11px] tabular-nums ${on ? "text-cyan-light" : "text-ink-muted"}`}>
                            {part.meshCount}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>

        <p className="border-t border-hairline px-6 py-3.5 text-[13px] text-ink-muted">{copy.modelHint}</p>
      </div>
    </div>
  );
}
