import implant from "@/assets/product-conemorse.jpg";
import hex from "@/assets/product-hexagon.jpg";
import kitGuide from "@/assets/kits/kit-derig-guide.png";
import drills from "@/assets/product-drills.jpg";
import components from "@/assets/components-showcase-exact.png";
import kitProtetico from "@/assets/kits/kit-protetico.png";
import biotite from "@/assets/biotite-surface.jpg";

const products = [
  { name: "Implantes Cone Morse", desc: "Conexão cônica de alta estabilidade mecânica.", img: implant },
  { name: "Implantes Hexágono Externo", desc: "Versatilidade protética com referência clínica consolidada.", img: hex },
  { name: "Implantes Triplo Canal", desc: "Indexação precisa para reabilitações múltiplas.", img: implant },
  { name: "Componentes Protéticos", desc: "Soluções convencionais e digitais para sistemas CMH, TRI e HEX.", img: components },
  { name: "Kits Cirúrgicos", desc: "Cirurgia guiada e protocolos completos para uma instalação precisa.", img: kitGuide },
  { name: "Kit Protético", desc: "Instrumentais dedicados ao fluxo reabilitador.", img: kitProtetico },
  { name: "Fresas Cirúrgicas", desc: "Corte preciso e durabilidade no preparo ósseo.", img: drills },
  { name: "Instrumentais", desc: "Soluções auxiliares para procedimentos controlados.", img: drills },
  { name: "Biomateriais", desc: "Apoio ao processo regenerativo e à previsibilidade clínica.", img: biotite },
];

export function FeaturedProducts() {
  return (
    <section id="produtos" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-4xl">
          <div>
            <span className="eyebrow">Produtos</span>
            <h2 className="text-display mt-4 text-3xl md:text-5xl">
              Produtos desenvolvidos para alta performance clínica.
            </h2>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {products.map((p) => (
            <article
              key={p.name}
              className="card-premium group overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden bg-black">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${
                    ["Componentes Protéticos", "Kits Cirúrgicos", "Kit Protético"].includes(p.name)
                      ? "object-contain p-3"
                      : "object-cover"
                  }`}
                />
                <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] px-2 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                  Dérig
                </div>
              </div>
              <div className="p-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold tracking-tight">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <a
                  href={
                    p.name === "Componentes Protéticos"
                      ? "#componentes"
                      : p.name === "Kits Cirúrgicos"
                        ? "/kits-cirurgicos"
                        : "#contato"
                  }
                  className="shrink-0 text-xs font-medium text-[color:var(--orange)] hover:underline"
                >
                  Saiba mais
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
