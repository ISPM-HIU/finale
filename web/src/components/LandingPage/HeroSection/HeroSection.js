import React from "react";
import headerImg from "../../../images/header-img.png";

const HeroSection = () => {
  return (
    <section className="home-banner-area">
      <div className="container">
        <div className="container">
          <div
            className="row justify-content-center fullscreen align-items-center"
            style={{ height: "788px" }}
          >
            <div className="col-lg-5 col-md-8 home-banner-left">
              <h1 className="text-white">
                Take the first step <br />
                to learn with us
              </h1>
              <p className="mx-auto text-white  mt-20 mb-40">
                In the history of modern astronomy, there is probably no one
                greater leap forward than the building and launch of the space
                telescope known as the Hubble.
              </p>
            </div>
            <div className="offset-lg-2 col-lg-5 col-md-12 home-banner-right">
              <img className="img-fluid" src={headerImg} alt="" width={"80%"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
