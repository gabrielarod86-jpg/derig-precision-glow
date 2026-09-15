import { createFileRoute } from "@tanstack/react-router";
import {
  Archive,
  ArrowLeft,
  ArrowUpRight,
  BookOpenCheck,
  Download,
  FileText,
  FolderArchive,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCTA } from "@/components/site/MobileCTA";

const libraryFile = "/docs/biblioteca-protetica-digital/library-exocad-derig-v8.rar";

const supportMaterials = [
  {
    title: "Tutorial de instalação da Biblioteca EXOCAD",
    description: "Passo a passo para instalar e configurar a Biblioteca EXOCAD CAD/CAM Dérig.",
    file: "/docs/biblioteca-protetica-digital/tutorial-instalacao-biblioteca-exocad.pdf",
    downloadName: "tutorial-instalacao-biblioteca-exocad-derig.pdf",
  },
  {
    title: "Identificando o produto Dérig na Biblioteca Exocad",
    description:
      "Guia visual para localizar conexões, componentes e opções da Dérig dentro da biblioteca.",
    file: "/docs/biblioteca-protetica-digital/identificando-produto-derig-biblioteca-exocad.pdf",
    downloadName: "identificando-produto-derig-biblioteca-exocad.pdf",
  },
] as const;

export const Route = createFileRoute("/biblioteca-protetica-digital")({
  head: () => ({
    meta: [
      { title: "Biblioteca para Fluxo Digital Dérig" },
      {
        name: "description",
        content:
          "Baixe a Biblioteca EXOCAD Dérig e consulte os materiais de instalação e identificação dos produtos.",
      },
      { property: "og:title", content: "Biblioteca para Fluxo Digital Dérig" },
      {
        property: "og:description",
        content: "Biblioteca EXOCAD Dérig e documentação de apoio para o fluxo protético digital.",
      },
    ],
  }),
  component: DigitalProstheticLibraryPage,
});

function DigitalProstheticLibraryPage() {
  return (
    <div className="site-backdrop min-h-screen text-foreground">
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

          <div className="mt-10 overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-[linear-gradient(135deg,rgba(255,102,24,0.11),transparent_56%)]">
            <div className="grid lg:grid-cols-[1fr_0.38fr] lg:items-stretch">
              <div className="p-7 sm:p-10 md:p-14">
                <span className="eyebrow">Fluxo protético digital</span>
                <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl md:text-7xl">
                  Biblioteca para Fluxo Digital
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Baixe a Biblioteca EXOCAD Dérig e consulte os materiais de apoio para instalar e
                  identificar corretamente os produtos no software.
                </p>
              </div>

              <div className="flex min-h-64 items-center justify-center border-t border-[color:var(--hairline)] bg-black/20 p-8 lg:border-l lg:border-t-0">
                <div className="flex h-40 w-40 items-center justify-center rounded-[2rem] border border-[color:var(--orange)]/35 bg-[color:var(--orange)]/10 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
                  <FolderArchive
                    className="h-20 w-20 text-[color:var(--orange)]"
                    strokeWidth={1.4}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-x mt-8 md:mt-12">
          <div className="grid gap-5 lg:grid-cols-3">
            <article className="card-premium flex min-h-72 flex-col p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--orange)]/10 ring-1 ring-[color:var(--orange)]/30">
                  <Archive className="h-5 w-5 text-[color:var(--orange)]" />
                </div>
                <span className="rounded-full border border-[color:var(--hairline)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  RAR
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                Biblioteca EXOCAD Dérig V8
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Arquivo completo da biblioteca para fluxo digital no ambiente EXOCAD.
              </p>
              <div className="mt-6 border-t border-[color:var(--hairline)] pt-5">
                <a
                  href={libraryFile}
                  download="LIBRARY_EXOCAD_DERIG_V8.rar"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--orange)] transition-colors hover:text-orange-300"
                >
                  Baixar biblioteca <Download className="h-4 w-4" />
                </a>
              </div>
            </article>

            {supportMaterials.map((material) => (
              <article
                key={material.title}
                className="card-premium flex min-h-72 flex-col p-6 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--orange)]/10 ring-1 ring-[color:var(--orange)]/30">
                    <FileText className="h-5 w-5 text-[color:var(--orange)]" />
                  </div>
                  <span className="rounded-full border border-[color:var(--hairline)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    PDF
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">{material.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {material.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3 border-t border-[color:var(--hairline)] pt-5">
                  <a
                    href={material.file}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--orange)] transition-colors hover:text-orange-300"
                  >
                    Visualizar <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={material.file}
                    download={material.downloadName}
                    className="ml-auto inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Baixar <Download className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="container-x mt-8 md:mt-12">
          <div className="rounded-3xl border border-[color:var(--orange)]/35 bg-[linear-gradient(135deg,rgba(255,102,24,0.14),rgba(255,102,24,0.03))] p-7 text-center sm:p-10 md:p-12">
            <BookOpenCheck className="mx-auto h-7 w-7 text-[color:var(--orange)]" />
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
              Consulte os guias antes de iniciar.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-muted-foreground">
              Os materiais explicam a instalação da biblioteca e a identificação das opções Dérig
              dentro do EXOCAD.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
