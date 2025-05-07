import PropTypes from "prop-types";
import { useState, useEffect, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = useCallback(() => {
    setOrderPopup((prev) => !prev);
  }, []);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
      once: true,
    });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen transition duration-300 ease-in-out">
      <Navbar handleOrderPopup={handleOrderPopup} />

      <main className="container mx-auto px-6 sm:px-8 lg:px-12 space-y-16 sm:space-y-20">
        <Hero handleOrderPopup={handleOrderPopup} />
        <TopProducts handleOrderPopup={handleOrderPopup} />
        <Banner />
      </main>

      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

App.propTypes = {
  handleOrderPopup: PropTypes.func,
};

export default App;
