import React from "react";
import Img1 from "../../assets/hero/collection4.jpg";
import Img2 from "../../assets/hero/collection5.jpg";
import Img3 from "../../assets/hero/collection6.jpg"; 
import Img4 from "../../assets/hero/collection2.jpg";
import Img5 from "../../assets/hero/collection.jpg";
import { FaSpider } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Chaveirinho Ceva",
  },
  {
    id: 2,
    img: Img2,
    title: "Chaveirinho Hamburguer",
  },
  {
    id: 3,
    img: Img3,
    title: "Chaveirinho Estrela",
  },
   {
    id: 4,
    img: Img4,
    title: "Chaveirinho Lua e Estrela",
  },
   {
    id: 5,
    img: Img5,
    title: "Chaveirinho Coelhinho",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
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
                className="space-y-3 text-center" // Adicionado text-center para centralizar os textos
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[250px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex justify-center items-center gap-1">
                   <FaSpider style={{ color: "#800080" }} />
                   <FaSpider style={{ color: "#800080" }} />
                   <FaSpider style={{ color: "#800080" }} />
                   <FaSpider style={{ color: "#800080" }} />
                   <FaSpider style={{ color: "#800080" }} />
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