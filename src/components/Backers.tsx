import { advisors, backers } from "@/constants";
import Image from "next/image";
import Slider from "react-slick";

const Backers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="relative py-12 lg:py-20">
      <div className="mx-auto flex w-[90%] flex-col items-center gap-5 py-4 text-center">
        <h2 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
          Backers and Advisors
        </h2>
        <div className="orange-line lg:w-[25rem]"></div>
        <p className="text-sm text-gray-300 md:text-lg md:font-semibold lg:text-xl">
          Create Protocol&apos;s journey is propelled by influential industry
          champions and strategic visionaries.
        </p>
      </div>
      <div className="flex flex-col items-center gap-5 py-10 md:mx-auto md:w-[90%] lg:gap-8 lg:pb-16 xl:w-3/4">
        <div className="flex flex-wrap justify-center gap-8">
          {backers.map((item) => (
            <div
              key={item}
              className="flex h-[8rem] items-center justify-center rounded-lg p-4 lg:h-[10rem] lg:px-8"
            >
              <Image
                src={item}
                alt="backer"
                width={120}
                height={120}
                className={`w-[10rem] ${
                  item === "/backers/cogitent.svg" && "h-[6rem]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="my-5 w-screen lg:hidden">
        <Slider {...settings}>
          {advisors.map((item) => (
            <div key={item.name} className="flex flex-col items-center px-3">
              <div
                key={item.name}
                className="flex h-[20rem] flex-col items-center justify-start border border-border-gray bg-[#0D0D0E] py-3 text-center"
              >
                <Image
                  src={item.image}
                  alt="backer"
                  width={120}
                  height={120}
                  className="h-3/5 w-full object-contain"
                />
                <div className="mt-4 flex flex-col items-center gap-2 px-4">
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-400">{item.about}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mx-auto hidden w-[90%] grid-cols-4 gap-6 lg:grid xl:grid-cols-5 xl:gap-8 2xl:w-3/4">
        {advisors.map((item) => (
          <div
            key={item.name}
            className="flex h-[20rem] flex-col items-center justify-start rounded-xl border border-border-gray bg-[#0D0D0E] py-3 text-center"
          >
            <Image
              src={item.image}
              alt="backer"
              width={120}
              height={120}
              className="h-3/5 w-full object-contain"
            />
            <div className="mt-4 flex flex-col items-center gap-2 px-4">
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-sm text-gray-400">{item.about}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gradient -top-32 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 lg:h-[40rem] lg:w-[40rem]"></div>
    </div>
  );
};

export default Backers;
