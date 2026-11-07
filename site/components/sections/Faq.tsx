import { faq } from "@/content/copy";
import Accordion from "../Accordion";

export default function Faq() {
  return (
    <section id="faq" className="bg-dark section-dark text-light">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5">
            <div className="subtitle wow fadeInUp">{faq.subtitle}</div>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              {faq.titulo}
            </h2>
          </div>

          <div className="col-lg-7">
            <Accordion items={faq.itens} />
          </div>
        </div>
      </div>
    </section>
  );
}
