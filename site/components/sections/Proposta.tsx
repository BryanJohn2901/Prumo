import { proposta } from "@/content/copy";

export default function Proposta() {
  return (
    <section id="proposta" className="bg-dark section-dark text-light">
      <div className="container">
        <div className="row gx-5 align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="me-lg-5 pe-lg-5 py-5 my-5">
              <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                {proposta.subtitle}
              </div>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                {proposta.titulo}
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                {proposta.texto}
              </p>
              <p className="wow fadeInUp" data-wow-delay=".7s">
                {proposta.solucao}
              </p>

              <ul className="ul-check">
                {proposta.semPrecisar.map((item, i) => (
                  <li key={item} className="wow fadeInUp" data-wow-delay={`${0.8 + i * 0.1}s`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="wow scaleIn">
              <img src="/images/misc/c1.webp" className="w-100 rotate-animation" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
