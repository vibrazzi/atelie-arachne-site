import MinimalLogo from "../../assets/spider-web.jpg";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white bg-black py-6">
      <div className="container flex flex-col sm:flex-row justify-between items-center gap-6 px-6 sm:px-12">
        {/* Logo e slogan */}
        <div className="flex items-center gap-3">
          <img
            src={MinimalLogo}
            alt="Logo da Empresa"
            className="w-10 h-10 rounded-lg shadow-md border-2 border-white"
          />
          <p className="text-sm text-gray-400 italic">
            Simplicidade e elegância.
          </p>
        </div>

        {/* Redes sociais */}
        <div className="flex gap-4">
          <a
            href="https://wa.me/553484407531?text=Ol%C3%A1%2C%20gostaria%20de%20encomendar%20um%20produto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-2xl transition-transform duration-300 hover:scale-110 hover:text-gray-400" />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram className="text-2xl transition-transform duration-300 hover:scale-110 hover:text-gray-400" />
          </a>
        </div>
      </div>

      {/* Rodapé final */}
      <div className="text-center text-gray-400 mt-4">
        <p>&copy; {new Date().getFullYear()} Ateliê Arachne Co.</p>
      </div>
    </footer>
  );
};

export default Footer;
