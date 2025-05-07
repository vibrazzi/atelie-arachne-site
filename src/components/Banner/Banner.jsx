import MinimalLogo from "../../assets/spider-web.jpg"; // Substitua pelo novo logo minimalista
import { GrSecure } from "react-icons/gr";
import { FaBox, FaTruck } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="min-h-[600px] flex justify-center items-center py-16 sm:py-20 relative bg-black text-white">
      <div className="container relative z-10 px-8 sm:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 items-center">
          {/* Imagem promocional */}
          <div data-aos="zoom-in">
            <img
              src={MinimalLogo}
              alt="Identidade minimalista"
              className="max-w-[450px] sm:max-w-[500px] w-full mx-auto shadow-lg rounded-lg border-4 border-white hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Seção de detalhes */}
          <div className="flex flex-col justify-center gap-8 text-center sm:text-left">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-extrabold tracking-wide leading-tight"
            >
              Bem-vindo ao nosso Ateliê Arachne
            </h1>
            <p
              data-aos="fade-up"
              className="text-lg sm:text-xl text-gray-400 leading-8"
            >
              Produtos cuidadosamente selecionados, combinando qualidade e estilo com simplicidade.
            </p>

            {/* Benefícios personalizados */}
            <div className="flex flex-col gap-8">
              {[
                {
                  Icon: GrSecure,
                  text: "Segurança e qualidade garantidas",
                },
                {
                  Icon: FaBox,
                  text: "Design funcional e elegante",
                },
                {
                  Icon: FaTruck,
                  text: "Entrega rápida e confiável",
                },
              ].map(({ Icon, text }, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  className="flex items-center gap-6 hover:scale-105 transition-transform duration-300"
                >
                  <Icon className="text-5xl shadow-lg p-4 rounded-full bg-white text-black" />
                  <p className="text-lg sm:text-xl font-semibold text-gray-300">
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
