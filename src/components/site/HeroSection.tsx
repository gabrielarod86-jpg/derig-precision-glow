import { ArrowRight, Download } from "lucide-react";
import implantDynamic from "@/assets/implant-dynamic-user-exact-cutout-v1.png";

const badges = [
  "Tecnologia Biotite",
  "Alta precisão",
  "Qualidade A+",
  "Desenvolvido no Brasil",
  "Atuação internacional",
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-transparent py-28 md:min-h-[calc(100svh-5rem)] md:py-36"
    >
      <div
        aria-hidden
        className="hero-layer-fade absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 73% 46%, rgba(243,122,33,0.16) 0%, rgba(243,122,33,0.05) 25%, transparent 55%), radial-gradient(ellipse at 38% 48%, rgba(115,122,128,0.16) 0%, rgba(70,75,80,0.08) 38%, transparent 72%), linear-gradient(115deg, rgba(18,20,22,0.18) 0%, rgba(28,31,34,0.08) 54%, rgba(12,9,7,0.2) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-y-0 right-[-8%] z-[1] w-[75%] opacity-55 sm:right-[-3%] sm:w-[62%] lg:right-[4%] lg:w-[48%]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.28) 0 0.7px, transparent 0.9px), radial-gradient(circle, rgba(243,122,33,0.32) 0 0.6px, transparent 0.85px)",
          backgroundPosition: "0 0, 7px 9px",
          backgroundSize: "17px 17px, 23px 23px",
          WebkitMaskImage:
            "radial-gradient(ellipse at 58% 48%, #000 0%, rgba(0,0,0,0.78) 32%, transparent 72%)",
          maskImage:
            "radial-gradient(ellipse at 58% 48%, #000 0%, rgba(0,0,0,0.78) 32%, transparent 72%)",
        }}
      />
      <div
        aria-hidden
        className="absolute right-[-10%] top-[12%] z-[2] h-[72%] w-[66%] rounded-[50%] border border-white/10 sm:right-[1%] sm:w-[52%] lg:right-[10%] lg:w-[38%]"
        style={{ boxShadow: "0 0 80px rgba(243,122,33,0.08), inset 0 0 70px rgba(243,122,33,0.05)" }}
      />
      <div
        aria-hidden
        className="absolute bottom-[9%] right-[2%] z-[3] h-[18%] w-[58%] rounded-full bg-[rgba(243,122,33,0.16)] blur-3xl sm:right-[8%] sm:w-[44%] lg:right-[14%] lg:w-[30%]"
      />
      <img
        src={implantDynamic}
        alt="Implante dentário Dynamic Dérig com tratamento de superfície microtexturizado"
        width={827}
        height={1902}
        draggable={false}
        className="pointer-events-none absolute bottom-[8%] right-[-14%] z-10 h-[70%] w-auto max-w-none select-none object-contain opacity-50 [filter:contrast(1.1)_brightness(0.94)_drop-shadow(0_34px_42px_rgba(0,0,0,0.82))_drop-shadow(0_0_22px_rgba(243,122,33,0.13))] sm:right-[5%] sm:h-[79%] sm:opacity-90 lg:right-[17%] lg:h-[84%] lg:opacity-100"
      />
      <div
        aria-hidden
        className="hero-layer-fade absolute inset-0 z-20"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,10,12,0.38) 0%, rgba(8,10,12,0.32) 34%, rgba(5,6,7,0.18) 53%, rgba(3,3,3,0.02) 74%), linear-gradient(180deg, rgba(3,3,3,0.03) 0%, transparent 46%, rgba(3,3,3,0.14) 100%)",
        }}
      />

      <div className="container-x relative z-30 grid w-full items-center lg:grid-cols-12">
        <div className="animate-fade-up lg:col-span-7">
          <span className="eyebrow">Implantodontia de alta performance</span>
          <h1 className="text-display mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Resultados <span className="text-[color:var(--orange)]">extraordinários</span> começam
            com precisão.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Implantes, kits e soluções cirúrgicas de alta precisão para profissionais que exigem
            desempenho, segurança e excelência clínica.
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
      </div>
    </section>
  );
}
