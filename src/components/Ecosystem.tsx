import { blockchainConstants, dapps, partners } from "@/constants";
import Image from "next/image";
import Slider from "react-slick";

const Ecosystem = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    slickPlay: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          autoplaySpeed: 3000,
        },
      },
    ],
  };
  return (
    <div className="relative py-12">
      <div className="flex flex-col items-center gap-3 py-4 sm:gap-5">
        <h2 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
          Our Ecosystem
        </h2>
        <div className="orange-line lg:w-[25rem]"></div>
        <p className="text-sm text-gray-300 md:text-lg md:font-semibold lg:text-xl">
          Uniting for a Thriving Ecosystem
        </p>
        <div className="py-6">
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-2xl font-semibold lg:text-3xl">
              Blockchain We Are Live On
            </h2>
            <div className="orange-line"></div>
          </div>
          <div className="my-5 w-screen lg:mx-auto lg:w-[80vw]">
            <Slider {...settings}>
              {blockchainConstants.map((item) => (
                <div
                  key={item}
                  className="flex h-[8rem] items-center justify-center p-4"
                >
                  <Image
                    src={item}
                    alt="backer"
                    width={150}
                    height={150}
                    className="h-28 w-28 object-contain lg:h-36 lg:w-36"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="py-6">
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-2xl font-semibold lg:text-3xl">
              dApps on Create Protocol
            </h2>
            <div className="orange-line"></div>
          </div>
          <div className="my-5 w-screen lg:mx-auto lg:w-[80vw]">
            <Slider {...settings}>
              {dapps.map((item) => (
                <div
                  key={item}
                  className="flex h-[8rem] items-center justify-center p-4"
                >
                  <Image
                    src={item}
                    alt="backer"
                    width={150}
                    height={150}
                    className="h-28 w-28 object-contain lg:h-36 lg:w-36"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="py-6">
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-2xl font-semibold lg:text-3xl">Partners</h2>
            <div className="orange-line"></div>
          </div>
          <div className="my-5 w-screen lg:mx-auto lg:w-[80vw]">
            <Slider {...settings}>
              {partners.map((item) => (
                <div
                  key={item}
                  className="flex h-[8rem] items-center justify-center p-4"
                >
                  <Image
                    src={item}
                    alt="backer"
                    width={150}
                    height={150}
                    className="h-28 w-28 object-contain lg:h-36 lg:w-36"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="bg-gradient left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 lg:h-[40rem] lg:w-[40rem]"></div>
    </div>
  );
};

export default Ecosystem;
