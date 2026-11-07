import { objecoes } from "@/content/copy";

export default function Objecoes() {
  return (
    <section id="objecoes" className="bg-dark section-dark text-light">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="subtitle wow fadeInUp">{objecoes.subtitle}</div>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              {objecoes.titulo}
            </h2>
          </div>
        </div>

        <div className="spacer-single"></div>

        <div className="row g-4 justify-content-center">
          {objecoes.itens.map((item, i) => (
            <div className="col-md-6" key={item.pergunta}>
              <div
                className="h-100 border-white-op-3 rounded-1 bg-dark-2 p-40 relative overflow-hidden wow fadeInUp"
                data-wow-delay={`${(i % 2) * 0.2}s`}
              >
                <div className="gradient-edge-bottom color start-0 h-50 op-3"></div>
                <div className="relative z-2">
                  <i className="icofont-quote-left id-color fs-40 d-block mb-3"></i>
                  <h4>“{item.pergunta}”</h4>
                  <p className="mb-0">{item.resposta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
