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
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="relative">
      <div className="flex flex-col items-center gap-3 py-10">
        <h2 className="text-4xl font-bold">Our Ecosystem</h2>
        <div className="orange-line"></div>
        <p className="text-sm text-gray-400">
          Uniting for a Thriving Ecosystem
        </p>
        <div className="py-6">
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-2xl font-semibold">
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
            <h2 className="text-2xl font-semibold">dApps on Create Protocol</h2>
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
            <h2 className="text-2xl font-semibold">Partners</h2>
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
