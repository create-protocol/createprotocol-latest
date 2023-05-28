import setsUsApartConstants from "@/constants/setsUsApartConstants";
import Image from "next/image";
import Slider from "react-slick";

const SetsUsApart = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="relative py-10 md:py-20 lg:-mt-10 lg:pt-0">
      <div className="mb-10 flex flex-col items-center gap-3 md:mb-16 lg:hidden">
        <h2 className="text-2xl">What Sets Us Apart!</h2>
        <div className="orange-line"></div>
      </div>
      <div className="my-5 lg:hidden">
        <Slider {...settings}>
          {setsUsApartConstants.map((item, index) => (
            <div key={index} className="">
              <div className="mx-auto flex w-3/4 flex-col items-center gap-3 text-center">
                <Image src={item.image} alt="logo" width={100} height={100} />
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="px-5">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden lg:mx-auto lg:flex lg:w-[90%] lg:flex-row lg:justify-center lg:gap-10 xl:w-3/4">
        {setsUsApartConstants.map((item, index) => (
          <div
            key={index}
            className="flex w-1/4 flex-col items-center gap-3 rounded-xl bg-[#201e1e47] p-6 text-center"
          >
            <Image src={item.image} alt="logo" width={60} height={60} />
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="bg-gradient top-2 h-[10rem] w-[20rem]"></div>
    </div>
  );
};

export default SetsUsApart;
