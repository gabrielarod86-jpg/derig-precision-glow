import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Download, Search, Wrench } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCTA } from "@/components/site/MobileCTA";

const torqueGuideFile = "/docs/guia-de-torque/guia-de-torque-derig.pdf";
const guideCover = "/docs/guia-de-torque/pages/pagina-1.jpg";

const guideTables = [
  {
    number: "01",
    title: "Torques para implantes",
    description: "Referências organizadas por linha, conexão e plataforma do implante.",
    image: "/docs/guia-de-torque/pages/pagina-2.jpg",
    alt: "Tabela de torque para implantes Dérig",
  },
  {
    number: "02",
    title: "Torques para componentes protéticos",
    description: "Valores indicados para componentes, pilares, transferentes e interfaces.",
    image: "/docs/guia-de-torque/pages/pagina-3.jpg",
    alt: "Tabela de torque para componentes protéticos Dérig",
  },
];

export const Route = createFileRoute("/guia-de-torque")({
  head: () => ({
    meta: [
      { title: "Guia de Torque Dérig" },
      {
        name: "description",
        content:
          "Consulte as tabelas de referência do Guia de Torque Dérig para implantes e componentes protéticos.",
      },
      { property: "og:title", content: "Guia de Torque Dérig" },
      {
        property: "og:description",
        content: "Tabelas de referência rápida para instalação de produtos Dérig.",
      },
      { name: "twitter:title", content: "Guia de Torque Dérig" },
      {
        name: "twitter:description",
        content: "Consulte e baixe o Guia de Torque oficial da Dérig.",
      },
    ],
  }),
  component: TorqueGuidePage,
});

function TorqueGuidePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pb-20 pt-28 md:pb-28 md:pt-36">
        <section className="container-x">
          <a
            href="/#downloads"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[color:var(--orange)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para downloads
          </a>

          <div className="mt-10 overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-[linear-gradient(135deg,rgba(255,102,24,0.08),transparent_55%)]">
            <div className="grid lg:grid-cols-[1fr_0.42fr] lg:items-center">
              <div className="p-6 sm:p-9 md:p-12 lg:p-14">
                <span className="eyebrow">Biblioteca técnica</span>
                <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl md:text-7xl">
                  Guia de torque
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Consulte de forma rápida os torques indicados para implantes e componentes
                  protéticos Dérig.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={torqueGuideFile} download className="btn-primary">
                    Baixar guia em PDF <Download className="h-4 w-4" />
                  </a>
                  <a href={torqueGuideFile} target="_blank" rel="noreferrer" className="btn-ghost">
                    Abrir PDF <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="flex h-full items-center justify-center border-t border-[color:var(--hairline)] bg-black/20 p-6 lg:border-l lg:border-t-0 lg:p-9">
                <img
                  src={guideCover}
                  alt="Capa do Guia de Torque Dérig"
                  className="w-full max-w-[300px] rounded-2xl shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container-x mt-16 md:mt-24">
          <div className="max-w-3xl">
            <span className="eyebrow">Consulta orientada</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl md:text-5xl">
              Encontre o torque em três passos.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Search,
                number: "01",
                title: "Identifique o produto",
                text: "Localize a linha de implante ou o componente protético utilizado.",
              },
              {
                icon: Wrench,
                number: "02",
                title: "Confira a referência",
                text: "Confirme a conexão, a plataforma e a indicação correspondente.",
              },
              {
                icon: CheckCircle2,
                number: "03",
                title: "Consulte o torque",
                text: "Aplique o valor indicado na coluna de torque da tabela oficial.",
              },
            ].map((step) => (
              <article key={step.number} className="card-premium p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--orange)]/10 ring-1 ring-[color:var(--orange)]/30">
                    <step.icon className="h-5 w-5 text-[color:var(--orange)]" />
                  </div>
                  <span className="text-sm font-semibold tracking-[0.16em] text-[color:var(--orange)]">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container-x mt-16 md:mt-24">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="eyebrow">Tabelas oficiais</span>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl md:text-5xl">
                Consulte diretamente na página.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                As informações do documento foram organizadas abaixo para uma leitura mais simples,
                sem os controles do visualizador de PDF.
              </p>
            </div>
            <a href={torqueGuideFile} download className="btn-ghost shrink-0">
              Baixar PDF <Download className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-8 xl:grid-cols-2">
            {guideTables.map((table) => (
              <article
                key={table.number}
                className="overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-[#efeeeb] shadow-[0_26px_70px_rgba(0,0,0,0.25)]"
              >
                <div className="flex items-start gap-4 border-b border-black/10 bg-white px-5 py-5 text-black sm:px-7">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--orange)] text-sm font-bold text-black">
                    {table.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                      {table.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-black/60">
                      {table.description}
                    </p>
                  </div>
                </div>
                <img src={table.image} alt={table.alt} loading="lazy" className="h-auto w-full" />
              </article>
            ))}
          </div>
        </section>

        <section className="container-x mt-16 md:mt-24">
          <div className="rounded-3xl border border-[color:var(--orange)]/35 bg-[linear-gradient(135deg,rgba(255,102,24,0.14),rgba(255,102,24,0.03))] p-7 text-center sm:p-10 md:p-12">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
              Tenha o guia sempre disponível.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-muted-foreground">
              Baixe o documento oficial completo para consultar ou imprimir quando precisar.
            </p>
            <a href={torqueGuideFile} download className="btn-primary mt-7">
              Baixar guia em PDF <Download className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
