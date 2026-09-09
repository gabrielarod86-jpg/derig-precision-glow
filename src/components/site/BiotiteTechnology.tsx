import { ArrowRight, Microscope, Atom, Layers } from "lucide-react";
import surface from "@/assets/biotite-surface.jpg";

const stats = [
  { icon: Microscope, label: "Precisão microscópica" },
  { icon: Atom, label: "Engenharia de superfície" },
  { icon: Layers, label: "Maior área de contato" },
];

export function BiotiteTechnology() {
  return (
    <section
      id="biotite"
      className="relative overflow-hidden py-12 md:py-16 border-y border-[color:var(--hairline)]"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(800px 400px at 80% 50%, color-mix(in oklab, var(--orange) 18%, transparent), transparent 60%)",
        }}
      />

      <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
        <div className="order-2 lg:order-1">
          <span className="eyebrow">Biotite Technology</span>
          <h2 className="text-display mt-4 text-3xl md:text-5xl">
            Mais que uma superfície. <br className="hidden md:block" />
            É <span className="text-[color:var(--orange)]">desempenho clínico</span>.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            O revestimento Biotite representa a tecnologia de superfície da
            Dérig, desenvolvido para ampliar a área de contato, favorecer a
            estabilidade e contribuir para um processo de osseointegração mais
            previsível.
          </p>

          <ul className="mt-8 grid sm:grid-cols-3 gap-3">
            {stats.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="card-premium p-4 flex items-start gap-3"
              >
                <Icon className="h-5 w-5 text-[color:var(--orange)] mt-0.5" />
                <span className="text-sm font-medium leading-snug">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <blockquote className="mt-10 border-l-2 border-[color:var(--orange)] pl-5 text-foreground/90 italic max-w-lg">
            "Desempenho começa onde os olhos não veem."
          </blockquote>

          <a href="#produtos" className="btn-primary mt-8">
            Conheça a tecnologia <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="relative aspect-square max-w-xl mx-auto">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in oklab, var(--orange) 40%, transparent), transparent 70%)",
              }}
            />
            <div className="relative h-full w-full rounded-[2rem] overflow-hidden ring-1 ring-white/10 glow-orange">
              <img
                src={surface}
                alt="Macro da superfície Biotite"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              {/* Technical annotations */}
              <div className="absolute top-8 left-8 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-[color:var(--orange)] ring-4 ring-[color:var(--orange)]/20" />
                <span className="text-xs tracking-wide font-medium text-white/90 backdrop-blur-md bg-black/30 px-2.5 py-1 rounded-full">
                  Micro-porosidade controlada
                </span>
              </div>
              <div className="absolute bottom-10 right-8 flex items-center gap-3">
                <span className="text-xs tracking-wide font-medium text-white/90 backdrop-blur-md bg-black/30 px-2.5 py-1 rounded-full">
                  Maior área de contato ósseo
                </span>
                <div className="h-3 w-3 rounded-full bg-[color:var(--orange)] ring-4 ring-[color:var(--orange)]/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
