import { automatizar } from "@/content/copy";

export default function Automatizar() {
  return (
    <section id="automatizar" className="bg-dark section-dark text-light pt-80 relative jarallax">
      <img src="/images/background/4.webp" className="jarallax-img" alt="" />
      <div className="gradient-edge-top"></div>
      <div className="gradient-edge-bottom"></div>
      <div className="sw-overlay op-8"></div>

      <div className="container relative z-2">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="subtitle wow fadeInUp">{automatizar.subtitle}</div>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              {automatizar.titulo}
            </h2>
          </div>
        </div>

        <div className="spacer-single"></div>

        <div className="row g-4">
          {automatizar.itens.map((item, i) => (
            <div className="col-lg-4 col-md-6" key={item.texto}>
              <div
                className="d-flex h-100 border-white-op-3 rounded-1 bg-blur p-4 wow fadeInUp"
                data-wow-delay={`${(i % 3) * 0.2}s`}
              >
                <i className={`${item.icone} fs-40 id-color`}></i>
                <p className="ms-4 mb-0 fs-18 text-wrap">{item.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
