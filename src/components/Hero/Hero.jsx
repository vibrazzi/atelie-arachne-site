import React from "react";
import Image1 from "../../assets/hero/collection3.jpg";
import Image2 from "../../assets/hero/collection2.jpg";
import Image3 from "../../assets/hero/collection.jpg";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Chaveirinhos Artesanais",
    description:
      "Descubra nossa coleção de chaveirinhos de tricô feitos à mão, perfeitos para presentear ou colecionar.",
  },
  {
    id: 2,
    img: Image2,
    title: "Feitos com Amor",
    description:
      "Cada chaveirinho é feito com cuidado e atenção aos detalhes, trazendo um toque especial ao seu dia.",
  },
  {
    id: 3,
    img: Image3,
    title: "Estilos Únicos",
    description:
      "Explore designs exclusivos que combinam criatividade e qualidade em cada peça.",
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] text-light duration-200">
      <div className="h-[700px] w-[700px] absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-[8]"></div>
      <div className="container mx-auto px-4 sm:px-8">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-base sm:text-lg text-light"
                  >
                    {data.description}
                  </p>
                </div>
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[250px] h-[250px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px] object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;