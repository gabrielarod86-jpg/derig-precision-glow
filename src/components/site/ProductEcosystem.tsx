import { ArrowUpRight } from "lucide-react";
import implant from "@/assets/product-conemorse.jpg";
import hex from "@/assets/product-hexagon.jpg";
import kit from "@/assets/product-kit.jpg";
import drills from "@/assets/product-drills.jpg";
import components from "@/assets/product-components.jpg";
import biotite from "@/assets/biotite-surface.jpg";

const items = [
  {
    title: "Implantes",
    desc: "Linhas completas com conexões confiáveis para diferentes indicações clínicas.",
    img: implant,
  },
  {
    title: "Componentes",
    desc: "Precisão protética para reabilitações funcionais, seguras e compatíveis.",
    img: components,
  },
  {
    title: "Kits Cirúrgicos",
    desc: "Organização, padronização e segurança no fluxo de instalação dos implantes.",
    img: kit,
  },
  {
    title: "Kit Protético",
    desc: "Instrumentais e acessórios para conduzir o fluxo reabilitador com mais controle.",
    img: hex,
  },
  {
    title: "Fresas Cirúrgicas",
    desc: "Desempenho, corte preciso e durabilidade no preparo ósseo.",
    img: drills,
  },
  {
    title: "Revestimento Biotite",
    desc: "Tecnologia de superfície desenvolvida para favorecer estabilidade e previsibilidade clínica.",
    img: biotite,
  },
];

export function ProductEcosystem() {
  return (
    <section id="sobre" className="relative py-24 md:py-32">
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

        {/* Mobile: carousel | Desktop: grid */}
        <div className="mt-12 lg:hidden -mx-5 px-5 flex gap-4 overflow-x-auto scroll-hide snap-x snap-mandatory">
          {items.map((it) => (
            <EcoCard key={it.title} {...it} className="min-w-[78%] snap-start" />
          ))}
        </div>
        <div className="mt-12 hidden lg:grid grid-cols-3 gap-6">
          {items.map((it) => (
            <EcoCard key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
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
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {desc}
        </p>
        <a
          href="#produtos"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--orange)] hover:gap-2.5 transition-all"
        >
          Ver linha <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
