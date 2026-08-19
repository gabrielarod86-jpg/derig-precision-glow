import { ArrowRight } from "lucide-react";
import kitGuide from "@/assets/kits/kit-derig-guide.png";
import kitConico from "@/assets/kits/kit-cirurgico-conico.png";

const items = [
  "Kit Cirúrgico Cônico",
  "Kit Cirúrgico Cilíndrico",
  "Kit Dérig Guide",
  "Kit Protético",
  "Kit de Fresas",
  "Fresas Cirúrgicas",
];

export function KitsAndDrills() {
  return (
    <section className="relative py-24 md:py-32 bg-[color:var(--surface)]/40 border-y border-[color:var(--hairline)]">
      <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <span className="eyebrow">Kits & Fresas</span>
          <h2 className="text-display mt-4 text-3xl md:text-4xl">
            Kits e fresas para procedimentos mais organizados, seguros e
            precisos.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            A Dérig oferece soluções instrumentais para apoiar o profissional em
            diferentes etapas cirúrgicas e protéticas, com foco em controle,
            padronização e eficiência clínica.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-2">
            {items.map((i) => (
              <li
                key={i}
                className="text-sm text-foreground/90 flex items-center gap-2 border border-[color:var(--hairline)] rounded-lg px-3 py-2.5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--orange)]" />
                {i}
              </li>
            ))}
          </ul>

          <a href="/kits-cirurgicos" className="btn-primary mt-8">
            Ver kits e instrumentais <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          <div className="card-premium overflow-hidden aspect-[3/4]">
            <img
              src={kitGuide}
              alt="Kit Dérig Guide para cirurgia guiada"
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="card-premium overflow-hidden aspect-[3/4] translate-y-8">
            <img
              src={kitConico}
              alt="Kit cirúrgico cônico Dérig"
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
