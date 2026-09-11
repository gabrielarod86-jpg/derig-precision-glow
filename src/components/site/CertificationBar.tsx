import { Globe2, Factory, Award } from "lucide-react";

const items = [
  { icon: Award, label: "ANVISA" },
  { icon: Factory, label: "BPF" },
  { icon: Globe2, label: "Atuação internacional" },
];

export function CertificationBar() {
  return (
    <section className="relative border-y border-[color:var(--hairline)] bg-[color:var(--surface)]/40">
      <div className="container-x py-6 md:py-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <span className="eyebrow">Autoridade & Conformidade</span>
            <p className="mt-3 text-lg md:text-xl text-foreground/90 leading-relaxed">
              Processos certificados, padrões internacionais e compromisso
              contínuo com segurança, rastreabilidade e desempenho clínico.
            </p>
          </div>
          <ul className="lg:col-span-7 grid sm:grid-cols-3 gap-3">
            {items.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="card-premium p-4 flex flex-col items-center justify-center gap-2 text-center"
              >
                <Icon className="h-6 w-6 text-[color:var(--orange)]" />
                <span className="text-xs font-medium tracking-wide text-foreground/90">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
