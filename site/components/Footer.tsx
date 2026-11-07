import { rodape, site } from "@/content/copy";

export default function Footer() {
  const contatos = [rodape.telefone && `T. ${rodape.telefone}`, rodape.email && `M. ${rodape.email}`].filter(Boolean);
  const sociais = [
    rodape.instagram && { href: rodape.instagram, icone: "fa-brands fa-instagram", label: "Instagram" },
    rodape.linkedin && { href: rodape.linkedin, icone: "fa-brands fa-linkedin-in", label: "LinkedIn" },
  ].filter((s): s is { href: string; icone: string; label: string } => Boolean(s));

  return (
    <footer className="text-light section-dark">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-12">
            <div className="d-lg-flex align-items-center justify-content-between text-center">
              <div>
                <h3 className="fs-20">{site.nome}</h3>
                {site.descricao}
              </div>
              <div>
                <a href="#inicio" className="prumo-logo fs-40">
                  {site.nome}
                  <span className="id-color">.</span>
                </a>
                {sociais.length > 0 && (
                  <div className="social-icons mb-sm-30 mt-4">
                    {sociais.map((s) => (
                      <a key={s.href} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                        <i className={s.icone}></i>
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <div>
                {contatos.length > 0 && <h3 className="fs-20">Contato</h3>}
                {contatos.map((c) => (
                  <div key={c as string}>{c}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              Copyright {new Date().getFullYear()} - {site.nome}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
