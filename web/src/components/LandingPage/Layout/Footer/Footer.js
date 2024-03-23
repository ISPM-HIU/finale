import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area section-gap">
      {/* <div className="container">
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
          <div className="col-lg-3 col-md-6 single-footer-widget">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Brand Assets</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 single-footer-widget">
            <h4>Features</h4>
            <ul>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Brand Assets</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 single-footer-widget">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Guides</a>
              </li>
              <li>
                <a href="#">Research</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom row align-items-center">
          <p className="footer-text m-0 col-lg-8 col-md-12">
            Copyright ©
            <script>document.write(new Date().getFullYear());</script>2024 All
            rights reserved | This template is made with{" "}
            <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
          </p>
          <div className="col-lg-4 col-md-12 footer-social">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-dribbble"></i>
            </a>
            <a href="#">
              <i className="fa fa-behance"></i>
            </a>
          </div>
        </div>
      </div> */}
      <div class="container my-5">

        <footer class="text-center text-lg-start" >
          <div class="container d-flex justify-content-center py-1">
            <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" >
              {/* <i class="fab fa-facebook-f"></i> */}
              <i class="ti-facebook"></i>

            </button>
            <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" >
              {/* <i class="fab fa-youtube"></i> */}
              {/* <i class="ti-whatsapp"></i> */}


            <span className="watsap">

            </span>
            </button>
            <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" >
              {/* <i class="fab fa-instagram"></i> */}
              <i class="ti-google"></i>

            </button>
          </div>

          <div class="text-center text-white p-3" >
            © 2024 Copyright 
            <a class="text-white">javis@gmail.com</a>
          </div>
        </footer>
        
      </div>
    </footer>
  );
};
export default Footer;
