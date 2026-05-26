import { FileText, BookOpen, Wrench, ClipboardList, Stethoscope, FlaskConical, ArrowRight } from "lucide-react";

const docs = [
  { icon: FileText, title: "Catálogos", desc: "Linhas completas e referências comerciais." },
  { icon: BookOpen, title: "Instruções de uso", desc: "Documentação oficial dos produtos." },
  { icon: Wrench, title: "Guia de torque", desc: "Referência rápida para instalação." },
  { icon: ClipboardList, title: "Protocolos técnicos", desc: "Fluxos cirúrgicos e protéticos." },
  { icon: Stethoscope, title: "Casos clínicos", desc: "Aplicações práticas e resultados." },
  { icon: FlaskConical, title: "Materiais científicos", desc: "Evidências e estudos de superfície." },
];

export function TechnicalLibrary() {
  return (
    <section id="downloads" className="relative py-24 md:py-32 bg-[color:var(--surface)]/40 border-y border-[color:var(--hairline)]">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-4xl">
          <div>
            <span className="eyebrow">Biblioteca técnica</span>
            <h2 className="text-display mt-4 text-3xl md:text-5xl">
              Informação técnica para decisões mais seguras.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl">
              Acesse catálogos, instruções de uso, guias de torque, materiais
              técnicos e conteúdos de apoio para profissionais.
            </p>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {docs.map(({ icon: Icon, title, desc }) => (
            <a
              key={title}
              href="#contato"
              className="card-premium p-6 flex items-start gap-4 group"
            >
              <div className="h-11 w-11 shrink-0 rounded-xl bg-[color:var(--orange)]/10 ring-1 ring-[color:var(--orange)]/30 flex items-center justify-center">
                <Icon className="h-5 w-5 text-[color:var(--orange)]" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold tracking-tight">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-[color:var(--orange)]" />
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#contato" className="btn-primary">
            Acessar downloads <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
