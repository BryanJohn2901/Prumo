import { proposta, site } from "@/content/copy";

// Template quote block over a parallax background.
export default function Destaque() {
  return (
    <section className="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="Destaque">
      <img src="/images/background/2.webp" className="jarallax-img" alt="" />
      <div className="gradient-edge-top"></div>
      <div className="gradient-edge-bottom"></div>
      <div className="sw-overlay op-8"></div>
      <div className="container relative z-4">
        <div className="row justify-content-center text-center">
          <div className="col-lg-10">
            <div className="bg-color w-80px h-80px rounded-1 mx-auto mb-4 wow scaleIn">
              <i className="icofont-quote-left text-white fs-40 d-block pt-3"></i>
            </div>
            <h3 className="fs-40 mb-4 wow fadeInUp">“{proposta.destaque}”</h3>
            <span className="wow fadeInUp" data-wow-delay=".2s">
              {site.nome}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
