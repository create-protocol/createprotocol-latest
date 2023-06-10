import { eventData1, eventData2 } from "@/constants";
import Image from "next/image";
import Slider from "react-slick";
import EventsBigLayout from "./EventsBigLayout";

const GlobalStage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="relative py-6 lg:py-20">
      <div className="flex flex-col items-center gap-5 py-8 text-center">
        <h2 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
          Create Protocol at Global Stage
        </h2>
        <div className="orange-line lg:w-[25rem]"></div>
        <p className="text-sm text-gray-300 md:text-lg md:font-semibold lg:text-xl">
          With our IRL event IP Creatorism we have gained millions of eyeballs
          globally
        </p>
      </div>
      <div className="my-6 w-screen lg:hidden">
        <Slider {...settings}>
          {eventData1.map((item) => (
            <div key={item.title} className="px-5 sm:px-20 md:px-32">
              <div className="flex h-full flex-col items-center gap-6 rounded-3xl border border-gray-800 bg-[#0D0D0E] p-6 py-6 text-center">
                <Image
                  src={item.image}
                  alt="logo"
                  width={100}
                  height={100}
                  className="h-3/4 w-full rounded-3xl object-cover sm:h-1/2"
                />
                <h2 className="text-3xl font-bold">{item.title}</h2>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="my-6 w-screen lg:hidden">
        <Slider {...settings}>
          {eventData2.map((item) => (
            <div key={item.title} className="px-5 sm:px-20 md:px-32">
              <div className="flex h-full flex-col items-center gap-6 rounded-3xl border border-gray-800 bg-[#0D0D0E] p-6 py-6 text-center">
                <Image
                  src={item.image}
                  alt="logo"
                  width={100}
                  height={100}
                  className="h-3/4 w-full rounded-3xl object-cover sm:h-1/2"
                />
                <h2 className="text-3xl font-bold">{item.title}</h2>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mx-auto hidden w-[90%] lg:block 2xl:w-3/4">
        <EventsBigLayout />
      </div>
      <div className="bg-gradient left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 lg:h-[40rem] lg:w-[40rem]"></div>
      <div className="bg-gradient -top-32 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2"></div>
    </div>
  );
};

export default GlobalStage;
