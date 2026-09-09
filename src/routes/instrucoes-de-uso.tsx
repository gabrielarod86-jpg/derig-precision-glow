import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Download,
  FileText,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCTA } from "@/components/site/MobileCTA";

export const Route = createFileRoute("/instrucoes-de-uso")({
  head: () => ({
    meta: [
      { title: "Instruções de Uso Dérig" },
      {
        name: "description",
        content:
          "Consulte e baixe as instruções de uso oficiais dos produtos e instrumentais Dérig.",
      },
      { property: "og:title", content: "Instruções de Uso Dérig" },
      {
        property: "og:description",
        content:
          "Documentação oficial para implantes, componentes, instrumentais, fresas e chaves Dérig.",
      },
      { name: "twitter:title", content: "Instruções de Uso Dérig" },
      {
        name: "twitter:description",
        content:
          "Acesse as instruções de uso oficiais dos produtos Dérig.",
      },
    ],
  }),
  component: InstructionsForUsePage,
});

const documents = [
  {
    title: "Implantes",
    description: "Instruções de uso para a linha de implantes Dérig.",
    file: "/docs/instrucoes-de-uso/implantes.pdf",
  },
  {
    title: "Componentes estéreis",
    description: "Orientações oficiais para componentes fornecidos estéreis.",
    file: "/docs/instrucoes-de-uso/componentes-estereis.pdf",
  },
  {
    title: "Componentes não estéreis",
    description: "Orientações oficiais para componentes fornecidos não estéreis.",
    file: "/docs/instrucoes-de-uso/componentes-nao-estereis.pdf",
  },
  {
    title: "Componentes de cobalto",
    description: "Instruções de uso para componentes odontológicos de cobalto.",
    file: "/docs/instrucoes-de-uso/componentes-de-cobalto.pdf",
  },
  {
    title: "Análogos",
    description: "Instruções de uso para análogos da linha Dérig.",
    file: "/docs/instrucoes-de-uso/analogos.pdf",
  },
  {
    title: "Fresas",
    description: "Orientações de uso, cuidados e processamento das fresas.",
    file: "/docs/instrucoes-de-uso/fresas.pdf",
  },
  {
    title: "Chaves",
    description: "Instruções de uso para chaves e acessórios de instalação.",
    file: "/docs/instrucoes-de-uso/chaves.pdf",
  },
  {
    title: "Instrumental de referência",
    description: "Documentação oficial dos instrumentais de referência Dérig.",
    file: "/docs/instrucoes-de-uso/instrumental-de-referencia.pdf",
  },
  {
    title: "Instrumental manual de torque",
    description: "Instruções para uso seguro dos instrumentais manuais de torque.",
    file: "/docs/instrucoes-de-uso/instrumental-manual-de-torque.pdf",
  },
];

function InstructionsForUsePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pb-10 pt-28 md:pb-14 md:pt-36">
        <section className="container-x">
          <a
            href="/#downloads"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[color:var(--orange)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para downloads
          </a>

          <div className="mt-10 max-w-4xl">
            <span className="eyebrow">Biblioteca técnica</span>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl md:text-7xl">
              Instruções de uso
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Consulte os documentos oficiais para utilização, manuseio e
              processamento dos produtos Dérig.
            </p>
          </div>

          <div className="mt-12 flex items-start gap-4 rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface)]/60 p-5 md:max-w-3xl md:p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color:var(--orange)]/10 ring-1 ring-[color:var(--orange)]/30">
              <BookOpen className="h-5 w-5 text-[color:var(--orange)]" />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Selecione um documento para visualizar o PDF no navegador ou
              fazer o download do arquivo original.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((document) => (
              <article
                key={document.file}
                className="card-premium flex min-h-64 flex-col p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--orange)]/10 ring-1 ring-[color:var(--orange)]/30">
                    <FileText className="h-5 w-5 text-[color:var(--orange)]" />
                  </div>
                  <span className="rounded-full border border-[color:var(--hairline)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    PDF
                  </span>
                </div>

                <h2 className="mt-6 text-xl font-semibold tracking-tight">
                  {document.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {document.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3 border-t border-[color:var(--hairline)] pt-5">
                  <a
                    href={document.file}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--orange)] transition-colors hover:text-orange-300"
                  >
                    Visualizar <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={document.file}
                    download
                    className="ml-auto inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Baixar <Download className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
