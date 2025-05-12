import React from "react";
import Img1 from "../../assets/hero/collection4.jpg";
import Img2 from "../../assets/hero/collection5.jpg";
import Img3 from "../../assets/hero/collection6.jpg"; // Corrigir duplicação de importação
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Chaveirinho Ceva",
    rating: 5.0,
    color: "Amarelo",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Chaveirinho Hamburguer",
    rating: 4.5,
    color: "Cinza",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Chaveirinho Estrela",
    rating: 4.7,
    color: "Laranja",
    aosDelay: "400",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12 flex justify-center items-center">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Nossos Chaveirinhos
          </h1>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 text-center flex flex-col items-center justify-center" // Certificando-se de que o contêiner está centralizado
              >
                <div className="flex justify-center items-center h-[250px] w-[250px]"> {/* Garantindo centralização */}
                  <img
                    src={data.img}
                    alt=""
                    className="h-full w-full object-contain rounded-md" // Ajustando para centralizar e manter proporção
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex justify-center items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;