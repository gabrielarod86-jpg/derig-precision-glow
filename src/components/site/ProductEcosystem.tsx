import { ArrowUpRight } from "lucide-react";
import implant from "@/assets/product-conemorse.jpg";
import implantsShowcase from "@/assets/implantes-capa-sem-texto.png";

export function ProductEcosystem() {
  return (
    <section id="sobre" className="relative py-12 md:py-16">
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
    <article className="card-premium relative min-h-[720px] overflow-hidden sm:min-h-[660px] md:min-h-[520px]">
      <img
        src={implantsShowcase}
        alt="Família de implantes dentários Dérig"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-[68%_center] md:origin-[74%_60%] md:scale-[1.22]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,3,3,0.98)_0%,rgba(3,3,3,0.88)_38%,rgba(3,3,3,0.12)_68%,rgba(3,3,3,0.26)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-12%] right-[-2%] h-[92%] w-[72%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.13)_0%,rgba(255,255,255,0.03)_42%,transparent_72%)] blur-2xl"
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
