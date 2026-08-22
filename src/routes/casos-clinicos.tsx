import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ChevronDown, Images } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCTA } from "@/components/site/MobileCTA";

const assetRoot = "/assets/casos-clinicos/mario-groisman";

const clinicalCases = [
  {
    slug: "all-on-four",
    title: "All On Four",
    description:
      "Caso clínico documentado em 63 imagens, mantidas na sequência original de publicação.",
    source: "https://derig.com.br/cientifico/casos-clinicos/mario-groisman/all-on-four/",
    extension: "jpeg",
    imageCount: 63,
  },
  {
    slug: "guiada",
    title: "Cirurgia guiada",
    description:
      "Caso clínico documentado em 12 imagens, mantidas na sequência original de publicação.",
    source: "https://derig.com.br/cientifico/casos-clinicos/mario-groisman/guiada/",
    extension: "jpg",
    imageCount: 12,
  },
];

export const Route = createFileRoute("/casos-clinicos")({
  head: () => ({
    meta: [
      { title: "Casos Clínicos | Dérig" },
      {
        name: "description",
        content:
          "Consulte os casos clínicos All On Four e Cirurgia Guiada, documentados pelo Dr. Mario Groisman.",
      },
      { property: "og:title", content: "Casos Clínicos | Dérig" },
      {
        property: "og:description",
        content: "Documentação científica de casos clínicos All On Four e Cirurgia Guiada.",
      },
      { name: "twitter:title", content: "Casos Clínicos | Dérig" },
      {
        name: "twitter:description",
        content: "Casos clínicos documentados pelo Dr. Mario Groisman.",
      },
    ],
  }),
  component: ClinicalCasesPage,
});

function imagePath(slug: string, imageNumber: number, extension: string) {
  return `${assetRoot}/${slug}/${String(imageNumber).padStart(3, "0")}.${extension}`;
}

function ClinicalCasesPage() {
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
            Voltar para a biblioteca técnica
          </a>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.68fr_0.32fr] lg:items-stretch">
            <div className="rounded-3xl border border-[color:var(--hairline)] bg-[linear-gradient(135deg,rgba(255,102,24,0.1),transparent_58%)] p-7 sm:p-10 md:p-12 lg:p-14">
              <span className="eyebrow">Conteúdo científico</span>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl md:text-7xl">
                Casos clínicos
              </h1>
              <div className="mt-8 flex flex-wrap gap-3">
                {clinicalCases.map((clinicalCase) => (
                  <a key={clinicalCase.slug} href={`#${clinicalCase.slug}`} className="btn-ghost">
                    {clinicalCase.title} <ArrowRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <aside className="card-premium overflow-hidden">
              <img
                src={`${assetRoot}/mario-groisman.png`}
                alt="Dr. Mario Groisman"
                className="h-auto w-full"
              />
              <div className="p-6 md:p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--orange)]">
                  Responsável clínico
                </span>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">Mario Groisman</h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <li>Mestre em ciências dentais pela Universidade de Lund – Suécia.</li>
                  <li>Especialista em implantodontia oral pelo Conselho Federal de Odontologia.</li>
                  <li>Especialista em periodontia pela UERJ.</li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="container-x mt-16 md:mt-24">
          <div className="space-y-8">
            {clinicalCases.map((clinicalCase) => {
              const images = Array.from({ length: clinicalCase.imageCount }, (_, index) =>
                imagePath(clinicalCase.slug, index + 1, clinicalCase.extension),
              );

              return (
                <article
                  id={clinicalCase.slug}
                  key={clinicalCase.slug}
                  className="scroll-mt-32 overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--surface)]/50"
                >
                  <div className="grid gap-0 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
                    <div className="p-7 sm:p-9 md:p-10">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--orange)]">
                        <Images className="h-4 w-4" />
                        {clinicalCase.imageCount} imagens originais
                      </span>
                      <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                        {clinicalCase.title}
                      </h3>
                      <p className="mt-4 leading-relaxed text-muted-foreground">
                        {clinicalCase.description}
                      </p>
                    </div>

                    <div className="border-t border-[color:var(--hairline)] bg-black/25 p-4 lg:border-l lg:border-t-0 lg:p-6">
                      <img
                        src={images[0]}
                        alt={`Primeira imagem do caso clínico ${clinicalCase.title}`}
                        className="h-auto w-full rounded-2xl"
                      />
                    </div>
                  </div>

                  <details className="group border-t border-[color:var(--hairline)]">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-7 py-6 font-semibold transition-colors hover:text-[color:var(--orange)] sm:px-9">
                      <span>Ver sequência completa do caso</span>
                      <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                    </summary>

                    <div className="grid items-start gap-5 border-t border-[color:var(--hairline)] bg-black/15 p-4 sm:p-6 lg:grid-cols-2 lg:p-8">
                      {images.map((image, index) => (
                        <figure
                          key={image}
                          className="overflow-hidden rounded-2xl border border-[color:var(--hairline)] bg-black"
                        >
                          <a
                            href={image}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Abrir imagem ${index + 1} do caso ${clinicalCase.title} em resolução completa`}
                            className="block"
                          >
                            <img
                              src={image}
                              alt={`Caso clínico ${clinicalCase.title}, imagem ${index + 1} de ${clinicalCase.imageCount}`}
                              loading="lazy"
                              className="h-auto w-full"
                            />
                          </a>
                          <figcaption className="border-t border-white/10 px-4 py-3 text-xs font-medium tracking-wide text-white/55">
                            Imagem {String(index + 1).padStart(2, "0")} de{" "}
                            {String(clinicalCase.imageCount).padStart(2, "0")}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </details>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
