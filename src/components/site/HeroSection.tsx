import { ArrowRight, Download } from "lucide-react";
import heroImg from "@/assets/hero-implant-spotlight-v2.png";

const badges = [
  "Tecnologia Biotite",
  "Alta precisão",
  "Qualidade A+",
  "Desenvolvido no Brasil",
  "Atuação internacional",
];

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28">
      {/* glow background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, color-mix(in oklab, var(--orange) 12%, transparent), transparent 50%)",
        }}
      />

      <div className="container-x relative grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <span className="eyebrow">Implantodontia de alta performance</span>
          <h1 className="text-display mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Resultados <span className="text-[color:var(--orange)]">extraordinários</span> começam com precisão.
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Implantes, kits e soluções cirúrgicas de alta precisão para
            profissionais que exigem desempenho, segurança e excelência clínica.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#produtos" className="btn-primary">
              Conheça os produtos
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#downloads" className="btn-ghost">
              <Download className="h-4 w-4" />
              Baixar catálogo
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
            {badges.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--orange)]" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[3/4] max-w-md mx-auto">
            <img
              src={heroImg}
              alt="Implante dentário Dérig com superfície Biotite"
              width={1600}
              height={1600}
              className="relative w-full h-full object-cover rounded-3xl animate-float"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.22) 5%, rgba(0,0,0,0.88) 15%, #000 24%)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.22) 5%, rgba(0,0,0,0.88) 15%, #000 24%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
