import { provaSocial } from "@/content/copy";

// Hidden until real numbers, testimonials, cases or logos are filled in content/copy.ts.
export default function ProvaSocial() {
  const { numeros, depoimentos, casos, logos } = provaSocial;
  if (!numeros.length && !depoimentos.length && !casos.length && !logos.length) return null;

  return (
    <section id="prova-social" className="bg-dark section-dark text-light">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="subtitle wow fadeInUp">{provaSocial.subtitle}</div>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              {provaSocial.titulo}
            </h2>
          </div>
        </div>

        {numeros.length > 0 && (
          <div className="row g-4 justify-content-center text-center mb-5">
            {numeros.map((n, i) => (
              <div className="col-md-4 wow fadeInUp" data-wow-delay={`${i * 0.2}s`} key={n.legenda}>
                <div className="fs-60 fw-bold id-color">{n.valor}</div>
                <p className="mb-0">{n.legenda}</p>
              </div>
            ))}
          </div>
        )}

        {depoimentos.length > 0 && (
          <div className="row g-4 mb-5">
            {depoimentos.map((d) => (
              <div className="col-lg-4" key={d.nome}>
                <div className="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask">
                  <img src={d.foto} className="w-100 hover-scale-1-1" alt={d.nome} />
                  <div className="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>
                  <div className="abs w-100 start-0 bottom-0 z-3">
                    <div className="bg-blur p-4 m-4 rounded-1 text-light relative z-2">
                      <p>“{d.texto}”</p>
                      <h5 className="mb-0">{d.nome}</h5>
                      <span>{d.empresa}</span>
                    </div>
                    <div className="gradient-edge-bottom h-100 op-8"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {casos.map((c, i) => (
          <div className="border-white-bottom-op-2 pb-5 mb-5 wow fadeInUp" key={i}>
            <div className="row g-4">
              <div className="col-md-4">
                <h5>Problema</h5>
                <p className="mb-0">{c.problema}</p>
              </div>
              <div className="col-md-4">
                <h5>Solução</h5>
                <p className="mb-0">{c.solucao}</p>
              </div>
              <div className="col-md-4">
                <h5 className="id-color">Resultado</h5>
                <p className="mb-0">{c.resultado}</p>
              </div>
            </div>
          </div>
        ))}

        {logos.length > 0 && (
          <div className="row g-4 align-items-center justify-content-center wow fadeInUp">
            {logos.map((l) => (
              <div className="col-4 col-md-2" key={l.src}>
                <img src={l.src} className="w-100 px-3" alt={l.alt} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
