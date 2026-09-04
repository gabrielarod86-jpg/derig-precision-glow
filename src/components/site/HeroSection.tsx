import { ArrowRight, Download } from "lucide-react";
import heroImg from "@/assets/implants/dynamic-4.3x13-sandblasted.png";

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
          <div className="relative isolate aspect-[3/4] max-w-md mx-auto">
            <div
              aria-hidden
              className="absolute inset-[8%] -z-10 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 28%, rgba(255,255,255,0.22) 0%, rgba(243,122,33,0.15) 30%, rgba(243,122,33,0.04) 54%, transparent 74%)",
              }}
            />
            <div
              aria-hidden
              className="absolute left-[9%] top-[17%] -z-10 h-[58%] w-[82%] rounded-full opacity-80 blur-2xl"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(243,122,33,0.22) 0%, rgba(243,122,33,0.05) 46%, transparent 72%)",
              }}
            />
            <img
              src={heroImg}
              alt="Implante dentário Dynamic Dérig 4,3 x 13 mm"
              width={828}
              height={1900}
              className="relative h-full w-full object-contain object-center animate-float"
              style={{
                filter:
                  "brightness(0.82) contrast(1.16) drop-shadow(0 28px 30px rgba(0,0,0,0.75)) drop-shadow(0 0 16px rgba(243,122,33,0.2))",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.82) 7%, #000 15%, #000 92%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.82) 7%, #000 15%, #000 92%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
