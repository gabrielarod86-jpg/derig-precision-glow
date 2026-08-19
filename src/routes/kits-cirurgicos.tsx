import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Clock3,
  Crosshair,
  Gauge,
  Layers3,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { ContactCTA } from "@/components/site/ContactCTA";
import { Footer } from "@/components/site/Footer";
import { MobileCTA } from "@/components/site/MobileCTA";
import guideImage from "@/assets/kits/kit-derig-guide.png";
import conicoImage from "@/assets/kits/kit-cirurgico-conico.png";
import cilindricoImage from "@/assets/kits/kit-cirurgico-cilindrico.png";
import kortImage from "@/assets/kits/kit-de-brocas-kort.png";
import proteticoImage from "@/assets/kits/kit-protetico.png";
import backgroundTexture from "@/assets/bg-texture.jpg";

export const Route = createFileRoute("/kits-cirurgicos")({
  head: () => ({
    meta: [
      { title: "Kits Cirúrgicos Dérig — Guide, Cônico, Cilíndrico e Kort" },
      {
        name: "description",
        content:
          "Conheça o Dérig Guide e os kits cirúrgicos Dérig para protocolos guiados, cônicos, cilíndricos, zigomáticos e Kort.",
      },
      { property: "og:title", content: "Kits Cirúrgicos Dérig" },
      {
        property: "og:description",
        content:
          "Planejamento digital, instrumentais organizados e protocolos para cirurgias precisas.",
      },
      { name: "twitter:title", content: "Kits Cirúrgicos Dérig" },
      {
        name: "twitter:description",
        content:
          "Dérig Guide e soluções cirúrgicas para diferentes sistemas e indicações clínicas.",
      },
    ],
  }),
  component: KitsCirurgicosPage,
});

const steps = [
  "Exame clínico",
  "Exames radiográficos e tomográficos",
  "Planejamento virtual da cirurgia",
  "Confecção do guia cirúrgico",
  "Cirurgia guiada",
];

const benefits = [
  {
    icon: Sparkles,
    title: "Procedimento menos invasivo",
    text: "Possibilita cirurgia sem abertura de retalho, com baixa morbidade e pós-operatório mais confortável.",
  },
  {
    icon: Clock3,
    title: "Economia de tempo",
    text: "A simplicidade do protocolo contribui para reduzir o tempo cirúrgico e o tempo total de tratamento.",
  },
  {
    icon: ShieldCheck,
    title: "Mais segurança",
    text: "O planejamento prévio amplia o conhecimento da anatomia e reduz incertezas durante o procedimento.",
  },
  {
    icon: Crosshair,
    title: "Maior precisão",
    text: "Das osteotomias à instalação, as etapas seguem o planejamento digital e a posição protética definida.",
  },
  {
    icon: Gauge,
    title: "Permite subfresagem",
    text: "O protocolo contempla subfresagem quando indicada para favorecer a estabilidade primária.",
  },
  {
    icon: Workflow,
    title: "Previsibilidade protética",
    text: "A posição planejada do implante simplifica a comunicação entre cirurgia, prótese e laboratório.",
  },
];

const differentiators = [
  "Protocolo didático com redução inteligente de instrumentais",
  "Brocas individuais por medida de implante, com stop na própria broca",
  "Brocas guiadas diretamente pelas anilhas",
  "Pinos com encaixes cônicos para estabilização do guia",
  "Canais helicoidais que favorecem a irrigação da osteotomia",
  "Fluxo simplificado para otimizar o tempo cirúrgico",
];

const kits = [
  {
    name: "Kit Dérig Guide",
    eyebrow: "Cirurgia guiada",
    image: guideImage,
    description:
      "Transporta o planejamento tridimensional para o campo cirúrgico por meio de um protocolo cônico simplificado e preciso.",
    systems: "TRI NP, TRI RP e CMH NP",
    measures: "Diâmetros 3,5 e 4,3 | Comprimentos de 8 a 16 mm",
  },
  {
    name: "Kit Cirúrgico Regular Cônico",
    eyebrow: "Implantes Bioneck",
    image: conicoImage,
    description:
      "Organizado em sequência cronológica e sinalizado por cores para orientar a preparação de implantes cônicos.",
    systems: "TRI NP, TRI RP e CMH NP",
    measures: "Diâmetros 3,5 e 4,3 | Comprimentos de 8 a 16 mm",
  },
  {
    name: "Kit Cirúrgico Cilíndrico",
    eyebrow: "Implantes cilíndricos",
    image: cilindricoImage,
    description:
      "Conjunto de fresas HEX e instrumentais para o preparo preciso da loja óssea em diferentes modelos cilíndricos.",
    systems: "Biodent HEX/CMH e Dynamic CMH",
    measures: "Diâmetros de 3,3 a 5,0 | Comprimentos de 6 a 22 mm",
  },
  {
    name: "Kit de Brocas Kort",
    eyebrow: "Implantes curtos",
    image: kortImage,
    description:
      "Sequência didática de fresas e indicadores de direção dedicada à instalação dos implantes Dérig Kort.",
    systems: "Implantes Kort Ø4,0 e Ø5,0",
    measures: "Comprimentos de 5,5 e 7 mm",
  },
  {
    name: "Kit Protético",
    eyebrow: "Fluxo reabilitador",
    image: proteticoImage,
    description:
      "Instrumentais organizados para apoiar as etapas protéticas com controle de torque e padronização clínica.",
    systems: "Componentes protéticos Dérig",
    measures: "Organização, precisão e suporte ao fluxo reabilitador",
  },
];

function KitsCirurgicosPage() {
  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-[color:var(--hairline)] pt-28 md:pt-36">
          <img
            src={backgroundTexture}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(255,255,255,0.13),transparent_34%),linear-gradient(90deg,rgba(7,7,7,0.98)_0%,rgba(7,7,7,0.82)_48%,rgba(7,7,7,0.28)_100%)]" />

          <div className="container-x relative grid min-h-[720px] items-center gap-10 pb-16 lg:grid-cols-[0.85fr_1.15fr] lg:pb-20">
            <div className="relative z-10 py-8 lg:py-16">
              <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[color:var(--orange)]">
                <ArrowLeft className="h-4 w-4" /> Voltar ao início
              </a>
              <span className="eyebrow mt-12 block">Kit Dérig Guide</span>
              <h1 className="text-display mt-5 text-5xl sm:text-6xl lg:text-7xl">
                Planejamento digital levado ao campo cirúrgico.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Uma solução Dérig para cirurgias guiadas simplificadas, criada para aumentar a precisão na instalação dos implantes e a qualidade das reabilitações.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#derig-guide" className="btn-primary">
                  Conhecer o protocolo <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="/#contato" className="btn-ghost">Falar com um consultor</a>
              </div>
            </div>

            <div className="relative h-[500px] overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 sm:h-[620px] lg:h-[700px]">
              <img
                src={guideImage}
                alt="Kit Dérig Guide completo para cirurgia guiada"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </section>

        <section id="derig-guide" className="py-24 md:py-32">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <span className="eyebrow">Dérig Guide</span>
                <h2 className="text-display mt-4 text-3xl md:text-5xl">Uma mudança de paradigma no planejamento da cirurgia.</h2>
              </div>
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  Imagens tridimensionais obtidas por exames de escaneamento e tomografia permitem planejar virtualmente a posição dos implantes e confeccionar o guia cirúrgico antes do procedimento.
                </p>
                <p>
                  O protocolo equilibra tecnologia, conhecimento científico e necessidade clínica para transferir o planejamento digital ao campo cirúrgico com precisão.
                </p>
              </div>
            </div>

            <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step, index) => (
                <li key={step} className="card-premium p-5">
                  <span className="text-sm font-bold text-[color:var(--orange)]">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-4 text-sm font-semibold leading-snug">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-y border-[color:var(--hairline)] bg-[color:var(--surface)]/40 py-24 md:py-32">
          <div className="container-x">
            <div className="max-w-3xl">
              <span className="eyebrow">Vantagens clínicas</span>
              <h2 className="text-display mt-4 text-3xl md:text-5xl">Mais controle do planejamento à instalação.</h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ icon: Icon, title, text }) => (
                <article key={title} className="card-premium p-6 md:p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--orange)]/30 bg-[color:var(--orange)]/10 text-[color:var(--orange)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="card-premium overflow-hidden bg-black">
              <img src={guideImage} alt="Instrumentais do Kit Dérig Guide" loading="lazy" className="aspect-[4/5] h-full w-full object-contain" />
            </div>
            <div>
              <span className="eyebrow">Diferenciais</span>
              <h2 className="text-display mt-4 text-3xl md:text-5xl">Protocolo cônico simplificado e inteligente.</h2>
              <ul className="mt-8 space-y-4">
                {differentiators.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--orange)] text-black">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-y border-[color:var(--hairline)] bg-[color:var(--surface)]/35 py-24 md:py-32">
          <div className="container-x">
            <div className="max-w-3xl">
              <span className="eyebrow">Linha de kits</span>
              <h2 className="text-display mt-4 text-3xl md:text-5xl">Soluções organizadas para diferentes protocolos.</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                Kits desenvolvidos para apoiar o profissional na preparação da loja óssea, instalação dos implantes e condução do fluxo protético.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {kits.map((kit) => (
                <article key={kit.name} className="card-premium overflow-hidden">
                  <div className="aspect-[4/5] overflow-hidden bg-black">
                    <img src={kit.image} alt={kit.name} loading="lazy" className="h-full w-full object-contain transition-transform duration-700 hover:scale-[1.02]" />
                  </div>
                  <div className="p-6">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--orange)]">{kit.eyebrow}</span>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight">{kit.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{kit.description}</p>
                    <div className="mt-5 space-y-2 border-t border-white/10 pt-5 text-xs leading-relaxed text-foreground/80">
                      <p className="flex gap-2"><Layers3 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--orange)]" />{kit.systems}</p>
                      <p className="flex gap-2"><ScanLine className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--orange)]" />{kit.measures}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <article className="card-premium grid overflow-hidden sm:grid-cols-[0.42fr_1fr]">
                <div className="flex min-h-56 items-center justify-center bg-[radial-gradient(circle,rgba(243,122,33,0.17),transparent_65%)] p-8">
                  <Layers3 className="h-20 w-20 text-[color:var(--orange)]" strokeWidth={1} />
                </div>
                <div className="flex flex-col justify-center border-t border-white/10 p-7 sm:border-l sm:border-t-0">
                  <span className="eyebrow">Portfólio integrado</span>
                  <h3 className="text-display mt-4 text-2xl">Kit Cirúrgico Dérig Premium</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Reúne fresas e instrumentais para o preparo de implantes Bioneck, Dynamic e Biodent, integrando protocolos cônicos e cilíndricos com conexões TRI e CMH.
                  </p>
                </div>
              </article>

              <article className="card-premium grid overflow-hidden sm:grid-cols-[0.42fr_1fr]">
                <div className="flex min-h-56 items-center justify-center bg-[radial-gradient(circle,rgba(243,122,33,0.17),transparent_65%)] p-8">
                  <Crosshair className="h-20 w-20 text-[color:var(--orange)]" strokeWidth={1} />
                </div>
                <div className="flex flex-col justify-center border-t border-white/10 p-7 sm:border-l sm:border-t-0">
                  <span className="eyebrow">Aplicação especializada</span>
                  <h3 className="text-display mt-4 text-2xl">Kit Cirúrgico Zigomático</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Brocas, sondas e instrumentais para implantes Dérig CM16 Ø3,75, em comprimentos de 30 a 62,5 mm. Requer profissional habilitado na técnica zigomática.
                  </p>
                </div>
              </article>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-muted-foreground/75">
              Conteúdo destinado a profissionais da odontologia. Os kits são fornecidos não estéreis e devem ser limpos e esterilizados conforme as respectivas instruções de uso. A disponibilidade pode variar conforme o mercado.
            </p>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
