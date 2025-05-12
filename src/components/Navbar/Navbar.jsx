import { useState, useEffect } from "react";

const Menu = [
  { id: 1, name: "Início", link: "#home" },
  { id: 2, name: "Chaveirinhos", link: "#products" },
  { id: 3, name: "Contato", link: "#footer" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (link) => {
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`w-full top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
      }`}
      aria-label="Barra de Navegação"
    >
      <div className="container flex justify-center items-center py-6">
        <a href="#home" className="text-white text-2xl font-bold"></a>
        <ul className="flex gap-8 text-white text-lg">
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
      </div>
    </nav>
  );
};

export default Navbar;
