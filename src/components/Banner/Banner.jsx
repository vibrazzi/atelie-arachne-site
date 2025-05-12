import MinimalLogo from "../../assets/spider-web.jpg";
import { GrSecure } from "react-icons/gr";
import { FaBox, FaTruck, FaSpider } from "react-icons/fa";

const Banner = () => {
  return (
    <section
      id="banner"
      className="min-h-[600px] flex justify-center items-center py-12 sm:py-16 relative text-white"
    >
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
          <div data-aos="zoom-in">
            <img
              src={MinimalLogo}
              alt="Identidade minimalista"
              className="max-w-[300px] sm:max-w-[400px] w-full mx-auto shadow-lg rounded-lg border-4 border-gray-700 hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col justify-center items-center sm:items-start gap-6 text-center sm:text-left">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-extrabold tracking-wide leading-tight flex items-center gap-2"
            >
              Chaveirinhos de Tricô
              <FaSpider className="text-3xl text-red-800" />
            </h1>
            <p
              data-aos="fade-up"
              className="text-base sm:text-lg text-gray-400 leading-6 text-center sm:text-left"
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
                  className="flex items-center gap-4 justify-left sm:justify-start hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-red-800 rounded-full shadow-md">
                    <Icon className="text-2xl text-white" />
                  </div>
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
