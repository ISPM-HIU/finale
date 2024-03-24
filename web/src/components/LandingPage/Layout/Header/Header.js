import React from "react";
import { Link } from "react-router-dom";
// import {logo} from "./images/logo.jpeg"

const Header = () => {
  return (
    <header class="default-header">
      <nav className="navbar navbar-expand-lg  navbar-dark">
        <div className="container">
          <Link className="navbar-brand" >
          <span className="cl-span">
            <strong>
            Smart 
            </strong>
          </span>
            
            <span>Home</span>  
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="lnr lnr-menu"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end align-items-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li>
                <Link>Accueil</Link>
              </li>
              <li>
                <Link >Fonctionnalité</Link>
              </li>
              <li>
                <Link >Avantages</Link>
              </li>
              <li>
                <Link >Exploration 3D</Link>
              </li>
              {/* <li>
                <Link to="courses.html">Commandes gestuelles</Link>
              </li> */}
              {/* <li className="dropdown">
                <Link className="dropdown-toggle" to="#" data-toggle="dropdown">
                  Pages
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="elements.html">
                    Elements
                  </Link>
                  <Link className="dropdown-item" to="course-details.html">
                    Course Details
                  </Link>
                </div>
              </li>
              <li className="dropdown">
                <Link className="dropdown-toggle" to="#" data-toggle="dropdown">
                  Blog
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="blog-home.html">
                    Blog Home
                  </Link>
                  <Link className="dropdown-item" to="blog-single.html">
                    Blog Details
                  </Link>
                </div>
              </li> */}

              {/* <li>
                <Link to="contacts.html">Commandes vocales</Link>
              </li> */}
              {/* <li>
                <button className="search">
                  <span className="lnr lnr-magnifier" id="search"></span>
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
