import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { WHATSAPP_URL } from "@/lib/contact";

const nav = [
  { label: "A Dérig", href: "/#sobre" },
  { label: "Produtos", href: "/#produtos" },
  { label: "Tecnologia Biotite", href: "/#biotite" },
  { label: "Qualidade", href: "/#qualidade" },
  { label: "Downloads", href: "/#downloads" },
  { label: "Onde Comprar", href: "/#contato" },
  { label: "Contato", href: WHATSAPP_URL },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0b0c0d]/72 border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <a href="/" aria-label="Dérig — início">
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href={WHATSAPP_URL} className="btn-primary text-sm">
            <MessageCircle className="h-4 w-4" />
            Fale com um consultor
          </a>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[color:var(--hairline)] bg-background/95 backdrop-blur-xl">
          <div className="container-x py-6 flex flex-col gap-1">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground/90 border-b border-[color:var(--hairline)]"
              >
                {n.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 justify-center"
            >
              <MessageCircle className="h-4 w-4" />
              Fale com um consultor
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
