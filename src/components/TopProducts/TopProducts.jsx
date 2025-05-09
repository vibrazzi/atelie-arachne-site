import PropTypes from "prop-types";
import Img1 from "../../assets/hero/collection.png";
import Img2 from "../../assets/hero/collection5.jpg";
import Img3 from "../../assets/hero/collection6.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Produto Premium",
    description: "Design sofisticado e qualidade superior para o seu dia a dia.",
  },
  {
    id: 2,
    img: Img2,
    title: "Produto Elegante",
    description: "Estilo minimalista que combina com qualquer ocasião.",
  },
  {
    id: 3,
    img: Img3,
    title: "Produto Exclusivo",
    description: "Detalhes únicos para destacar sua personalidade.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <section id="top-products" className="my-20 relative">
      <div className="container relative z-10 px-6 sm:px-12">
        {/* Cabeçalho */}
        <div className="text-center mb-16 max-w-[600px] mx-auto">
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl font-extrabold tracking-wide text-white"
            aria-label="Produtos em Destaque"
          >
            Produtos em Destaque
          </h1>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {ProductsData.map(({ id, img, title, description }) => (
            <div
              key={id}
              data-aos="zoom-in"
              className="group overflow-hidden rounded-2xl shadow-lg transform transition duration-300 bg-black text-white hover:bg-gray-800"
              aria-label={`Produto: ${title}`}
            >
              {/* Imagem */}
              <div className="h-[240px] flex justify-center items-center bg-white">
                <img
                  src={img}
                  alt={title}
                  className="max-w-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Informações */}
              <div className="p-8 text-center">
                {/* Estrelas */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-gray-400 group-hover:text-yellow-400 transition duration-300"
                    />
                  ))}
                </div>

                <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
                <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-200 transition duration-300 line-clamp-2">
                  {description}
                </p>

                {/* Botão */}
                <button
                  className="mt-6 py-3 px-8 rounded-lg font-semibold tracking-wide transition duration-300 focus:outline-none focus:ring-2 bg-white text-black hover:bg-black hover:text-white focus:ring-gray-500"
                  onClick={handleOrderPopup}
                  aria-label={`Encomendar o produto: ${title}`}
                >
                  Comprar Agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// PropTypes para validação
TopProducts.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};

export default TopProducts;
