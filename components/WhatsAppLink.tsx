import { WHATSAPP_URL } from "@/lib/content";

export default function WhatsAppLink({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
