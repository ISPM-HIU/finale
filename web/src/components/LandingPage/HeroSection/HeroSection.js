import React from "react";
// import headerImg from "../../../images/header-img.png";
import headerImg from "../../../images/home5.png";
import ThreeJsScene from "./canva.js"

const HeroSection = () => {
  return (
    <section className="home-banner-area">
      <div className="container">
        <div className="container">
          <div
            className="row justify-content-center fullscreen align-items-center"
            style={{ height: "788px" }}
          >
            <div className="col-lg-5 col-md-8 home-banner-left textContainer mb-5">
              {/* <h1 className="text-white d_f bouncingAnim">
              <span>B</span>
              <span>i</span>
              <span>e</span>
              <span>n</span>
              <span>v</span>
              <span>e</span>
              <span>n</span>
              <span>u</span>
              <span>e</span>
              </h1>
              <p className="d-flex text-white justify-content-center  mt-20 mb-40">dans</p>
              <h1 className="text-white d_f bouncingAnim">
              <span>S</span>
              <span>m</span>
              <span>a</span>
              <span>r</span>
              <span>t</span>
              <span>h</span>
              <span>o</span>
              <span>m</span>
              <span>e</span>
               
              </h1> */}
              {/* <h1  className="text-white">
                Bienvenue
              </h1>
              <p className="d-flex text-white justify-content-center  mt-20 mb-40">dans</p> */}

              <h1  className="text-white">
               SmartHome 
              </h1>
              <p className="mx-auto text-white">
                Maîtrisez votre demeure, où que vous soyez.
              </p>
            </div>
            <div className="offset-lg-2 col-lg-5 col-md-12 home-banner-right mtop">
              <img className="img-fluid border-left-top" src={headerImg} alt="" width={"80%"} />
              {/* <ThreeJsScene/> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
