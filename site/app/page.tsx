import TemplateEffects from "@/components/TemplateEffects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import Hero from "@/components/sections/Hero";
import Proposta from "@/components/sections/Proposta";
import Dor from "@/components/sections/Dor";
import Destaque from "@/components/sections/Destaque";
import ComoFunciona from "@/components/sections/ComoFunciona";
import Automatizar from "@/components/sections/Automatizar";
import Beneficios from "@/components/sections/Beneficios";
import ProvaSocial from "@/components/sections/ProvaSocial";
import Oferta from "@/components/sections/Oferta";
import Objecoes from "@/components/sections/Objecoes";
import Garantia from "@/components/sections/Garantia";
import Faq from "@/components/sections/Faq";
import CtaFinal from "@/components/sections/CtaFinal";
import { marquee } from "@/content/copy";

export default function Home() {
  return (
    <>
      <div id="wrapper">
        <div className="float-text show-on-scroll">
          <span>
            <a href="#inicio">Voltar ao topo</a>
          </span>
        </div>
        <div className="scrollbar-v show-on-scroll"></div>

        <div id="de-loader">
          <div className="lds-roller">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i}></div>
            ))}
          </div>
        </div>

        <Header />
        <Hero />
        <Proposta />

        <section className="section-dark p-0" aria-label="O que automatizamos">
          <Marquee items={marquee.linha1} direction="right" className="bg-color rot-2" wow="fadeInLeft" />
          <Marquee items={marquee.linha2} direction="left" className="bg-color-2 rot-min-1 mt-min-20" wow="fadeInRight" />
        </section>

        <Dor />
        <Destaque />
        <ComoFunciona />
        <Automatizar />
        <Beneficios />
        <ProvaSocial />
        <Oferta />
        <Objecoes />
        <Garantia />
        <Faq />
        <CtaFinal />
      </div>

      <Footer />
      <TemplateEffects />
    </>
  );
}
