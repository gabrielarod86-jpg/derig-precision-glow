import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleDot,
  Microscope,
  ScanLine,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { ContactCTA } from "@/components/site/ContactCTA";
import { Footer } from "@/components/site/Footer";
import { MobileCTA } from "@/components/site/MobileCTA";
import backgroundTexture from "@/assets/bg-texture.jpg";
import implantsShowcase from "@/assets/derig-implantes-4k.png";
import zigomaticImplant from "@/assets/implante-zigomatico-cm16.png";
import bioneckCmhImage from "@/assets/implants/bioneck-cmh.png";
import bioneckTriImage from "@/assets/implants/bioneck-tri.png";
import dynamicCmhImage from "@/assets/implants/dynamic-cmh.png";
import kortHexImage from "@/assets/implants/kort-hex.png";
import biodentHexImage from "@/assets/implants/biodent-hex.png";

export const Route = createFileRoute("/implantes")({
  head: () => ({
    meta: [
      { title: "Linha de Implantes Dérig — CMH, TRI, HEX, Kort e Zigomático" },
      {
        name: "description",
        content:
          "Conheça as linhas de implantes Dérig, suas geometrias, conexões, dimensões e indicações clínicas.",
      },
      { property: "og:title", content: "Linha de Implantes Dérig" },
      {
        property: "og:description",
        content:
          "Implantes Bioneck, Dynamic, Biodent, Kort e Zigomático CM16 com tecnologia de superfície Biotite.",
      },
      { name: "twitter:title", content: "Linha de Implantes Dérig" },
      {
        name: "twitter:description",
        content:
          "Geometrias, conexões e especificações técnicas da linha de implantes Dérig.",
      },
    ],
  }),
  component: ImplantsPage,
});

type ImplantOption = {
  diameter: string;
  lengths: string;
  codes: string;
  components: string;
};

type ImplantLine = {
  name: string;
  interface: string;
  description: string;
  image: string;
  imageMode?: "cover" | "contain";
  features: string[];
  options: ImplantOption[];
};

const implantLines: ImplantLine[] = [
  {
    name: "Bioneck CMH",
    interface: "Cone Morse Hexagonal | CMH",
    description:
      "Implante cônico com interface interna única para todos os diâmetros e macrogeometria desenvolvida para ampliar estabilidade e contato ósseo.",
    image: bioneckCmhImage,
    imageMode: "contain",
    features: [
      "Uma única interface interna cone morse para todos os diâmetros",
      "Sulcos retentivos nas roscas para maior área de contato e estabilidade primária",
      "Superfície Biotite com microporosidade obtida por duplo ataque ácido",
      "Chave CMH NP única para catraca e contra-ângulo",
    ],
    options: [
      {
        diameter: "Ø 3,5 mm",
        lengths: "8 / 10 / 11,5 / 13 / 16 mm",
        codes: "02.23.16.221 a 02.23.16.225",
        components: "CMH NP",
      },
      {
        diameter: "Ø 4,3 mm",
        lengths: "8 / 10 / 11,5 / 13 / 16 mm",
        codes: "02.23.16.251 a 02.23.16.255",
        components: "CMH NP",
      },
    ],
  },
  {
    name: "Dynamic CMH",
    interface: "Cone Morse Hexagonal | CMH",
    description:
      "Núcleo cônico e espiras largas com câmaras cortantes que possibilitam expansão e compressão óssea simultaneamente.",
    image: dynamicCmhImage,
    imageMode: "contain",
    features: [
      "Uma única interface interna cone morse para todos os diâmetros",
      "Espiras largas e câmaras cortantes",
      "Núcleo cônico voltado à estabilidade primária",
      "Superfície Biotite para favorecer a estabilidade secundária",
    ],
    options: [
      {
        diameter: "Ø 3,5 mm",
        lengths: "8,5 / 10 / 11,5 / 13 / 15 mm",
        codes: "02.23.16.321 a 02.23.16.325",
        components: "CMH NP",
      },
      {
        diameter: "Ø 4,3 mm",
        lengths: "8,5 / 10 / 11,5 / 13 / 15 mm",
        codes: "02.23.16.351 a 02.23.16.355",
        components: "CMH NP",
      },
      {
        diameter: "Ø 5,0 mm",
        lengths: "8,5 / 10 / 11,5 / 13 / 15 mm",
        codes: "02.23.16.361 a 02.23.16.365",
        components: "CMH NP",
      },
    ],
  },
  {
    name: "Bioneck TRI",
    interface: "Triplo Canal Interno | TRI",
    description:
      "Implante cônico com triplo canal interno, microcanais cervicais e sistema mecânico de captura com identificação visual.",
    image: bioneckTriImage,
    imageMode: "contain",
    features: [
      "Macrogeometria com alta estabilidade primária",
      "Torque interno com sistema de captura e inserção",
      "Marcas coloridas para indicação do posicionamento correto",
      "Sulcos retentivos e superfície Biotite",
    ],
    options: [
      {
        diameter: "Ø 3,5 mm",
        lengths: "8 / 10 / 11,5 / 13 / 16 mm",
        codes: "02.04.16.001 / 002 / 053 / 003 / 004",
        components: "TRI NP",
      },
      {
        diameter: "Ø 4,3 mm",
        lengths: "8 / 10 / 11,5 / 13 / 16 mm",
        codes: "02.04.16.005 / 006 / 054 / 007 / 008",
        components: "TRI RP-UP",
      },
      {
        diameter: "Ø 5,0 mm",
        lengths: "8 / 10 / 11,5 / 13 / 16 mm",
        codes: "02.04.16.025 / 026 / 055 / 027 / 028",
        components: "TRI RP-UP",
      },
    ],
  },
  {
    name: "Biodent HEX",
    interface: "Hexágono Externo | HEX",
    description:
      "Implante cilíndrico levemente cônico na porção apical, com dupla rosca e câmaras de alta capacidade de corte.",
    image: biodentHexImage,
    imageMode: "contain",
    features: [
      "Interface externa hexagonal",
      "Dupla rosca para agilizar a inserção e minimizar traumas",
      "Câmaras apicais com alta capacidade de corte",
      "Travamento mecânico e sistema grip de captura",
    ],
    options: [
      {
        diameter: "Ø 3,3 mm",
        lengths: "8,5 / 10 / 11,5 / 13 / 15 mm",
        codes: "02.03.16.026 a 02.03.16.030",
        components: "HEX NP",
      },
      {
        diameter: "Ø 3,75 mm",
        lengths: "8,5 / 10 / 11,5 / 13 / 15 mm",
        codes: "02.03.16.006 a 02.03.16.010",
        components: "HEX RP-UP",
      },
      {
        diameter: "Ø 5,0 mm",
        lengths: "8,5 / 10 / 11,5 / 13 / 15 mm",
        codes: "02.03.16.036 a 02.03.16.040",
        components: "HEX RP-UP",
      },
    ],
  },
  {
    name: "Kort HEX",
    interface: "Hexágono Externo | Implante Curto",
    description:
      "Implante curto com macrogeometria cilíndrica, porção apical levemente cônica e compatibilidade com a linha protética Biodent HEX.",
    image: kortHexImage,
    imageMode: "contain",
    features: [
      "Comprimentos reduzidos de 5,5 e 7 mm",
      "Dupla rosca e câmaras cortantes na região apical",
      "Chaves codificadas por cores para identificação da plataforma",
      "Uso do Kit de Brocas Kort altamente recomendado",
    ],
    options: [
      {
        diameter: "Ø 4,0 mm",
        lengths: "5,5 / 7 mm",
        codes: "02.03.16.049 / 02.03.16.050",
        components: "HEX NP",
      },
      {
        diameter: "Ø 5,0 mm",
        lengths: "5,5 / 7 mm",
        codes: "02.03.16.051 / 02.03.16.052",
        components: "HEX RP-UP",
      },
    ],
  },
];

const qualitySteps = [
  {
    number: "01",
    title: "Liberação da fabricação",
    text: "Retenção de peças de cada lote para evidenciar a conformidade durante a usinagem.",
  },
  {
    number: "02",
    title: "Inspeção durante o processo",
    text: "Acompanhamento técnico realizado durante as etapas de fabricação e usinagem.",
  },
  {
    number: "03",
    title: "Controle das cotas funcionais",
    text: "Inspeção em 100% das cotas funcionais e amostragem validada nas demais cotas.",
  },
];

const surgicalProtocols = [
  {
    name: "Bioneck CMH e Bioneck TRI",
    sequence: "Lança Ø 2,0 → brocas cônicas Ø 3,5 / 4,3 / 5,0 → macho de rosca quando indicado pela densidade óssea.",
  },
  {
    name: "Dynamic CMH e Biodent HEX",
    sequence: "Lança Ø 2,0 → Ø 2,8 → Ø 3,0 → Ø 3,15 → Ø 3,5 → Ø 4,3, com countersink ou macho de rosca quando indicado.",
  },
  {
    name: "Kort HEX",
    sequence: "Protocolo dedicado com fresas Ø 4 × 5,5 / Ø 4 × 7 / Ø 5 × 5,5 / Ø 5 × 7 e Kit de Brocas Kort recomendado.",
  },
];

const insertionKeys = [
  ["CMH NP curta", "02.01.11.233"],
  ["CMH NP longa", "02.01.11.234"],
  ["TRI NP curta", "02.01.11.048"],
  ["TRI NP longa", "02.01.11.058"],
  ["TRI RP-UP curta", "02.01.11.049"],
  ["TRI RP-UP longa", "02.01.11.059"],
];

const zigomaticLengths = [
  "30",
  "32,5",
  "35",
  "37,5",
  "40",
  "42,5",
  "45",
  "47,5",
  "50",
  "52,5",
  "55",
  "57,5",
  "60",
  "62,5",
];

const zigomaticSteps = [
  "Marcar a osteotomia com a fresa lança.",
  "Perfurar com a fresa Ø 2,35 até a marcação do comprimento planejado.",
  "Quando indicado, usar a fresa laminada na região média e/ou cervical.",
  "Finalizar a loja óssea com a fresa Ø 3,3 até o comprimento planejado.",
  "Confirmar a profundidade com a sonda antes da instalação do implante.",
];

function ImplantsPage() {
  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-[color:var(--hairline)] pt-28 md:pt-36">
          <img
            src={backgroundTexture}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_76%_48%,rgba(243,122,33,0.15),transparent_34%),linear-gradient(90deg,rgba(4,4,4,0.99)_0%,rgba(4,4,4,0.88)_48%,rgba(4,4,4,0.48)_100%)]" />

          <div className="container-x relative pb-16 lg:pb-20">
            <a href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[color:var(--orange)] lg:mb-12">
              <ArrowLeft className="h-4 w-4" /> Voltar ao início
            </a>
            <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
              <div className="relative z-10 max-w-2xl">
                <span className="eyebrow">Linha de implantes</span>
                <h1 className="text-display mt-5 text-5xl sm:text-6xl lg:text-7xl">
                  Precisão para diferentes desafios clínicos.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Geometrias, conexões e dimensões desenvolvidas para oferecer estabilidade, segurança e previsibilidade em cada indicação.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a href="#linhas" className="btn-primary">
                    Explorar implantes <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a href="#zigomatico" className="btn-ghost">Implante zigomático</a>
                </div>
              </div>

              <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-black/35 sm:min-h-[620px] lg:min-h-[680px]">
                <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_62%_50%,rgba(255,255,255,0.13),transparent_46%),radial-gradient(circle_at_90%_52%,rgba(243,122,33,0.18),transparent_42%)]" />
                <img
                  src={implantsShowcase}
                  alt="Família de implantes dentários Dérig"
                  className="absolute inset-0 h-full w-full object-contain object-bottom p-4 drop-shadow-[0_28px_45px_rgba(0,0,0,0.72)] sm:p-8"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <span className="eyebrow">Engenharia Dérig</span>
                <h2 className="text-display mt-4 text-3xl md:text-5xl">Tecnologia de ponta aliada ao controle de qualidade.</h2>
              </div>
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg lg:pt-14">
                <p>
                  Com mais de três décadas de existência e mais de 25 anos dedicados ao mercado odontológico, a Dérig desenvolve soluções que aliam avanços técnico-científicos às necessidades clínicas.
                </p>
                <p>
                  Uma equipe multidisciplinar e o cuidado com matérias-primas, processos e inspeções sustentam o desenvolvimento de soluções clínicas e laboratoriais de alta precisão.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {qualitySteps.map((step) => (
                <article key={step.number} className="card-premium p-6 md:p-7">
                  <span className="text-sm font-bold text-[color:var(--orange)]">{step.number}</span>
                  <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </article>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground/75">
              A inspeção por amostragem das demais cotas segue processos validados conforme as normas ABNT NBR 5425, 5426 e 5427.
            </p>
          </div>
        </section>

        <section id="linhas" className="border-y border-[color:var(--hairline)] bg-[color:var(--surface)]/35 py-24 md:py-32">
          <div className="container-x">
            <div className="max-w-3xl">
              <span className="eyebrow">Portfólio de implantes</span>
              <h2 className="text-display mt-4 text-3xl md:text-5xl">Cinco linhas para diferentes protocolos.</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                Todas as linhas apresentam superfície Biotite, com microporosidade obtida por duplo ataque ácido.
              </p>
            </div>

            <div className="mt-12 grid gap-6 xl:grid-cols-2">
              {implantLines.map((line) => (
                <ImplantLineCard key={line.name} line={line} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <span className="eyebrow">Protocolos cirúrgicos</span>
                <h2 className="text-display mt-4 text-3xl md:text-5xl">Sequências organizadas por macrogeometria.</h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  A seleção das fresas e o uso de instrumentos opcionais devem considerar o implante planejado e a densidade óssea encontrada.
                </p>
              </div>
              <div className="grid gap-4">
                {surgicalProtocols.map((protocol) => (
                  <article key={protocol.name} className="card-premium p-6">
                    <div className="flex gap-4">
                      <ScanLine className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--orange)]" />
                      <div>
                        <h3 className="font-semibold">{protocol.name}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{protocol.sequence}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-12 card-premium overflow-hidden">
              <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
                <div className="border-b border-white/10 p-7 lg:border-b-0 lg:border-r lg:p-9">
                  <span className="eyebrow">Chaves de inserção</span>
                  <h3 className="text-display mt-4 text-2xl md:text-3xl">Captura, transporte e inserção com segurança.</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    O sistema grip amplia a resistência mecânica, preserva a interface e permite iniciar a instalação em contra-ângulo e finalizá-la com torquímetro manual.
                  </p>
                </div>
                <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                  {insertionKeys.map(([name, code]) => (
                    <div key={code} className="bg-[color:var(--card)] p-6">
                      <p className="text-sm font-semibold">{name}</p>
                      <p className="mt-2 text-xs text-muted-foreground">Código {code}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="zigomatico" className="border-y border-[color:var(--hairline)] bg-[color:var(--surface)]/35 py-24 md:py-32">
          <div className="container-x">
            <div className="grid items-stretch gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
              <div>
                <span className="eyebrow">Implante especializado</span>
                <h2 className="text-display mt-4 text-4xl md:text-6xl">Implante Zigomático CM16.</h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Produzido em titânio comercialmente puro grau 4, possui corpo longo, ápice cônico com ponta arredondada, três câmaras de corte helicoidais e rosca triangular de duas entradas.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <Spec icon={CircleDot} label="Diâmetro da rosca" value="Ø 3,75 mm" />
                  <Spec icon={ShieldCheck} label="Conexão protética" value="CM16" />
                  <Spec icon={Microscope} label="Material" value="Titânio puro grau 4" />
                  <Spec icon={Stethoscope} label="Componentes" value="Pilar angulado 45° CM16" />
                </div>

                <article className="card-premium mt-6 p-7 md:p-9">
                  <span className="eyebrow">Indicação de uso</span>
                  <h3 className="text-display mt-4 text-2xl md:text-3xl">Reabilitações totais em maxilas severamente reabsorvidas.</h3>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                    Indicado para instalação posterior na maxila e ancoragem no osso zigomático quando não é possível instalar implantes convencionais. Em conjunto com outros implantes, oferece suporte à prótese total e não deve ser utilizado em reabilitação unitária.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    A carga imediata somente é indicada quando o paciente apresenta oclusão fisiológica e o implante atinge torque mínimo de 35 Ncm.
                  </p>
                </article>

              </div>
              <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-black lg:min-h-0">
                <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.17),transparent_48%),radial-gradient(circle_at_75%_70%,rgba(243,122,33,0.12),transparent_44%)]" />
                <img
                  src={zigomaticImplant}
                  alt="Implante Zigomático Dérig CM16"
                  loading="lazy"
                  className="relative h-full min-h-[520px] w-full object-contain p-8 drop-shadow-[0_30px_35px_rgba(0,0,0,0.7)] lg:min-h-0"
                />
              </div>
            </div>

            <article className="card-premium mt-12 overflow-hidden">
              <div className="border-b border-white/10 p-7 md:p-9">
                <span className="eyebrow">Dimensões disponíveis</span>
                <h3 className="text-display mt-4 text-2xl md:text-3xl">14 comprimentos, de 30 a 62,5 mm.</h3>
              </div>
              <div className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-3 lg:grid-cols-7">
                {zigomaticLengths.map((length, index) => (
                  <div key={length} className="bg-[color:var(--card)] p-4 md:p-5">
                    <p className="text-base font-semibold">{length} mm</p>
                    <p className="mt-1 text-xs text-muted-foreground">Ref. 02.33.36.{String(index + 301)}</p>
                  </div>
                ))}
              </div>
            </article>

            <div className="mt-12 card-premium p-7 md:p-9">
              <span className="eyebrow">Sequência de perfuração</span>
              <h3 className="text-display mt-4 text-2xl md:text-3xl">Protocolo do Implante Zigomático CM16.</h3>
              <ol className="mt-8 grid gap-4 md:grid-cols-5">
                {zigomaticSteps.map((step, index) => (
                  <li key={step} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <span className="text-sm font-bold text-[color:var(--orange)]">{String(index + 1).padStart(2, "0")}</span>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/85">{step}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-7 rounded-2xl border border-[color:var(--orange)]/25 bg-[color:var(--orange)]/[0.08] p-5 text-sm leading-relaxed text-foreground/90">
                A instalação deve começar com o motor a 30 rpm e torque máximo de 35 Ncm. Quando necessário, pode ser finalizada manualmente sem exceder 60 Ncm.
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container-x">
            <div className="max-w-3xl">
              <span className="eyebrow">Segurança e informação regulatória</span>
              <h2 className="text-display mt-4 text-3xl md:text-5xl">Uso exclusivo por profissionais habilitados.</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                O procedimento zigomático exige conhecimento específico, planejamento clínico e tomográfico e condições cirúrgicas adequadas.
              </p>
            </div>

            <div className="mt-10 grid gap-4">
              <SafetyDetails title="Contraindicações e seleção do paciente">
                <p>
                  Contraindicado para reabilitações unitárias e para pacientes com condições sistêmicas ou locais que prejudiquem cicatrização e osseointegração, incluindo diabetes descontrolada, desordens vasculares ou de coagulação, doença óssea metabólica, infecção intraoral ativa, higiene inadequada, volume ósseo incompatível, abuso de cigarro ou álcool e pacientes em crescimento.
                </p>
                <p>
                  Não é indicado para pacientes com sintomas ou patologias dos seios da face. Quimioterapia, radioterapia, inflamação periodontal crônica ou cobertura insuficiente de tecido mole constituem contraindicações temporárias.
                </p>
              </SafetyDetails>

              <SafetyDetails title="Precauções, advertências e possíveis efeitos adversos">
                <p>
                  A avaliação pré-cirúrgica deve incluir exames radiográficos e/ou tomográficos, condições dos tecidos intraorais e avaliação médica quando indicada. Deve-se evitar superaquecimento ósseo e observar fatores como anticoagulantes, diabetes, bruxismo, hábitos parafuncionais e histórico de radiação em cabeça e pescoço.
                </p>
                <p>
                  Como em outros procedimentos cirúrgicos, podem ocorrer desconforto, edema, infecção, parestesia, perda óssea, fístula, fraturas, falha de osseointegração, peri-implantite e complicações protéticas, estéticas ou biomecânicas. O produto é de uso único e não deve ser reutilizado ou reprocessado.
                </p>
              </SafetyDetails>

              <SafetyDetails title="Esterilidade, armazenamento e ressonância magnética">
                <p>
                  O produto é fornecido estéril por radiação gama. Deve permanecer lacrado em sua embalagem original, seco e protegido da luz solar, entre 23 °C e 27 °C e com umidade relativa de até 70%.
                </p>
                <p>
                  O implante é condicional para ressonância magnética em campos de 1,5 T e 3,0 T, gradiente espacial máximo de 40 T/m e SAR médio máximo de corpo inteiro de 2 W/kg. A exposição contínua em modo normal não deve ultrapassar 15 minutos, e podem ocorrer artefatos de imagem próximos ao implante.
                </p>
              </SafetyDetails>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="rounded-full border border-white/10 px-4 py-2">Registro ANVISA 80165910026</span>
              <span className="rounded-full border border-white/10 px-4 py-2">Instrução de Uso IU-15-02</span>
              <span className="rounded-full border border-white/10 px-4 py-2">Produto estéril e de uso único</span>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground/75">
              Conteúdo destinado a profissionais da odontologia. As imagens dos produtos não estão necessariamente em escala e a disponibilidade pode variar conforme o mercado. Consulte sempre a instrução de uso vigente e o planejamento individual do paciente.
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

function ImplantLineCard({ line }: { line: ImplantLine }) {
  return (
    <article className="card-premium overflow-hidden">
      <div className="grid sm:grid-cols-[0.42fr_0.58fr]">
        <div className="relative min-h-72 overflow-hidden bg-black sm:min-h-full">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,rgba(243,122,33,0.13),transparent_62%)]" />
          <img
            src={line.image}
            alt={line.name}
            loading="lazy"
            className={`relative h-full min-h-72 w-full ${line.imageMode === "cover" ? "object-cover" : "object-contain"}`}
          />
        </div>
        <div className="p-6 md:p-7">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--orange)]">{line.interface}</span>
          <h3 className="text-display mt-3 text-2xl md:text-3xl">{line.name}</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{line.description}</p>
          <ul className="mt-5 space-y-3">
            {line.features.map((feature) => (
              <li key={feature} className="flex gap-2.5 text-xs leading-relaxed text-foreground/85">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--orange)]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="overflow-x-auto border-t border-white/10">
        <table className="w-full min-w-[680px] text-left text-xs">
          <thead className="bg-white/[0.035] text-foreground/80">
            <tr>
              <th className="px-5 py-4 font-semibold">Diâmetro</th>
              <th className="px-5 py-4 font-semibold">Comprimentos</th>
              <th className="px-5 py-4 font-semibold">Códigos</th>
              <th className="px-5 py-4 font-semibold">Componentes</th>
            </tr>
          </thead>
          <tbody>
            {line.options.map((option) => (
              <tr key={option.diameter} className="border-t border-white/10 text-muted-foreground">
                <td className="px-5 py-4 font-semibold text-foreground">{option.diameter}</td>
                <td className="px-5 py-4">{option.lengths}</td>
                <td className="px-5 py-4">{option.codes}</td>
                <td className="px-5 py-4">{option.components}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

function Spec({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof CircleDot;
  label: string;
  value: string;
}) {
  return (
    <div className="card-premium flex items-center gap-4 p-5">
      <Icon className="h-5 w-5 shrink-0 text-[color:var(--orange)]" />
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="mt-1 text-sm font-semibold">{value}</p>
      </div>
    </div>
  );
}

function SafetyDetails({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group card-premium overflow-hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-base font-semibold md:px-8">
        {title}
        <ChevronDown className="h-5 w-5 shrink-0 text-[color:var(--orange)] transition-transform group-open:rotate-180" />
      </summary>
      <div className="space-y-4 border-t border-white/10 px-6 py-6 text-sm leading-relaxed text-muted-foreground md:px-8">
        {children}
      </div>
    </details>
  );
}
