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
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="relative">
      <div className="flex flex-col items-center gap-3 py-10">
        <h2 className="text-2xl">What Sets Us Apart!</h2>
        <div className="orange-line"></div>
      </div>
      <div className="my-5">
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
      <div className="bg-gradient top-2 h-[10rem] w-[20rem]"></div>
    </div>
  );
};

export default SetsUsApart;
