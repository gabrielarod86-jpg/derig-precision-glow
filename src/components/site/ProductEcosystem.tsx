import { ArrowUpRight } from "lucide-react";
import implant from "@/assets/product-conemorse.jpg";
import kitGuide from "@/assets/kits/kit-derig-guide.png";
import kitProtetico from "@/assets/kits/kit-protetico.png";
import components from "@/assets/components-portfolio-2026.png";
import implantsShowcase from "@/assets/derig-implantes-4k.png";
import backgroundTexture from "@/assets/bg-texture.jpg";

const items = [
  {
    title: "Implantes",
    desc: "Linhas completas com conexões confiáveis para diferentes indicações clínicas.",
    img: implant,
  },
  {
    title: "Componentes",
    desc: "Soluções protéticas convencionais e digitais para sistemas CMH, TRI e HEX.",
    img: components,
  },
  {
    title: "Kits Cirúrgicos",
    desc: "Organização, padronização e segurança no fluxo de instalação dos implantes.",
    img: kitGuide,
  },
  {
    title: "Kit Protético",
    desc: "Instrumentais e acessórios para conduzir o fluxo reabilitador com mais controle.",
    img: kitProtetico,
  },
];

const secondaryItems = items.slice(1);

export function ProductEcosystem() {
  return (
    <section id="sobre" className="relative py-24 md:py-32">
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

        {/* Mobile: carousel | Desktop: grid */}
        <div className="mt-6 lg:hidden -mx-5 px-5 flex gap-4 overflow-x-auto scroll-hide snap-x snap-mandatory">
          {secondaryItems.map((it) => (
            <EcoCard key={it.title} {...it} className="min-w-[78%] snap-start" />
          ))}
        </div>
        <div className="mt-6 hidden lg:grid grid-cols-3 gap-6">
          {secondaryItems.map((it) => (
            <EcoCard key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ImplantFeature() {
  return (
    <article className="card-premium relative min-h-[720px] overflow-hidden sm:min-h-[660px] md:min-h-[520px]">
      <img
        src={backgroundTexture}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <img
        src={implantsShowcase}
        alt="Família de implantes dentários Dérig"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,3,3,0.98)_0%,rgba(3,3,3,0.90)_38%,rgba(3,3,3,0.28)_72%,rgba(3,3,3,0.72)_100%)]"
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

function EcoCard({
  title,
  desc,
  img,
  className = "",
}: {
  title: string;
  desc: string;
  img: string;
  className?: string;
}) {
  return (
    <article className={`card-premium overflow-hidden group ${className}`}>
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${
            ["Componentes", "Kits Cirúrgicos", "Kit Protético"].includes(title)
              ? "object-contain p-3"
              : "object-cover"
          }`}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {desc}
        </p>
        <a
          href={
            title === "Componentes"
              ? "#componentes"
              : title === "Kits Cirúrgicos"
                ? "/kits-cirurgicos"
                : "#produtos"
          }
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--orange)] hover:gap-2.5 transition-all"
        >
          Ver linha <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
