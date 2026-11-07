import { comoFunciona } from "@/content/copy";

// Same row layout as the template's event schedule.
export default function ComoFunciona() {
  const last = comoFunciona.passos.length - 1;
  return (
    <section id="como-funciona" className="bg-dark section-dark text-light">
      <div className="container">
        <div className="row g-4 gx-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="subtitle s2 mb-3 wow fadeInUp">{comoFunciona.subtitle}</div>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              {comoFunciona.titulo}
            </h2>
            <p className="lead wow fadeInUp" data-wow-delay=".4s">
              {comoFunciona.intro}
            </p>
          </div>
        </div>

        <div className="spacer-single"></div>

        <div className="row g-4 gx-5 justify-content-center">
          <div className="col-lg-12">
            {comoFunciona.passos.map((passo, i) => (
              <div
                key={passo.titulo}
                className={`${i < last ? "border-white-bottom-op-2 " : ""}pb-5 mb-5 wow fadeInUp`}
                data-wow-delay={`${i * 0.15}s`}
              >
                <div className="row g-4 align-items-center">
                  <div className="col-md-2">
                    <span className="prumo-step-number id-color">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="col-md-4">
                    <h3 className="mb-0">{passo.titulo}</h3>
                  </div>
                  <div className="col-md-6">
                    <p className="mb-0">{passo.texto}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
