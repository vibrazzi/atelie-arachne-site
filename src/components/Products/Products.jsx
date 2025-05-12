import React from "react";
import { FaSpider } from "react-icons/fa";
import Img1 from "../../assets/hero/collection4.jpg";
import Img2 from "../../assets/hero/collection5.jpg";
import Img3 from "../../assets/hero/collection6.jpg";
import Img4 from "../../assets/hero/collection2.jpg";
import Img5 from "../../assets/hero/collection.jpg";

const ProductsData = [
  { id: 1, img: Img1, title: "Chaveirinho Ceva" },
  { id: 2, img: Img2, title: "Chaveirinho Hamburguer" },
  { id: 3, img: Img3, title: "Chaveirinho Estrela" },
  { id: 4, img: Img4, title: "Chaveirinho Lua e Estrela" },
  { id: 5, img: Img5, title: "Chaveirinho Coelhinho" },
];

const Products = () => (
  <div className="mt-18 mb-12">
    <div className="container">
      <div className="text-center mb-16 max-w-[600px] mx-auto">
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Nossos Chaveirinhos
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
        {ProductsData.map(({ id, img, title }) => (
          <div
            key={id}
            data-aos="fade-up"
            className="space-y-3 text-center"
          >
            <img
              src={img}
              alt={title}
              className="h-[220px] w-[250px] object-cover rounded-md"
            />
            <div>
              <h3 className="font-semibold">{title}</h3>
              <div className="flex justify-center items-center gap-1">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <FaSpider key={index} style={{ color: "#800080" }} />
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Products;