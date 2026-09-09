import { Globe2, ShieldCheck, BadgeCheck, Factory, Award } from "lucide-react";

const certs = [
  { icon: ShieldCheck, label: "ISO 13485", desc: "Gestão da qualidade para dispositivos médicos." },
  { icon: BadgeCheck, label: "CE", desc: "Conformidade com diretivas europeias." },
  { icon: Award, label: "ANVISA", desc: "Regularização nacional para uso clínico." },
  { icon: Factory, label: "BPF", desc: "Boas Práticas de Fabricação auditadas." },
  { icon: Globe2, label: "Internacional", desc: "Presença em múltiplos mercados." },
];

export function GlobalQuality() {
  return (
    <section id="qualidade" className="relative py-12 md:py-16 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          background:
            "radial-gradient(900px 500px at 50% 0%, color-mix(in oklab, var(--orange) 10%, transparent), transparent 60%)",
        }}
      />

      <div className="container-x">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow">Qualidade Global</span>
          <h2 className="text-display mt-4 text-3xl md:text-5xl">
            Qualidade brasileira com padrão{" "}
            <span className="text-[color:var(--orange)]">internacional</span>.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            A Dérig combina engenharia, controle de qualidade, rastreabilidade e
            certificações para entregar soluções confiáveis à implantodontia.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {certs.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="card-premium p-6 text-center">
              <div className="mx-auto h-12 w-12 rounded-full flex items-center justify-center bg-[color:var(--orange)]/10 ring-1 ring-[color:var(--orange)]/30">
                <Icon className="h-5 w-5 text-[color:var(--orange)]" />
              </div>
              <h3 className="mt-4 font-semibold tracking-tight">{label}</h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
