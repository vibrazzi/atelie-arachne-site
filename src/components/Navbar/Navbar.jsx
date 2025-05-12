import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Menu = [
  { id: 1, name: "Início", link: "#home" },
  { id: 2, name: "Chaveirinhos", link: "#products" },
  { id: 3, name: "Contatos", link: "#footer" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (link) => {
    setIsMenuOpen(false);
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error(`Seção não encontrada para o link: ${link}`);
    }
  };

  return (
    <nav
      className={`w-full top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-pretoProfundo/80 backdrop-blur-md" : "bg-pretoProfundo/40"
      }`}
      aria-label="Barra de Navegação"
    >
      <div className="container flex justify-between items-center py-4">
        {/* Logo */}
        <a href="#home" className="text-white text-2xl font-bold">
          {/* Logo ou Nome */}
        </a>

        {/* Menu */}
        <ul
          className={`fixed top-0 left-0 w-full h-full bg-pretoProfundo flex flex-col items-center justify-center gap-8 text-white text-lg transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } sm:static sm:flex sm:flex-row sm:translate-x-0 sm:bg-transparent sm:gap-4`}
        >
          {Menu.map(({ id, name, link }) => (
            <li key={id}>
              <button
                onClick={() => handleMenuClick(link)}
                className="relative group transition duration-300 text-center hover:text-gray-400"
                aria-label={`Ir para ${name}`}
              >
                {name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Botão de Menu Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-2xl sm:hidden"
          aria-label="Abrir menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
