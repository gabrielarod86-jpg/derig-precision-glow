import { ArrowRight, Download } from "lucide-react";
import heroBackground from "@/assets/hero-dynamic-user-exact-v2.png";

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
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden py-28 md:min-h-[calc(100svh-5rem)] md:py-36"
    >
      <img
        src={heroBackground}
        alt=""
        width={1920}
        height={1080}
        aria-hidden
        className="absolute inset-0 z-0 h-full w-full object-cover object-[68%_center] sm:object-[65%_center] lg:object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 z-20"
        style={{
          background:
            "linear-gradient(90deg, rgba(3,3,3,0.98) 0%, rgba(3,3,3,0.9) 34%, rgba(3,3,3,0.46) 54%, rgba(3,3,3,0.04) 78%), linear-gradient(180deg, rgba(3,3,3,0.16) 0%, transparent 38%, rgba(3,3,3,0.32) 100%)",
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
