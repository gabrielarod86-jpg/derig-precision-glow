import { ShieldCheck, BadgeCheck, Globe2, Factory, Award } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "ISO 13485" },
  { icon: BadgeCheck, label: "CE" },
  { icon: Award, label: "ANVISA" },
  { icon: Factory, label: "BPF" },
  { icon: Globe2, label: "Atuação internacional" },
];

export function CertificationBar() {
  return (
    <section className="relative border-y border-[color:var(--hairline)] bg-[color:var(--surface)]/40">
      <div className="container-x py-12 md:py-16">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <span className="eyebrow">Autoridade & Conformidade</span>
            <p className="mt-3 text-lg md:text-xl text-foreground/90 leading-relaxed">
              Processos certificados, padrões internacionais e compromisso
              contínuo com segurança, rastreabilidade e desempenho clínico.
            </p>
          </div>
          <ul className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
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
