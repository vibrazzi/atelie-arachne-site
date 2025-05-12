import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import BackToHome from "./components/BackToHome/BackToHome";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div
      className="bg-fundoClaro text-light duration-200"
      style={{
        backgroundImage: "url('/bground-body.png')", // Caminho atualizado para o diretório public
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backgroundBlendMode: "overlay",
      }}
    >
      <Navbar />
      <div id="home" className="section-spacing">
        <Banner />
      </div>
      <div id="products" className="section-spacing">
        <Hero />
      </div>
      <div className="section-spacing">
        <Products />
      </div>
      <div id="footer" className="section-spacing">
        <Footer />
      </div>
      <BackToHome />
    </div>
  );
};

export default App;
