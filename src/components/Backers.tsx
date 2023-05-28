import Image from "next/image";
import Slider from "react-slick";

const Backers = () => {
  const backers = [
    "/backers/binance.svg",
    "/backers/cogitent.svg",
    "/backers/polygon.svg",
    "/backers/family.svg",
  ];
  const advisors = [
    {
      image: "/advisors/advisor1.svg",
      name: "Michael Terpin",
      about: "Crypto OG, popularly known as Crypto Godfather (CNBC)",
    },
    {
      image: "/advisors/advisor4.svg",
      name: "Min Kim",
      about: "International Growth Lead, Canva",
    },
    {
      image: "/advisors/advisor8.svg",
      name: "Michael Onghai",
      about: "Serial Entrepreneur & Investor",
    },
    {
      image: "/advisors/advisor3.svg",
      name: "Grant Gunderson",
      about: "Web3 Advisor & Investor, Worked closely with Tim Draper",
    },
    {
      image: "/advisors/advisor7.svg",
      name: "Jason Fernandes",
      about: "Co-founder, AdLunam",
    },
    {
      image: "/advisors/advisor5.svg",
      name: "Kalyan Bannerjee",
      about: "Co-founder, Lumenci",
    },
    {
      image: "/advisors/advisor2.svg",
      name: "Abhimanyu Lamba",
      about: "Hack VC, Ex-CMO - Hedera, Polygon",
    },
    {
      image: "/advisors/advisor6.svg",
      name: "Bibin Babu",
      about: "CGO 5ire",
    },
    {
      image: "/advisors/advisor9.jpeg",
      name: "Peter Dolch",
      about: "Founder Aeon Foundry, Harvard & MIT Alumnus",
    },
    {
      image: "/advisors/advisor1.svg",
      name: "Lalit Mangal",
      about: "CEO Airmeet",
    },
  ];
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
      <div className="mx-auto flex w-[90%] flex-col items-center gap-5 py-10 text-center">
        <h2 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
          Backers and Advisors
        </h2>
        <div className="orange-line lg:w-[25rem]"></div>
        <p className="text-sm text-gray-400 lg:text-base">
          Create Protocol&apos;s journey is propelled by influential industry
          champions and strategic visionaries.
        </p>
      </div>
      <div className="flex flex-col items-center gap-5 py-10 md:mx-auto md:w-[90%] lg:gap-8 lg:pb-16 xl:w-3/4">
        <div className="flex flex-wrap justify-center gap-8">
          {backers.map((item) => (
            <div
              key={item}
              className="flex h-[8rem] items-center justify-center border border-gray-800 bg-[#0D0D0E] p-4 lg:h-[10rem] lg:px-8"
            >
              <Image
                src={item}
                alt="backer"
                width={120}
                height={120}
                className="w-[10rem]"
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
                className="flex h-[20rem] flex-col items-center justify-start border border-gray-800 bg-[#0D0D0E] py-3 text-center"
              >
                <Image
                  src={item.image}
                  alt="backer"
                  width={120}
                  height={120}
                  className="h-3/5 w-full object-cover"
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
            className="flex h-[20rem] flex-col items-center justify-start rounded-xl border border-gray-800 bg-[#0D0D0E] py-3 text-center"
          >
            <Image
              src={item.image}
              alt="backer"
              width={120}
              height={120}
              className="h-3/5 w-full object-cover"
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
