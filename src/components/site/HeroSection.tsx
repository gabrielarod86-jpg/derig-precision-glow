import { ArrowRight, Download } from "lucide-react";
import heroAsset from "@/assets/implants/dynamic-hero.png.asset.json";

const heroImg = heroAsset.url;

const callouts = [
  { top: "16%", label: "Conexão interna", value: "Cone Morse" },
  { top: "47%", label: "Espiras progressivas", value: "Alta estabilidade" },
  { top: "78%", label: "Superfície Biotite", value: "Osseointegração" },
];

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
            {/* halo principal */}
            <div
              aria-hidden
              className="absolute inset-[6%] -z-10 rounded-full blur-3xl animate-pulse-ring"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.20) 0%, rgba(243,122,33,0.18) 32%, rgba(243,122,33,0.04) 56%, transparent 76%)",
              }}
            />

            {/* anéis técnicos girando */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -z-10 h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[color:var(--orange)]/25 animate-spin-slow"
            />
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -z-10 h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color:var(--orange)]/15 animate-spin-slow-rev"
            >
              <span className="absolute -top-[3px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[color:var(--orange)] shadow-[0_0_12px_rgba(243,122,33,0.9)]" />
            </div>

            {/* malha técnica sutil */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 opacity-[0.10]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "38px 38px",
                WebkitMaskImage:
                  "radial-gradient(circle at 50% 45%, #000 0%, transparent 70%)",
                maskImage:
                  "radial-gradient(circle at 50% 45%, #000 0%, transparent 70%)",
              }}
            />

            {/* implante — geometria e superfície preservadas */}
            <img
              src={heroImg}
              alt="Implante dentário Dynamic Dérig 4,3 x 13 mm"
              width={516}
              height={1768}
              className="relative h-full w-full object-contain object-center animate-float"
              style={{
                filter:
                  "drop-shadow(0 30px 34px rgba(0,0,0,0.78)) drop-shadow(0 0 22px rgba(243,122,33,0.22))",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.82) 6%, #000 14%, #000 93%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.82) 6%, #000 14%, #000 93%, transparent 100%)",
              }}
            />

            {/* varredura de luz */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-[10%] top-0 h-[22%] animate-scan"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(255,255,255,0.10) 45%, rgba(243,122,33,0.16) 60%, transparent)",
                filter: "blur(6px)",
              }}
            />

            {/* reflexo na base */}
            <div
              aria-hidden
              className="absolute -bottom-2 left-1/2 h-6 w-[52%] -translate-x-1/2 rounded-[100%] blur-xl"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(243,122,33,0.35) 0%, transparent 70%)",
              }}
            />

            {/* legendas técnicas */}
            {callouts.map((c, i) => (
              <div
                key={c.label}
                className="hidden md:flex absolute items-center gap-2 animate-fade-up"
                style={{
                  top: c.top,
                  [i === 1 ? "left" : "right"]: "-6%",
                  animationDelay: `${0.5 + i * 0.15}s`,
                }}
              >
                {i === 1 && (
                  <span className="h-px w-8 bg-gradient-to-r from-transparent to-[color:var(--orange)]/60" />
                )}
                <div className="rounded-lg border border-[color:var(--hairline)] bg-background/60 px-3 py-2 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-[color:var(--orange)]">
                    {c.label}
                  </p>
                  <p className="text-xs text-foreground/85">{c.value}</p>
                </div>
                {i !== 1 && (
                  <span className="h-px w-8 bg-gradient-to-l from-transparent to-[color:var(--orange)]/60" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-6 text-center">
            {[
              { k: "Ø 4,3 mm", v: "Diâmetro" },
              { k: "13 mm", v: "Comprimento" },
              { k: "Biotite", v: "Superfície" },
            ].map((s) => (
              <div key={s.k}>
                <p className="text-sm font-semibold text-foreground">{s.k}</p>
                <p className="text-[11px] text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
