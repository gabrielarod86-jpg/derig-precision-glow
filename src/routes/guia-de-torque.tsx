import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Download, Gauge, Wrench } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCTA } from "@/components/site/MobileCTA";

const torqueGuideFile = "/docs/guia-de-torque/guia-de-torque-derig.pdf";

export const Route = createFileRoute("/guia-de-torque")({
  head: () => ({
    meta: [
      { title: "Guia de Torque Dérig" },
      {
        name: "description",
        content:
          "Consulte as tabelas de referência do Guia de Torque Dérig para componentes e instrumentais.",
      },
      { property: "og:title", content: "Guia de Torque Dérig" },
      {
        property: "og:description",
        content:
          "Tabelas de referência rápida para instalação de produtos Dérig.",
      },
      { name: "twitter:title", content: "Guia de Torque Dérig" },
      {
        name: "twitter:description",
        content: "Consulte o Guia de Torque oficial da Dérig.",
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

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.75fr_0.25fr] lg:items-end">
            <div className="max-w-4xl">
              <span className="eyebrow">Biblioteca técnica</span>
              <h1 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl md:text-7xl">
                Guia de torque
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Tabelas de referência para consulta dos torques indicados nos
                procedimentos com produtos e componentes Dérig.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href={torqueGuideFile}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Abrir PDF <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={torqueGuideFile} download className="btn-ghost">
                Baixar <Download className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="card-premium flex items-start gap-4 p-5 md:p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color:var(--orange)]/10 ring-1 ring-[color:var(--orange)]/30">
                <Wrench className="h-5 w-5 text-[color:var(--orange)]" />
              </div>
              <div>
                <h2 className="font-semibold tracking-tight">Referência rápida</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Consulte as tabelas durante o planejamento e a execução do
                  procedimento.
                </p>
              </div>
            </div>

            <div className="card-premium flex items-start gap-4 p-5 md:p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color:var(--orange)]/10 ring-1 ring-[color:var(--orange)]/30">
                <Gauge className="h-5 w-5 text-[color:var(--orange)]" />
              </div>
              <div>
                <h2 className="font-semibold tracking-tight">Documento oficial</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Conteúdo preservado no arquivo PDF original fornecido pela
                  Dérig.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <iframe
              title="Guia de Torque Dérig"
              src={`${torqueGuideFile}#view=FitH`}
              className="h-[72vh] min-h-[620px] w-full bg-white"
            />
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
