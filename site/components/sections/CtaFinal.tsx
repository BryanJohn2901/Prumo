import { ctaFinal, ctaHref, urgencia } from "@/content/copy";
import Button from "../Button";

export default function CtaFinal() {
  return (
    <section id="contato" className="bg-dark section-dark text-light pt-80 relative jarallax">
      <img src="/images/background/3.webp" className="jarallax-img" alt="" />
      <div className="gradient-edge-top"></div>
      <div className="gradient-edge-bottom"></div>
      <div className="sw-overlay op-8"></div>

      <div className="container relative z-2">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-8 text-center">
            <p className="lead wow fadeInUp">{ctaFinal.imagine}</p>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              {ctaFinal.titulo}
            </h2>

            <div className="spacer-single"></div>

            <div className="wow fadeInUp" data-wow-delay=".4s">
              <Button href={ctaHref}>{ctaFinal.botao}</Button>
              <p className="fs-14 op-7 mt-3">{ctaFinal.microcopy.join(" • ")}</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-8">
            <div className="border-white-op-3 p-40 rounded-1 bg-blur relative overflow-hidden wow fadeInUp" data-wow-delay=".6s">
              <div className="gradient-edge-bottom color start-0 h-50 op-5"></div>
              <p className="mb-0 relative z-2">
                <strong className="id-color">PS:</strong> {ctaFinal.ps}
                {urgencia.limiteMensal !== null && ` ${ctaFinal.psVagas}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
