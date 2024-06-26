import React from "react";
import {motion} from "framer-motion";
const OtherFeature = () => {
  return (
    <section className="other-feature-area">
      <div className="container">
        <div className="feature-inner row">
          <div className="col-lg-12">
            <div className="section-title text-left">
              <h2 className="animated-text" id="function">
                Les fonctionnalités
              </h2>
              <p>
              Découvrez nos fonctionnalités avancées pour rendre votre maison plus sûre, connectée et facile à gérer.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="other-feature-item">
              {/* <i className="ti-key"></i> */}
              <i class="ti-control-play"></i>

              <h4>Contrôle à distance de votre maison</h4>
              <div>
                <p>
             Notre application vous offre le contrôle total de la sécurité de votre domicile. Vous pouvez verrouiller et déverrouiller les portes et les fenêtres, allumer ou éteindre les ampoules...
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt--160">
            <div className="other-feature-item">
              {/* <i className="ti-files"></i> */}
              <i class="ti-settings"></i>
              <h4>Personnalisation des commandes gestuelles</h4>
              <div>
                <p>
                Personnalisez vos commandes en utilisant des gestes intuitifs pour simplifier et rendre plus rapide la gestion de votre maison intelligente.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt--260">
            <div className="other-feature-item">
              {/* <i className="ti-medall-alt"></i> */}
              <i class="ti-microphone"></i>
              <h4>Commandes vocales intelligentes</h4>
              <div>
                <p>
                Contrôlez facilement votre maison en utilisant des commandes vocales pour activer des appareils, ajuster les paramètres et interagir avec votre environnement domestique.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="other-feature-item">
              {/* <i className="ti-briefcase"></i> */}
              <i class="ti-shield"></i>
              <h4>Sécurité avancée</h4>
              <div>
                <p>
                Notre application est conçue pour identifier et vous alerter instantanément en cas d’activité inhabituelle ou suspecte dans votre maison. Recevez des notifications en temps réel sur votre dispositif mobile pour rester informé de tout événement imprévu.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt--160">
            <div className="other-feature-item">
              <i class="ti-layout"></i>

              {/* <i className="ti-crown"></i> */}
              <h4>Visualisation 3D</h4>
              <div>
                <p>
                Plongez dans une expérience visuelle  en 3D pour visualiser toutes les parties de votre maison, offrant une perspective virtuelle de l'exterieur et de l'intereur de votre maison.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt--260"
              >
            <div className="other-feature-item">
              {/* <i className="ti-headphone-alt"></i> */}
              {/* <i class="ti-headphone-alt"></i> */}
              <i class="ti-comment"></i>
             <h4>Chatbot messenger</h4>
              <div>
                <p>
                Permettre aux utilisateurs de commander et de contrôler leur maison directement depuis l'application Messenger
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="y-5">
      </div>
    </section>
  );
};
export default OtherFeature;
