import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export function MobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-4 inset-x-4 z-40">
      <a
        href={WHATSAPP_URL}
        className="btn-primary w-full justify-center shadow-2xl shadow-black/50 glow-orange"
      >
        <MessageCircle className="h-4 w-4" />
        Falar com consultor
      </a>
    </div>
  );
}
