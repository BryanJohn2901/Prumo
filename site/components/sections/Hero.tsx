import { ctaHref, hero } from "@/content/copy";
import Button from "../Button";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="section-dark no-top no-bottom text-light jarallax relative mh-800"
      data-video-src="mp4:/video/2.mp4"
    >
      <div className="gradient-edge-top op-6 h-50 color"></div>
      <div className="gradient-edge-bottom"></div>
      <div className="sw-overlay op-8"></div>
      <div className="abs abs-centered z-2 w-80 prumo-hero-inner">
        <div className="container wow scaleIn" data-wow-duration="3s">
          <div className="row justify-content-center">
            <div className="col-lg-11 text-center">
              <div className="subtitle">{hero.subtitle}</div>
              <h1 className="prumo-hero-title mb-4">{hero.headline}</h1>
              <p className="lead mb-0 prumo-hero-lead mx-auto">{hero.subheadline}</p>

              <div className="spacer-single"></div>

              <Button href={ctaHref} className="mx-2 mb-3">
                {hero.cta}
              </Button>
              <Button href="#como-funciona" line className="mx-2 mb-3">
                Como funciona
              </Button>

              <p className="fs-14 op-7 mt-2 d-md-none">{hero.microcopy.join(" • ")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="abs w-100 start-0 bottom-0 z-3">
        <div className="container">
          <div className="sm-hide border-white-op-3 p-40 py-4 rounded-1 bg-blur relative overflow-hidden wow fadeInUp">
            <div className="gradient-edge-bottom color start-0 h-50 op-5"></div>
            <div className="row g-4 justify-content-between align-items-center relative z-2">
              <div className="col-lg-3 col-md-6">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-gift id-color fs-32 me-3"></i>
                  <h4 className="mb-0">{hero.microcopy[0]}</h4>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-handshake id-color fs-32 me-3"></i>
                  <h4 className="mb-0">{hero.microcopy[1]}</h4>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-lightbulb id-color fs-32 me-3"></i>
                  <h4 className="mb-0 text-wrap">{hero.microcopy[2]}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
