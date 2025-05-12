import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import BackToHome from "./components/BackToHome/BackToHome";

const App = () => {
  useEffect(() => {
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
      className="bg-purple-800 text-light duration-200"
      style={{
        backgroundImage: "url('/bground-body.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundBlendMode: "overlay",
      }}
    >
      <Navbar />
      <div id="home" className="my-16">
        <Banner />
      </div>
      <div id="products" className="my-16">
        <Hero />
      </div>
      <div className="my-16">
        <Products />
      </div>
      <div id="footer">
        <Footer />
      </div>
      <BackToHome />
    </div>
  );
};

export default App;
