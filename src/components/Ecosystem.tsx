import {
  blockchainConstants,
  dapps,
  partners,
} from "@/constants/blockchainConstants";
import Image from "next/image";
import Slider from "react-slick";

const Ecosystem = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          autoplaySpeed: 3000,
        },
      },
    ],
  };
  return (
    <div className="relative py-12 lg:py-20">
      <div className="flex flex-col items-center gap-3 py-10 sm:gap-5">
        <h2 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
          Our Ecosystem
        </h2>
        <div className="orange-line lg:w-[25rem]"></div>
        <p className="text-sm text-gray-400 lg:text-base">
          Uniting for a Thriving Ecosystem
        </p>
        <div className="py-6">
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-2xl font-semibold lg:text-3xl">
              Blockchain We Are Live On
            </h2>
            <div className="orange-line"></div>
          </div>
          <div className="my-5 w-screen">
            <Slider {...settings}>
              {blockchainConstants.map((item) => (
                <div
                  key={item}
                  className="flex h-[8rem] items-center justify-center p-4"
                >
                  <Image src={item} alt="backer" width={150} height={150} />
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
          <div className="my-5 w-screen">
            <Slider {...settings}>
              {dapps.map((item) => (
                <div
                  key={item}
                  className="flex h-[8rem] items-center justify-center p-4"
                >
                  <Image src={item} alt="backer" width={150} height={150} />
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
          <div className="my-5 w-screen">
            <Slider {...settings}>
              {partners.map((item) => (
                <div
                  key={item}
                  className="flex h-[8rem] items-center justify-center p-4"
                >
                  <Image src={item} alt="backer" width={150} height={150} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;