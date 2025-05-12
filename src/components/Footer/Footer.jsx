import React from "react";
import { FaInstagram, FaWhatsapp, FaSpider } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white py-10 "> {/* Alterado de py-6 para py-10 */}
      <div className="container flex flex-col items-center gap-6"> {/* Alterado gap-4 para gap-6 */}
        <h1 className="text-lg font-bold flex items-center gap-2">
          Faça seus pedidos aqui
          <FaSpider className="text-2xl text-purple-500" /> {/* Ícone de teia de aranha */}
        </h1>
        <div className="flex items-center gap-6">
          {/* Link para WhatsApp */}
          <a
            href="https://wa.me/553484407531?text=Olá,%20gostaria%20de%20efetuar%20um%20pedido%20de%20um%20chaveirinho!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-green-500 transition duration-300"
          >
            <FaWhatsapp className="text-2xl" />
            <span>WhatsApp</span>
          </a>
          {/* Link para Instagram */}
          <a
            href="https://instagram.com/arachne.atelie"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-pink-500 transition duration-300"
          >
            <FaInstagram className="text-2xl" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;