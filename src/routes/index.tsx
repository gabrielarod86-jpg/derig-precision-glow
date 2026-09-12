import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { HeroSection } from "@/components/site/HeroSection";
import { CertificationBar } from "@/components/site/CertificationBar";
import { ProductEcosystem } from "@/components/site/ProductEcosystem";
import { ComponentsFeature } from "@/components/site/ComponentsFeature";
import { BiotiteTechnology } from "@/components/site/BiotiteTechnology";
import { KitsAndDrills } from "@/components/site/KitsAndDrills";
import { GlobalQuality } from "@/components/site/GlobalQuality";
import { TechnicalLibrary } from "@/components/site/TechnicalLibrary";
import { ContactCTA } from "@/components/site/ContactCTA";
import { Footer } from "@/components/site/Footer";
import { MobileCTA } from "@/components/site/MobileCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dérig Implantes do Brasil — Engenharia premium para implantodontia" },
      {
        name: "description",
        content:
          "Implantes, kits cirúrgicos, fresas e componentes protéticos com tecnologia Biotite. Precisão, segurança e desempenho clínico para profissionais.",
      },
      { property: "og:title", content: "Dérig Implantes do Brasil" },
      {
        property: "og:description",
        content:
          "Engenharia premium brasileira para implantodontia de alta performance.",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Encode+Sans:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="site-backdrop relative min-h-screen text-foreground">
      <Header />
      <main>
        <HeroSection />
        <CertificationBar />
        <BiotiteTechnology />
        <ProductEcosystem />
        <ComponentsFeature />
        <KitsAndDrills />
        <GlobalQuality />
        <TechnicalLibrary />
        <ContactCTA />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
