import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
    return(
        <section>
            <Header />
            { children }
            <Footer />
        </section>
    )
}
export default Layout