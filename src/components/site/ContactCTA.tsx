import { MessageCircle, Mail, MapPin } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export function ContactCTA() {
  return (
    <section id="contato" className="section-flow relative overflow-hidden py-16 md:py-24">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(700px 400px at 50% 100%, color-mix(in oklab, var(--orange) 25%, transparent), transparent 60%)",
        }}
      />
      <div className="container-x">
        <div className="relative overflow-hidden px-6 py-10 text-center md:px-12 md:py-16">
          <div
            aria-hidden
            className="absolute -top-32 right-[8%] h-72 w-72 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--orange) 35%, transparent), transparent 70%)",
            }}
          />
          <span className="eyebrow">Comercial Dérig</span>
          <h2 className="text-display mt-4 text-3xl md:text-5xl max-w-3xl mx-auto">
            Pronto para levar a precisão{" "}
            <span className="text-[color:var(--orange)]">Dérig</span> para sua
            clínica?
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Fale com nossa equipe e encontre a melhor solução para o seu fluxo
            clínico.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={WHATSAPP_URL} className="btn-primary">
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
            <a href="mailto:vendas@derig.com.br" className="btn-ghost">
              <Mail className="h-4 w-4" />
              Enviar e-mail
            </a>
            <a href="#contato" className="btn-ghost">
              <MapPin className="h-4 w-4" />
              Onde comprar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
