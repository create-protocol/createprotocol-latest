import Image from "next/image";
import Slider from "react-slick";

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
  const eventData1 = [
    {
      title: "NFT NYC'23",
      description:
        "Hosted 3 day grand event.  major eyeballs - NAkamigos community, beeple, michael terpin. hackathon, gallery, art shows we had them all",
      image: "/event/nft_nyc.png",
    },
    {
      title: "Art Basel Miami'22",
      description:
        "hosted 3 day grand event at one of the most celebrated  art event in the world",
      image: "/event/art_basel.png",
    },
    {
      title: "CanEx Summit Jamaica",
      description:
        "Sponsored Summit & launched Seed to weed nft in partnership with bob marley foundation and peter hendrix foundation ",
      image: "/event/canex_summit.png",
    },
  ];
  const eventData2 = [
    {
      title: "Foodverse at Dubai World Trade Centre",
      description:
        "Presented foodverse, our dapp built on console through interactive experience center in the heart of dubai",
      image: "/event/foodverse.png",
    },
    {
      title: "Consensus'2023",
      description:
        "hosted a mega event at create mansion, austin with 1000s of guests, hundreds of industry experts, and tons of learnings for everyone.",
      image: "/event/consensus.png",
    },
  ];
  return (
    <div className="relative">
      <div className="flex flex-col items-center gap-5 py-10">
        <h2 className="text-center text-4xl font-bold">
          Create Protocol at Global Stage
        </h2>
        <div className="orange-line"></div>
      </div>
      <div className="my-6 w-screen">
        <Slider {...settings}>
          {eventData1.map((item) => (
            <div key={item.title} className="px-5">
              <div className="flex h-[32rem] flex-col items-center gap-6 rounded-3xl border border-gray-800 bg-[#0D0D0E] p-6 py-6 text-center">
                <Image
                  src={item.image}
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-full rounded-3xl object-cover"
                />
                <h2 className="text-3xl font-bold">{item.title}</h2>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="my-6 w-screen">
        <Slider {...settings}>
          {eventData2.map((item) => (
            <div key={item.title} className="px-5">
              <div className="flex h-[32rem] flex-col items-center gap-6 rounded-3xl border border-gray-800 bg-[#0D0D0E] p-6 py-6 text-center">
                <Image
                  src={item.image}
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-full rounded-3xl object-cover"
                />
                <h2 className="text-3xl font-bold">{item.title}</h2>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GlobalStage;
