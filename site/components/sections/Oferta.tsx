import { ctaHref, hero, oferta, site } from "@/content/copy";
import Button from "../Button";

// Template ticket cards, one per step of the offer ladder.
export default function Oferta() {
  return (
    <section id="oferta" className="bg-dark section-dark text-light pt-80 relative jarallax">
      <img src="/images/background/1.webp" className="jarallax-img" alt="" />
      <div className="gradient-edge-top"></div>
      <div className="gradient-edge-bottom"></div>
      <div className="sw-overlay op-7"></div>

      <div className="container relative z-2">
        <div className="row g-4 gx-5 justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="subtitle s2 mb-3 wow fadeInUp">{oferta.subtitle}</div>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              {oferta.titulo}
            </h2>
            <p className="lead wow fadeInUp" data-wow-delay=".4s">
              {oferta.intro}
            </p>
          </div>
        </div>

        <div className="row g-4 wow mask-right">
          {oferta.etapas.map((etapa, i) => (
            <div className="col-lg-3 col-md-6" key={etapa.nome}>
              <div className={`d-ticket h-100 ${etapa.estilo}`}>
                <div className="prumo-ticket-brand mb-4">
                  {site.nome}
                  <span className="id-color">.</span> <span className="op-5 fs-14">Etapa {i + 1}</span>
                </div>
                <span className="prumo-ticket-bg">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="prumo-ticket-title relative">{etapa.nome}</h2>
                {etapa.preco && <h4 className="mb-4 relative">{etapa.preco}</h4>}
                <div className="fs-14 relative mt-3">{etapa.detalhe}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          {oferta.abatimentoConfirmado && (
            <p className="wow fadeInUp">{oferta.abatimento}</p>
          )}
          <div className="wow fadeInUp" data-wow-delay=".2s">
            <Button href={ctaHref}>{hero.cta}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
