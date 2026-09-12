import { ArrowUpRight } from "lucide-react";
import implantsShowcase from "@/assets/implantes-oficial-sem-logo.png";

export function ProductEcosystem() {
  return (
    <section id="sobre" className="section-flow relative py-16 md:py-24">
      <span id="produtos" className="absolute -top-24" aria-hidden="true" />
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">Ecossistema Dérig</span>
          <h2 className="text-display mt-4 text-3xl md:text-5xl">
            Soluções completas para cada etapa da implantodontia.
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            Da perfuração ao resultado protético, a Dérig oferece um ecossistema
            completo para cirurgias previsíveis, organizadas e eficientes.
          </p>
        </div>

        <div className="mt-12">
          <ImplantFeature />
        </div>
      </div>
    </section>
  );
}

function ImplantFeature() {
  return (
    <article className="card-premium implant-feature-panel relative min-h-[720px] overflow-hidden sm:min-h-[660px] md:min-h-[520px]">
      <div
        aria-hidden="true"
        className="implant-floor-extension absolute inset-y-0 left-0 hidden w-[58%] bg-left bg-no-repeat md:block"
        style={{ backgroundImage: `url(${implantsShowcase})` }}
      />
      <img
        src={implantsShowcase}
        alt="Linhas de implantes TRI, Dynamic, HEX, CMH, Kort e Zigomático"
        loading="lazy"
        className="implant-showcase-image absolute bottom-[-5%] left-1/2 h-[74%] w-auto max-w-none -translate-x-1/2 object-contain md:bottom-auto md:left-auto md:right-0 md:top-1/2 md:h-[158%] md:translate-x-0 md:-translate-y-1/2"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,4,5,0.96)_0%,rgba(3,4,5,0.9)_22%,rgba(3,4,5,0.7)_37%,rgba(3,4,5,0.42)_48%,rgba(3,4,5,0.14)_57%,rgba(3,4,5,0)_68%)]"
      />

      <div className="relative z-10 flex min-h-[720px] items-start p-7 sm:min-h-[660px] sm:p-10 md:min-h-[520px] md:items-center md:p-12">
        <div className="max-w-sm">
          <span className="eyebrow">Linha de implantes</span>
          <h3 className="text-display mt-4 text-4xl sm:text-5xl">Implantes</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Diferentes geometrias e conexões para oferecer estabilidade,
            precisão e previsibilidade em cada indicação clínica.
          </p>
          <a
            href="/implantes"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-[color:var(--orange)] px-5 py-3 text-sm font-semibold text-[color:var(--orange)] transition-colors hover:bg-[color:var(--orange)] hover:text-black"
          >
            Conhecer a linha <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
