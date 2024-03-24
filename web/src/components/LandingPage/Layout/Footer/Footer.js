import React from "react";
import watsap from "../../../../../src/images/watsap.png"
import facebook from "../../../../../src/images/fb.png"
import mail from "../../../../../src/images/mail.png"
import { mapLinear } from "three/src/math/MathUtils";


const Footer = () => {
  return (
    <footer className="footer-area section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 single-footer-widget">
            <h4>Contactez-nous</h4>
            <ul>
              <li>
                <a href="#">jarvis@gmail.com</a>
              </li>

              <li>
                <a href="#"> +1234567890</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 col-md-6 single-footer-widget">
          <div className="row">
            <div className="d-flex justify-content-center col-md-4">
              <img className="img-fluid2 border-left-top" src={watsap} alt="" width={"80%"} />
            </div>
            <div className="d-flex justify-content-center col-md-4">
              <img className="img-fluid2 border-left-top" src={facebook} alt="" width={"80%"} />
            </div>
            <div className="d-flex justify-content-center col-md-4">
              <img className="img-fluid2 border-left-top" src={mail} alt="" width={"80%"} />
            </div>
          </div>
            
            {/* <ul>
              <li>
                <a href="#">jarvis@gmail.com</a>
              </li>

              <li>
                <a href="#"> +1234567890</a>
              </li>
            </ul> */}
          </div>
        </div>
        <div class="text-center p-3">
          © 2024 Copyright:
          <a class="text-reset fw-bold">SmartHome.com</a>
        </div>
      </div>
      {/* <div class="container my-5">

        <footer class="text-center text-lg-start" >
          <div class="container d-flex justify-content-center py-1">
            <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" >
              <i class="ti-facebook"></i>

            </button>
            <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" >


            <span className="watsap">

            </span>
            </button>
            <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" >
              <i class="ti-google"></i>

            </button>
          </div>

          <div class="text-center text-white p-3" >
            © 2024 Copyright 
            <a class="text-white">javis@gmail.com</a>
          </div>
        </footer>
        
      </div> */}
    </footer>
  );
};
export default Footer;
