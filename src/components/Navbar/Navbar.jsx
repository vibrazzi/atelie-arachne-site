import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import MinimalLogo from "../../assets/spider-web.jpg"; // Atualize para um logo minimalista
import { FaBars, FaTimes } from "react-icons/fa";

const Menu = [
  { id: 1, name: "Início", link: "/#" },
  { id: 2, name: "Coleção", link: "/#services" },
  { id: 3, name: "Mais vendidos", link: "/#" },
  { id: 4, name: "Sobre nós", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 shadow-lg ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container flex justify-between items-center py-5 px-6 sm:px-12">
        {/* Logo */}
        <a href="#" aria-label="Home">
          <img
            src={MinimalLogo}
            alt="Brand Logo"
            className="h-12 hover:scale-110 transition-transform duration-300"
          />
        </a>

        {/* Menu Toggle (Mobile) */}
        <button
          className="text-2xl sm:hidden focus:outline-none transition-transform duration-300 hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Alternar Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu Responsivo */}
        <ul
          className={`absolute top-16 left-0 w-full bg-black sm:bg-transparent sm:static sm:flex flex-col sm:flex-row items-center gap-8 text-lg p-6 sm:p-0 transition-all duration-500 ${
            isMenuOpen
              ? "opacity-100 visible scale-100"
              : "opacity-0 invisible sm:opacity-100 sm:visible sm:scale-100"
          }`}
        >
          {Menu.map(({ id, name, link }) => (
            <li key={id}>
              <a
                href={link}
                className="relative group transition duration-300 hover:text-gray-400"
                aria-label={name}
              >
                {name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Botão de Ação */}
        <button
          onClick={handleOrderPopup}
          className="relative bg-white text-black py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hidden sm:block group"
          aria-label="Ver mais produtos"
        >
          <span className="absolute inset-0 bg-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative z-10">Explorar</span>
          <span className="absolute inset-0 border-2 border-transparent rounded-full group-hover:border-black animate-pulse"></span>
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};

export default Navbar;
