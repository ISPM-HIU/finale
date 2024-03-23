import React from "react";

const FeatureSection = () => {
  return (
    <section className="feature-area">
      <div className="container-fluid">
        <div className="feature-inner row">
          <div className="col-lg-3 col-md-6">
            <div className="feature-item d-flex">
              {/* <i className="ti-book"></i> */}
              <i class="ti-hand-stop"></i>
              <div className="ml-20">
                <h4>Commandes gestuelles</h4>
                <p>
                Contrôlez sans effort votre maison intelligente avec des gestes simples.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="feature-item d-flex">
              {/* <i className="ti-cup"></i> */}
              <i class="ti-microphone"></i>
              <div className="ml-20">
                <h4>Commandes <br/> vocales</h4>
                <p>
                  Contrôlez votre maison d'une simple commande vocale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeatureSection;
