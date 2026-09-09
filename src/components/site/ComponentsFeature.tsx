import { ArrowUpRight, Boxes, ScanLine, Waypoints } from "lucide-react";
import componentsShowcase from "@/assets/components-portfolio-2026.png";
import backgroundTexture from "@/assets/bg-texture.jpg";

const componentGroups = [
  {
    icon: Boxes,
    title: "Soluções protéticas",
    text: "Mini pilares retos e angulados, pilares estéticos, provisórios e UCLA CoCr para diferentes planejamentos reabilitadores.",
  },
  {
    icon: Waypoints,
    title: "Moldagem e cicatrização",
    text: "Transferentes para moldeira aberta e fechada, análogos, parafusos e pilares de cicatrização para conduzir cada etapa com precisão.",
  },
  {
    icon: ScanLine,
    title: "Fluxo digital",
    text: "Interfaces, transferes de escaneamento, análogos digitais, Scanbody L e soluções CAD/CAM para integrar clínica e laboratório.",
  },
];

export function ComponentsFeature() {
  return (
    <section id="componentes" className="relative border-y border-white/5 py-12 md:py-16">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">Componentes protéticos</span>
          <h2 className="text-display mt-4 text-3xl md:text-5xl">
            Precisão para conectar cada etapa da reabilitação.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Um portfólio completo para sistemas Cone Morse Hexagonal, Triplo Canal
            Interno e Hexágono Externo, com soluções convencionais e digitais para
            clínica e laboratório.
          </p>
        </div>

        <article className="card-premium mt-12 overflow-hidden">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative min-h-[430px] overflow-hidden sm:min-h-[500px] lg:min-h-[560px]">
              <img
                src={backgroundTexture}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-45"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_58%_55%,rgba(255,255,255,0.16),rgba(255,255,255,0.03)_38%,transparent_68%)]"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-[-18%] left-[20%] h-[50%] w-[68%] rounded-full bg-[color:var(--orange)]/10 blur-3xl"
              />
              <img
                src={componentsShowcase}
                alt="Família de componentes protéticos Dérig para fluxo convencional e digital"
                loading="lazy"
                className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] object-contain drop-shadow-[0_28px_45px_rgba(0,0,0,0.72)] sm:inset-6 sm:h-[calc(100%-3rem)] sm:w-[calc(100%-3rem)]"
              />
            </div>

            <div className="relative flex flex-col justify-center border-t border-white/10 bg-black/45 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--orange)]">
                Portfólio integrado
              </span>
              <h3 className="text-display mt-4 text-3xl sm:text-4xl">
                Do componente provisório à solução definitiva.
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Componentes desenvolvidos para dar continuidade ao tratamento com
                compatibilidade, organização e previsibilidade protética.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "CMH",
                  "TRI",
                  "HEX",
                  "Odontologia digital",
                ].map((system) => (
                  <span
                    key={system}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-foreground/80"
                  >
                    {system}
                  </span>
                ))}
              </div>

              <a
                href="#contato"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--orange)] px-5 py-3 text-sm font-semibold text-[color:var(--orange)] transition-colors hover:bg-[color:var(--orange)] hover:text-black"
              >
                Falar com um consultor <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-5 md:grid-cols-3 md:gap-6">
          {componentGroups.map(({ icon: Icon, title, text }) => (
            <article key={title} className="card-premium p-6 sm:p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--orange)]/30 bg-[color:var(--orange)]/10 text-[color:var(--orange)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>

        <p className="mt-5 text-xs leading-relaxed text-muted-foreground/70">
          A disponibilidade dos produtos pode variar conforme o mercado. Consulte
          um representante Dérig para confirmar as opções disponíveis.
        </p>
      </div>
    </section>
  );
}
