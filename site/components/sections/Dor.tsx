import { dor } from "@/content/copy";

export default function Dor() {
  return (
    <section id="dor" className="bg-dark section-dark text-light">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="subtitle wow fadeInUp mb-3">{dor.subtitle}</div>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              {dor.titulo}
            </h2>
            <p className="lead mb-0 wow fadeInUp">{dor.intro}</p>
          </div>
        </div>

        <div className="spacer-single"></div>

        <div className="row g-4">
          {dor.itens.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.texto}>
              <div className="hover">
                <div className="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">
                  <div className="abs p-40 bottom-0 z-2">
                    <div className="relative wow fadeInUp">
                      <h4 className="mb-0">{item.texto}</h4>
                    </div>
                  </div>
                  <div className="gradient-edge-bottom h-100"></div>
                  <img src={item.img} className="w-100 hover-scale-1-1" alt="" />
                  <div className="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
