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
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="relative">
      <div className="mx-auto flex w-[90%] flex-col items-center gap-5 py-10 text-center">
        <h2 className="text-4xl font-bold">Backers and Advisors</h2>
        <div className="orange-line"></div>
        <p className="text-sm text-gray-400">
          Create Protocol&apos;s journey is propelled by influential industry
          champions and strategic visionaries.
        </p>
      </div>
      <div className="flex flex-col items-center gap-5 py-10">
        <div className="flex flex-wrap justify-center gap-8">
          {backers.map((item) => (
            <div
              key={item}
              className="flex h-[8rem] items-center justify-center border border-gray-800 bg-[#0D0D0E] p-4"
            >
              <Image src={item} alt="backer" width={120} height={120} />
            </div>
          ))}
        </div>
      </div>
      <div className="my-5 w-screen">
        <Slider {...settings}>
          {advisors.map((item) => (
            <div key={item.name} className="flex flex-col items-center px-3">
              <div
                key={item.name}
                className="flex h-[20rem] flex-col items-center justify-center border border-gray-800 bg-[#0D0D0E] py-3 text-center"
              >
                <Image
                  src={item.image}
                  alt="backer"
                  width={120}
                  height={120}
                  className="w-full object-cover"
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
    </div>
  );
};

export default Backers;
