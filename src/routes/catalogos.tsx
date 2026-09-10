import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, BookOpen, Download, FileText } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCTA } from "@/components/site/MobileCTA";

type Catalog = {
  title: string;
  description: string;
  file: string;
  downloadName: string;
};

const catalogs: readonly Catalog[] = [
  {
    title: "Implantes",
    description: "Linha completa de implantes Dérig, indicações e especificações.",
    file: "/docs/catalogos/implantes.pdf",
    downloadName: "catalogo-implantes-derig.pdf",
  },
  {
    title: "Componentes",
    description: "Componentes protéticos e soluções para diferentes fluxos clínicos.",
    file: "/docs/catalogos/componentes.pdf",
    downloadName: "catalogo-componentes-derig.pdf",
  },
  {
    title: "Kits cirúrgicos",
    description: "Kits, instrumentais e sequências para os protocolos Dérig.",
    file: "/docs/catalogos/kits.pdf",
    downloadName: "catalogo-kits-derig.pdf",
  },
  {
    title: "Linha Digital",
    description: "Soluções Dérig para planejamento e fluxos odontológicos digitais.",
    file: "/docs/catalogos/linha-digital.pdf",
    downloadName: "catalogo-linha-digital-derig.pdf",
  },
];

export const Route = createFileRoute("/catalogos")({
  head: () => ({
    meta: [
      { title: "Catálogos Dérig" },
      {
        name: "description",
        content: "Consulte e baixe os catálogos atualizados de implantes, componentes, kits e soluções digitais Dérig.",
      },
      { property: "og:title", content: "Catálogos Dérig" },
      {
        property: "og:description",
        content: "Catálogos atualizados das linhas de produtos Dérig.",
      },
      { name: "twitter:title", content: "Catálogos Dérig" },
      {
        name: "twitter:description",
        content: "Acesse os catálogos atualizados da Dérig.",
      },
    ],
  }),
  component: CatalogsPage,
});

function CatalogsPage() {
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

          <div className="mt-10 overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-[linear-gradient(135deg,rgba(255,102,24,0.11),transparent_56%)] p-7 sm:p-10 md:p-14">
            <div className="max-w-4xl">
              <span className="eyebrow">Biblioteca técnica</span>
              <h1 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl md:text-7xl">
                Catálogos Dérig
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Consulte as linhas de produtos e baixe os materiais comerciais mais recentes.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-[color:var(--hairline)] bg-black/15 px-5 py-4 text-sm text-muted-foreground">
                <BookOpen className="h-5 w-5 text-[color:var(--orange)]" />
                {catalogs.length} catálogos disponíveis
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 md:mt-10">
            {catalogs.map((catalog) => (
              <article
                key={catalog.title}
                className="card-premium flex min-h-64 flex-col p-6 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--orange)]/10 ring-1 ring-[color:var(--orange)]/30">
                    <FileText className="h-5 w-5 text-[color:var(--orange)]" />
                  </div>
                  <span className="rounded-full border border-[color:var(--hairline)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    PDF
                  </span>
                </div>

                <h2 className="mt-6 text-2xl font-semibold tracking-tight">
                  {catalog.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {catalog.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3 border-t border-[color:var(--hairline)] pt-5">
                  <a
                    href={catalog.file}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--orange)] transition-colors hover:text-orange-300"
                  >
                    Visualizar <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={catalog.file}
                    download={catalog.downloadName}
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
