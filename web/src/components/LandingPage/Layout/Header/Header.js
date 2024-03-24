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
              <li className="text-white">
                <a href="#accueil">Accueil</a>
              </li>
              <li className="text-white">
                <a href="#function">Fonctionnalité</a>
              </li>
              <li className="text-white">
                <a href="#avantages">Avantages</a>
              </li>
              <li className="text-white p-1" style={{ backgroundColor: "#569bd5" }}>
                <a href="http://localhost:3000/dashboard" target="_blank">Commencer</a>
              </li>
        
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
