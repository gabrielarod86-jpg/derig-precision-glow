import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, BookOpen, Download, ExternalLink } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCTA } from "@/components/site/MobileCTA";

const assetRoot = "/assets/artigos";

const articles = [
  {
    title: "Fotografias odontológicas. Quando uma imagem diz o que precisamos saber",
    image: "informativo_fotografia.jpg",
    href: "https://downloads.derig.com.br/artigos/derig_informativo_fotografia.pdf",
    type: "pdf",
  },
  {
    title:
      "Estudo comparativo in vitro da adaptação Pilar-implante em diferentes modelos de conexão",
    image: "vitro.jpg",
    href: "https://downloads.derig.com.br/artigos/derig_separata_vitro.pdf",
    type: "pdf",
  },
  {
    title:
      "Mechanical comparison of experimental conical-head abutment screws with conventional flat-head",
    image: "jomi.jpg",
    href: "https://www.ncbi.nlm.nih.gov/pubmed/?term=Mechanical+Comparison+of+Experimental+Conical-Head+Abutment+Screws+with+Conventional+Flat-Head+Abutment+Screws+for+External-Hex+and+Internal+Tri-Channel+Implant+Connections%3A+An+In+Vitro+Evaluation+of+Loosening+Torque",
    type: "external",
  },
  {
    title:
      "Image analysis of tendon helical superstructure using interference and polarized light microscopy",
    image: "image-analysis-of-tendon-helical.jpg",
    href: "https://www.sciencedirect.com/science/article/pii/S0968432803000398?via%3Dihub",
    type: "external",
  },
  {
    title:
      "Modificações na superfície dos implantes dentários: a pesquisa básica à aplicação clínica",
    image: "modificacoes-na-superficie-dos-implantes-dentarios.jpg",
    href: "https://downloads.derig.com.br/artigos/modificacoes-na-superficie-dos-implantes-dentarios.pdf",
    type: "pdf",
  },
  {
    title: "Entrevista com Mario Groisman outubro",
    image: "entrevista-com-mario-groisman.jpg",
    href: "https://downloads.derig.com.br/artigos/entrevista-com-mario-groisman.pdf",
    type: "pdf",
  },
  {
    title:
      "Reabilitação de maxila edêntula atrófica utilizando um novo conceito biomecânico four on pillars",
    image: "reabilitacao-de-maxila-edentula.jpg",
    href: "https://downloads.derig.com.br/artigos/reabilitacao-de-maxila-edentula.pdf",
    type: "pdf",
  },
] as const;

export const Route = createFileRoute("/artigos")({
  head: () => ({
    meta: [
      { title: "Artigos científicos | Dérig" },
      {
        name: "description",
        content:
          "Consulte artigos e publicações científicas selecionadas pela Dérig para profissionais da implantodontia.",
      },
      { property: "og:title", content: "Artigos científicos | Dérig" },
      {
        property: "og:description",
        content: "Pesquisa, evidências e conhecimento aplicado à implantodontia.",
      },
      { name: "twitter:title", content: "Artigos científicos | Dérig" },
      {
        name: "twitter:description",
        content: "Pesquisa, evidências e conhecimento aplicado à implantodontia.",
      },
    ],
  }),
  component: ArticlesPage,
});

function ArticlesPage() {
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
            Voltar para a biblioteca técnica
          </a>

          <div className="mt-10 overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-[linear-gradient(135deg,rgba(255,102,24,0.11),transparent_56%)] p-7 sm:p-10 md:p-14">
            <div className="max-w-4xl">
              <span className="eyebrow">Conteúdo científico</span>
              <h1 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl md:text-7xl">
                Artigos científicos
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Pesquisa, evidências e conhecimento técnico para apoiar decisões clínicas mais
                seguras na implantodontia.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-[color:var(--hairline)] bg-black/15 px-5 py-4 text-sm text-muted-foreground">
                <BookOpen className="h-5 w-5 text-[color:var(--orange)]" />
                {articles.length} publicações disponíveis
              </div>
            </div>
          </div>
        </section>

        <section className="container-x mt-7 md:mt-10">
          <div className="grid gap-5 md:grid-cols-2">
            {articles.map((article, index) => {
              const isPdf = article.type === "pdf";
              const ActionIcon = isPdf ? Download : ExternalLink;

              return (
                <article
                  key={article.href}
                  className="card-premium group overflow-hidden p-0 transition-colors hover:border-[color:var(--orange)]/45"
                >
                  <div className="grid h-full grid-cols-[116px_1fr] sm:grid-cols-[150px_1fr]">
                    <div className="flex items-center justify-center border-r border-[color:var(--hairline)] bg-black/30 p-4 sm:p-5">
                      <img
                        src={`${assetRoot}/${article.image}`}
                        alt={`Capa do artigo ${article.title}`}
                        loading="lazy"
                        width="180"
                        height="254"
                        className="h-auto w-full rounded-lg"
                      />
                    </div>

                    <div className="flex min-w-0 flex-col p-5 sm:p-7">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--orange)]">
                        Artigo {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="mt-3 text-lg font-semibold leading-snug tracking-tight sm:text-xl">
                        {article.title}
                      </h2>
                      <div className="mt-auto pt-6">
                        <a
                          href={article.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--orange)] transition-opacity hover:opacity-75"
                        >
                          {isPdf ? "Abrir PDF" : "Acessar publicação"}
                          <ActionIcon className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="https://derig.com.br/cientifico/artigos/"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Consultar fonte original <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
