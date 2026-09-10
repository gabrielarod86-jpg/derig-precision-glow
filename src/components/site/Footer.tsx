import { Instagram, Facebook, Phone, Mail, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { WHATSAPP_URL } from "@/lib/contact";

const cols = [
  {
    title: "Produtos",
    items: ["Implantes", "Componentes", "Kits", "Fresas", "Biomateriais", "Instrumentais"],
  },
  {
    title: "Suporte",
    items: ["Downloads", "Instruções de uso", "Guia de torque", "Catálogos", "Fale conosco"],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[color:var(--hairline)] bg-black/60">
      <div className="container-x py-8 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Implantes do Brasil. Engenharia, tecnologia e precisão para
            implantodontia de alta performance.
          </p>
        </div>

        {cols.map((c) => (
          <div key={c.title} className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.22em] text-[color:var(--orange)] font-semibold">
              {c.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {c.items.map((i) => (
                <li key={i}>
                  <a
                    href={i === "Fale conosco" ? WHATSAPP_URL : "#contato"}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-4">
          <h4 className="text-xs uppercase tracking-[0.22em] text-[color:var(--orange)] font-semibold">
            Contato
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" /> 0800 777 1991
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" /> (11) 4161 8090
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                className="flex items-center gap-2 hover:text-[color:var(--orange)] transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp comercial
              </a>
            </li>
            <li>
              <a
                href="mailto:derig@derig.com.br"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" /> derig@derig.com.br
              </a>
            </li>
            <li>
              <a
                href="mailto:vendas@derig.com.br"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" /> vendas@derig.com.br
              </a>
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-3">
            <a
              aria-label="Instagram"
              href="#"
              className="h-9 w-9 rounded-full border border-[color:var(--hairline)] flex items-center justify-center hover:border-[color:var(--orange)] hover:text-[color:var(--orange)] transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              aria-label="Facebook"
              href="#"
              className="h-9 w-9 rounded-full border border-[color:var(--hairline)] flex items-center justify-center hover:border-[color:var(--orange)] hover:text-[color:var(--orange)] transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[color:var(--hairline)]">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Dérig Implantes do Brasil. Todos os direitos reservados.</p>
          <p>Engenharia premium brasileira para implantodontia de alta performance.</p>
        </div>
      </div>
    </footer>
  );
}
