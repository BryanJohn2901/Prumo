import { garantia, urgencia } from "@/content/copy";

// Guarantee and scarcity blocks only render once confirmed in content/copy.ts.
export default function Garantia() {
  const horas = garantia.horasMinimas;
  const limite = urgencia.limiteMensal;
  if (horas === null && limite === null) return null;

  return (
    <section id="garantia" className="bg-dark section-dark text-light">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {horas !== null && (
            <div className="col-lg-6">
              <div className="h-100 border-white-op-3 p-40 rounded-1 bg-blur relative overflow-hidden wow fadeInUp">
                <div className="gradient-edge-bottom color start-0 h-50 op-5"></div>
                <div className="relative z-2">
                  <i className="fa-solid fa-shield-halved id-color fs-40 d-block mb-3"></i>
                  <div className="subtitle">{garantia.subtitle}</div>
                  <h3>{garantia.titulo}</h3>
                  <p className="mb-0">{garantia.texto(horas)}</p>
                </div>
              </div>
            </div>
          )}
          {limite !== null && (
            <div className="col-lg-6">
              <div
                className="h-100 border-white-op-3 p-40 rounded-1 bg-blur relative overflow-hidden wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="gradient-edge-bottom color start-0 h-50 op-5"></div>
                <div className="relative z-2">
                  <i className="fa-solid fa-calendar-check id-color fs-40 d-block mb-3"></i>
                  <h3>Atendemos {limite} novas empresas por mês.</h3>
                  <p className="mb-0">{urgencia.texto}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
