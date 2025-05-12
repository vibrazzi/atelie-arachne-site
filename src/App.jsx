import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products"; // Correção do caminho do componente
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import BackToHome from "./components/BackToHome/BackToHome"; // Importação do novo componente

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
    <div className="bg-fundoClaro dark:bg-fundoEscuro text-light dark:text-dark duration-200">
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
      <BackToHome /> {/* Adicionado o botão de voltar ao início */}
    </div>
  );
};

export default App;
