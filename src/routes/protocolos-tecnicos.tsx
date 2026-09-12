import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ClipboardList, Download } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCTA } from "@/components/site/MobileCTA";

const protocolFile = "/docs/protocolos-tecnicos/protocolo-perfuracao.pdf";
const protocolCover = "/docs/protocolos-tecnicos/pages/pagina-1.jpg";

const protocols = [
  { number: "01", title: "Bioneck CMH", connection: "Cone Morse Hexagonal", page: 2 },
  { number: "02", title: "Biodent CMH", connection: "Cone Morse Hexagonal", page: 3 },
  { number: "03", title: "Dynamic CMH", connection: "Cone Morse Hexagonal", page: 4 },
  { number: "04", title: "Dynamic CMH 3.0P", connection: "Cone Morse Hexagonal 3.0P", page: 5 },
  { number: "05", title: "Bioneck TRI", connection: "Triplo canal interno", page: 6 },
  {
    number: "06",
    title: "Bioneck TRI",
    connection: "Triplo canal interno com redução de plataforma",
    page: 7,
  },
  { number: "07", title: "Biodent HEX", connection: "Hexágono externo", page: 8 },
  { number: "08", title: "Kort HEX", connection: "Hexágono externo - implante curto", page: 9 },
];

export const Route = createFileRoute("/protocolos-tecnicos")({
  head: () => ({
    meta: [
      { title: "Protocolos de Perfuração Dérig" },
      {
        name: "description",
        content:
          "Consulte e baixe os protocolos de perfuração para as linhas de implantes Dérig.",
      },
      { property: "og:title", content: "Protocolos de Perfuração Dérig" },
      {
        property: "og:description",
        content: "Sequências de brocas e referências técnicas para implantes Dérig.",
      },
    ],
  }),
  component: TechnicalProtocolsPage,
});

function TechnicalProtocolsPage() {
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

          <div className="mt-10 overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-[linear-gradient(135deg,rgba(255,102,24,0.08),transparent_55%)]">
            <div className="grid lg:grid-cols-[1fr_0.42fr] lg:items-center">
              <div className="p-6 sm:p-9 md:p-12 lg:p-14">
                <span className="eyebrow">Biblioteca técnica</span>
                <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl md:text-7xl">
                  Protocolos de perfuração
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Consulte as sequências de brocas, chaves de inserção e referências indicadas para
                  cada linha de implantes Dérig.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={protocolFile} download className="btn-primary">
                    Baixar protocolo em PDF <Download className="h-4 w-4" />
                  </a>
                  <a href={protocolFile} target="_blank" rel="noreferrer" className="btn-ghost">
                    Abrir PDF <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="flex h-full items-center justify-center border-t border-[color:var(--hairline)] bg-black/20 p-6 lg:border-l lg:border-t-0 lg:p-9">
                <img
                  src={protocolCover}
                  alt="Capa dos Protocolos de Perfuração Dérig"
                  className="w-full max-w-[300px] rounded-2xl shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container-x mt-8 md:mt-12">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="eyebrow">Consulta por linha</span>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl md:text-5xl">
                Encontre o protocolo do implante.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Cada página reúne a sequência de perfuração e as chaves de inserção recomendadas.
              </p>
            </div>
            <a href={protocolFile} download className="btn-ghost shrink-0">
              Baixar PDF completo <Download className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {protocols.map((protocol) => (
              <article
                key={`${protocol.title}-${protocol.number}`}
                className="overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-[#0a0a0a] shadow-[0_26px_70px_rgba(0,0,0,0.25)]"
              >
                <div className="flex items-start gap-4 border-b border-[color:var(--hairline)] bg-white/[0.04] px-5 py-5 sm:px-7">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--orange)] text-sm font-bold text-black">
                    {protocol.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                      {protocol.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {protocol.connection}
                    </p>
                  </div>
                </div>
                <img
                  src={`/docs/protocolos-tecnicos/pages/pagina-${protocol.page}.jpg`}
                  alt={`Protocolo de perfuração ${protocol.title} Dérig`}
                  loading="lazy"
                  className="h-auto w-full"
                />
              </article>
            ))}
          </div>
        </section>

        <section className="container-x mt-8 md:mt-12">
          <div className="rounded-3xl border border-[color:var(--orange)]/35 bg-[linear-gradient(135deg,rgba(255,102,24,0.14),rgba(255,102,24,0.03))] p-7 text-center sm:p-10 md:p-12">
            <ClipboardList className="mx-auto h-7 w-7 text-[color:var(--orange)]" />
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
              Consulte o protocolo completo.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-muted-foreground">
              Baixe o documento oficial para manter as sequências de perfuração sempre disponíveis.
            </p>
            <a href={protocolFile} download className="btn-primary mt-7">
              Baixar protocolo em PDF <Download className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
