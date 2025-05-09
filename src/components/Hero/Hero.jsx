import PropTypes from "prop-types";
import Image1 from "../../assets/hero/collection.jpg";
import Image2 from "../../assets/hero/collection2.jpg";
import Image3 from "../../assets/hero/collection3.jpg";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Minimalismo e Exclusividade",
    description: "Design sofisticado que transmite elegância e simplicidade.",
  },
  {
    id: 2,
    img: Image2,
    title: "Sofisticação Atemporal",
    description: "Cada peça cuidadosamente criada para um estilo único e refinado.",
  },
  {
    id: 3,
    img: Image3,
    title: "Beleza Essencial",
    description: "Minimalismo e inovação combinados para destacar sua personalidade.",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[500px] sm:min-h-[600px] flex justify-center items-center bg-black text-white mt-12 sm:mt-16"
    >
      <div className="container px-8 sm:px-16 pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map(({ id, img, title, description }) => (
            <div
              key={id}
              className="grid grid-cols-1 sm:grid-cols-2 items-center gap-12 sm:gap-24 text-center sm:text-left"
            >
              {/* Imagem centralizada */}
              <div className="flex justify-center items-center">
                <img
                  src={img}
                  alt={title}
                  className="max-w-[350px] sm:max-w-[450px] w-full object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Texto centralizado */}
              <div className="flex flex-col justify-center items-center sm:pl-8">
                <h1 className="text-3xl sm:text-5xl font-bold tracking-wide mt-4 sm:mt-6">
                  {title}
                </h1>
                <p className="text-base sm:text-lg leading-7 sm:leading-8 mt-4 opacity-90">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
