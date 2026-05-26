import { MessageCircle } from "lucide-react";

export function MobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-4 inset-x-4 z-40">
      <a
        href="https://wa.me/551141618090"
        className="btn-primary w-full justify-center shadow-2xl shadow-black/50 glow-orange"
      >
        <MessageCircle className="h-4 w-4" />
        Falar com consultor
      </a>
    </div>
  );
}
