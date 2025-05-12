import MinimalLogo from "../../assets/spider-web.jpg"; // Substitua pelo novo logo minimalista
import { GrSecure } from "react-icons/gr";
import { FaBox, FaTruck } from "react-icons/fa";

const Banner = () => {
  return (
    <section
      id="banner"
      className="min-h-[600px] flex justify-center items-center py-12 sm:py-16 relative text-white"
      // 
    >
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
          {/* Imagem promocional */}
          <div data-aos="zoom-in">
            <img
              src={MinimalLogo}
              alt="Identidade minimalista"
              className="max-w-[300px] sm:max-w-[400px] w-full mx-auto shadow-lg rounded-lg border-4 border-gray-700 hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Seção de detalhes */}
          <div className="flex flex-col justify-center gap-6 text-center sm:text-left">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-extrabold tracking-wide leading-tight"
            >
              Chaveirinhos de Tricô Artesanais
            </h1>
            <p
              data-aos="fade-up"
              className="text-base sm:text-lg text-gray-400 leading-6"
            >
              Cada chaveirinho é uma obra de arte feita à mão, trazendo estilo e personalidade ao seu dia a dia.
            </p>
            <div className="flex flex-col gap-6">
              {[
                { Icon: GrSecure, text: "Qualidade garantida em cada peça" },
                { Icon: FaBox, text: "Design exclusivo e funcional" },
                { Icon: FaTruck, text: "Entrega rápida e segura" },
              ].map(({ Icon, text }, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  className="flex items-center gap-4 hover:scale-105 transition-transform duration-300"
                >
                  <Icon className="text-4xl shadow-lg p-3 rounded-full bg-gray-700 text-white" />
                  <p className="text-sm sm:text-base font-semibold text-gray-300">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
