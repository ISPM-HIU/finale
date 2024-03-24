import React from "react";
import img from "../../../images/video-img.jpg";

const VideoArea = () => {
  return (
    <section className="video-area section-gap-bottom" id="avantages">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="section-title ">
              <h2 className="">
              Accessibilité et Contrôle
              </h2>
              <p>
                Surveillance et contrôle à distance<br/>
                Accessibilité universelle<br/>
                Personnalisation des commandes
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="section-title ">
              <h2 className="">
                Expérience Utilisateur
              </h2>
              <p>
                  Commandes gestuelles et vocales<br/>
                  Visualisation 3D immersive<br/>
                  Intégration de technologies avancées
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="section-title ">
              <h2 className="">
              Flexibilité et Efficacité
              </h2>
              <p>
                Évolutivité et flexibilité<br/>
                Amélioration de l'efficacité énergétique
              </p>
            </div>
          </div>
          {/* <div className="offset-lg-1 col-md-6 video-left">
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
                        <div className="overlay"></div>
                      </div>
                      <h4 className=" mb-20 mt-30">
                      Sécurité et Innovation
                      </h4>
                      <p className=" mb-20">

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
         
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default VideoArea;
