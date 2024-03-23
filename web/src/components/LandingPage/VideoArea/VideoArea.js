import React from "react";
import img from "../../../images/video-img.jpg";

const VideoArea = () => {
  return (
    <section className="video-area section-gap-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="section-title text-white">
              <h2 className="text-white">
              Confort et Sécurité 
              </h2>
              <p>
                Contrôle à Distance et Sécurité Accrue
              </p>
              <p>
                Personnalisation et Confort Sur Mesure
              </p>
              <p>
                Intégration Mobile et Flexibilité
              </p>
              <p>
                Gestion Simplifiée et Confort Moderne
              </p>
              <p>
                Interactivité Intuitive et Utilisation Conviviale
              </p>
            </div>
          </div>
          <div className="offset-lg-1 col-md-6 video-left">
            <div className="owl-carousel video-carousel owl-theme owl-loaded">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                >
                  <div
                    className="owl-item cloned"
                    style={{width: "540px", marginRight: "30px"}}
                  >
                    <div className="single-video">
                      <div className="video-part">
                        <img className="img-fluid" src={img} alt="" />
                        <div className="overlay"></div>
                      </div>
                      <h4 className="text-white mb-20 mt-30">
                      Sécurité et Innovation
                      </h4>
                      <p className="text-white mb-20">

                      Accessibilité Universelle et Inclusivité <br/>
                      Sécurité Améliorée et Tranquillité d'Esprit<br/>
                      Exploration Immersive et Visualisation Détaillée<br/>
                      Efficacité Énergétique et Économies<br/>
                      Innovation Technologique et Modernisation du Mode de Vie<br/>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="owl-controls">
                <div className="owl-nav">
                  <div className="owl-prev">
                    <img src="img/prev.png" />
                  </div>
                  <div className="owl-next">
                    <img src="img/next.png" />
                  </div>
                </div>
                <div style="display: none;" className="owl-dots"></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default VideoArea;
