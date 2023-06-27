import { testimonialsData } from "@/constants";
import Image from "next/image";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const bigSettings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "10px",
  };
  return (
    <div className="relative py-12 lg:py-20">
      <div className="flex flex-col items-center gap-5 py-8 lg:gap-3">
        <h2 className="text-center text-4xl font-bold lg:text-5xl xl:text-6xl">
          Testimonial
        </h2>
        <div className="orange-line lg:w-[25rem]"></div>
        <p className="text-sm text-gray-300 md:text-lg md:font-semibold lg:text-xl xl:text-2xl">
          What the Industry Leaders Speak About Us
        </p>
      </div>
      <div className="my-5 w-screen lg:hidden">
        <Slider {...settings}>
          {testimonialsData.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center px-4 sm:px-12"
            >
              <div className="relative mt-10 flex w-full justify-center">
                <Image
                  src="/testimonial/orange-blob-middle.svg"
                  alt="blob"
                  height="100"
                  width="100"
                  className="absolute -z-10 w-[90%] sm:w-[70%] md:w-[60%]"
                />
                <Image
                  src="/testimonial/black-blob-middle.svg"
                  alt="blob"
                  height="100"
                  width="100"
                  className="-z-10 w-[92%] sm:w-[72%] md:w-[62%]"
                />
                <div className="absolute -mt-10 flex flex-col items-center justify-center gap-2 sm:gap-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width="100"
                    height="100"
                    className="w-20"
                  />
                  <h2 className="text-lg font-semibold sm:text-xl">
                    {item.name}
                  </h2>
                  <p className="w-3/4 text-center text-sm">{item.title}</p>
                  <Image
                    src="/testimonial/quote.svg"
                    alt="quote"
                    width={30}
                    height={30}
                  />
                  <p className="w-3/5 text-center text-sm text-gray-300 sm:w-1/2 sm:text-base">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mx-auto hidden w-[90%] lg:block">
        <Slider {...bigSettings}>
          {testimonialsData.map((item) => (
            <div
              key={item.name}
              className="mt-20 flex flex-col items-center px-4 2xl:px-10 3xl:px-20"
            >
              <div className="relative flex w-full justify-center">
                <Image
                  src="/testimonial/orange-blob-middle.svg"
                  alt="blob"
                  height="100"
                  width="100"
                  className="absolute -z-10 w-[98%]"
                />
                <Image
                  src="/testimonial/black-blob-middle.svg"
                  alt="blob"
                  height="100"
                  width="100"
                  className="-z-10 w-full"
                />
                <div className="absolute -mt-10 flex flex-col items-center justify-center gap-1 xl:gap-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width="100"
                    height="100"
                    className="w-16 xl:w-20"
                  />
                  <h2 className="text-lg font-semibold xl:text-xl">
                    {item.name}
                  </h2>
                  <p className="w-3/4 text-center text-sm">{item.title}</p>
                  <Image
                    src="/testimonial/quote.svg"
                    alt="quote"
                    width={30}
                    height={30}
                  />
                  <p className="w-3/4 text-center text-sm text-gray-300 2xl:text-base">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="bg-gradient left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 lg:h-[50rem] lg:w-[50rem]"></div>
      <div className="bg-gradient -top-32 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 lg:h-[40rem] lg:w-[40rem]"></div>
    </div>
  );
};

export default Testimonial;
