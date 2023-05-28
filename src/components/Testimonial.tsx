import Image from "next/image";
import Slider from "react-slick";

const Testimonial = () => {
  const testimonialsData1 = [
    {
      image: "/testimonial/6.svg",
      name: "Sandeep Nailwal",
      title: "Founder, Polygon",
      text: "Whoever is working with the team and creating DApps, wish you all the best. Keep building awesome applications and Dapps.",
    },
    {
      image: "/testimonial/2.svg",
      name: "Illia Polosukhin",
      title: "Founder, Near Protocol",
      text: "The team is doing a great job. They have full support from our ecosystem",
    },
    {
      image: "/testimonial/4.svg",
      name: "Raj A Kapoor",
      title: "Founder, India Blockchain Alliance",
      text: "Create Protocol’s offering for Creators is truly going to revolutionize the Web3 Creator Economy",
    },
  ];
  const testimonialsData2 = [
    {
      image: "/testimonial/3.svg",
      name: "Joyce Chow",
      title: "Digital Marketer",
      text: "Create Protocol elevates our creative process with user-friendly NFT minting and distribution. The future of digital entertainment",
    },
    {
      image: "/testimonial/5.svg",
      name: "Bharat Thakur",
      title: "Royal Artist",
      text: "Create Protocol empowers artists like me to effortlessly showcase and monetize my artwork as valuable NFTs. A game-changer",
    },
    {
      image: "/testimonial/1.svg",
      name: "Sunjeh Raja",
      title: "Founder & CEO - ICCA Dubai, Foodverse",
      text: "The Create Protocol team's intellectual prowess has made the collaborative journey of building Foodverse an enriching and highly rewarding experience",
    },
  ];
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
    <div className="relative py-12 lg:py-20">
      <div className="flex flex-col items-center gap-5 py-10 lg:gap-3">
        <h2 className="text-center text-4xl font-bold lg:text-5xl xl:text-6xl">
          Testimonial
        </h2>
        <div className="orange-line lg:w-[25rem]"></div>
        <p className="text-sm text-gray-400 lg:text-base">
          What the Industry Leaders Speak About Us
        </p>
      </div>
      <div className="my-5 w-screen lg:hidden">
        <Slider {...settings}>
          {testimonialsData1.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center px-4 sm:px-12"
            >
              <div className="flex h-[32rem] flex-col items-center gap-2 border border-gray-800 bg-[#0D0D0E] p-8 sm:h-[26rem]">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                />
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <p className="text-sm">{item.title}</p>
                <div className="relative mt-8 border-gray-800 bg-black p-5">
                  <p className="px-6 pt-4 text-center text-gray-400">
                    {item.text}
                  </p>
                  <Image
                    src="/testimonial/quote.svg"
                    alt="quote"
                    width={40}
                    height={40}
                    className="absolute -top-5 left-1/2 -translate-x-1/2"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="my-5 w-screen lg:hidden">
        <Slider {...settings}>
          {testimonialsData2.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center px-4 sm:px-12"
            >
              <div className="flex h-[32rem] flex-col items-center gap-2 border border-gray-800 bg-[#0D0D0E] p-8 sm:h-[26rem]">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                />
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <p className="text-sm">{item.title}</p>
                <div className="relative mt-8 border-gray-800 bg-black p-5">
                  <p className="px-6 pt-4 text-center text-gray-400">
                    {item.text}
                  </p>
                  <Image
                    src="/testimonial/quote.svg"
                    alt="quote"
                    width={40}
                    height={40}
                    className="absolute -top-5 left-1/2 -translate-x-1/2"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* create a grid of the data */}
      <div className="mx-auto hidden w-[90%] grid-cols-2 gap-10 lg:grid xl:grid-cols-3">
        {[...testimonialsData1, ...testimonialsData2].map((item) => (
          <div key={item.name} className="flex flex-col items-center">
            <div className="flex h-full flex-col items-center gap-2 border border-gray-800 bg-[#0D0D0E] p-5">
              <Image
                src={item.image}
                alt={item.name}
                width={120}
                height={120}
              />
              <h2 className="text-2xl font-semibold">{item.name}</h2>
              <p className="text-sm">{item.title}</p>
              <div className="relative mt-8 border-gray-800 bg-black p-5">
                <p className="px-6 pt-4 text-center text-gray-400">
                  {item.text}
                </p>
                <Image
                  src="/testimonial/quote.svg"
                  alt="quote"
                  width={40}
                  height={40}
                  className="absolute -top-5 left-1/2 -translate-x-1/2"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
