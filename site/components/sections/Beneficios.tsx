import { beneficios } from "@/content/copy";

export default function Beneficios() {
  return (
    <section id="beneficios" className="bg-dark section-dark text-light">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className="subtitle wow fadeInUp">{beneficios.subtitle}</div>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              {beneficios.titulo}
            </h2>
          </div>

          {beneficios.itens.map((item, i) => (
            <div className="col-lg-3 col-md-6" key={item.titulo}>
              <div className="hover h-100">
                <div className="bg-dark-2 h-100 relative rounded-1 overflow-hidden p-40 hover-bg-color hover-text-light wow scale-in-mask">
                  <div className="relative z-2">
                    <span className="prumo-step-number fs-32 id-color d-block mb-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4>{item.titulo}</h4>
                    <p className="mb-0">{item.texto}</p>
                  </div>
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
