import Developers from "./Developers";
import OneEngine from "./OneEngine";

const Product = () => {
  const cardData = [
    {
      num: "25k+",
      text: "Community",
    },
    {
      num: "15k+",
      text: "Creators Onboarded",
    },
    {
      num: "7+",
      text: "Countries Expanded",
    },
  ];
  return (
    <div className="relative pb-6 lg:pb-20">
      <div className="py-4 lg:flex lg:items-center lg:justify-center lg:gap-10 xl:mx-auto xl:w-[90%]">
        <div className="flex flex-col items-center gap-3 py-10 sm:gap-5 lg:w-2/5 lg:items-start xl:gap-8">
          <div className="flex flex-col items-center gap-3 lg:w-full lg:items-start">
            <h2 className="text-xl text-[#FFA28B]">Flagship Product</h2>
            <h2 className="text-3xl font-bold md:text-5xl lg:text-inherit 2xl:text-6xl">
              Creator Console
            </h2>
            <div className="orange-line lg:w-[18rem]"></div>
          </div>
          <video
            autoPlay
            loop
            muted
            src="/appvideo.mp4"
            width={100}
            height={100}
            className="mx-auto w-3/4 sm:w-1/2 md:w-1/3 lg:hidden"
          />
          {/* <Image
            src="/laptop-mobile-image.png"
            alt="product"
            width={100}
            height={100}
            className="mx-auto w-3/4 sm:w-1/2 md:w-1/3 lg:hidden"
          /> */}
          <p className="mx-auto w-3/4 text-justify md:text-lg lg:mx-0 lg:w-[90%] lg:text-xl">
            Master Dashboard powered by decentralised AI for Creators and Brands
            who wants to gain competitive edge over others through the most
            advanced & efficient NFT features. An average creator on Creator
            Console saves more than 60% of time and gets 92% more returns
            compared to other platforms in the market.
          </p>
          <a target="_blank" href="https://app.creatorconsole.com/">
            <button className="rounded-full border border-white px-8 py-3 text-sm text-white hover:cursor-pointer">
              Launch App
            </button>
          </a>
        </div>
        <div className="hidden flex-col items-start lg:flex lg:w-1/2">
          <video
            autoPlay
            loop
            muted
            src="/appvideo.mp4"
            width={100}
            height={100}
            className="w-[100%]"
          />
          {/* <img
            src="/laptop/laptop1.png"
            alt="product"
            width={100}
            height={100}
            className="w-full"
          />
          <div className="flex gap-3">
            <Image
              src="/laptop/laptop2.png"
              alt="product"
              width={100}
              height={100}
              className="w-1/2"
            />
            <Image
              src="/laptop/laptop3.png"
              alt="product"
              width={100}
              height={100}
              className="w-1/2"
            />
          </div> */}
        </div>
      </div>
      <Developers />
      <OneEngine />
      <div className="relative my-6 md:my-12 lg:mx-auto lg:flex lg:w-[90%] lg:items-center lg:justify-between lg:gap-10 xl:w-3/4">
        <div className="mx-auto flex w-3/4 flex-col items-center gap-5 sm:w-1/2 lg:mx-0 lg:w-2/5">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-center gap-2 rounded-lg border border-border-gray bg-[#0D0D0E] py-4 lg:py-6"
            >
              <h3 className="text-5xl font-black lg:text-4xl xl:text-5xl">
                {item.num}
              </h3>
              <p className="text-xl font-bold text-gray-400">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="hidden text-end lg:flex lg:w-2/5 lg:flex-col lg:gap-2">
          <p className="text-4xl font-bold lg:text-4xl xl:text-5xl">
            Join a thriving global community of talented creators, spanning
            across multiple countries.
          </p>
          <p className="ml-auto mr-0 w-3/4 text-gray-300 lg:text-lg lg:font-semibold">
            Be inspired and supportive community of creators
          </p>
          <p className="ml-auto mr-0 w-3/4 text-gray-300 lg:text-lg lg:font-semibold">
            Connect with individuals and grow together in our community
          </p>
        </div>
        <div className="bg-gradient bottom-10 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 lg:-right-[20rem] lg:left-auto lg:h-[50rem] lg:w-[50rem] lg:translate-x-0 "></div>
        {/* <div className="bg-gradient -top-32 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 lg:-left-[15rem] lg:h-[40rem] lg:w-[40rem] lg:translate-x-0"></div> */}
      </div>
      {/* <div className="bg-gradient bottom-10 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 lg:-right-20 lg:left-auto lg:top-56 lg:h-[50rem] lg:w-[50rem] lg:translate-x-0"></div> */}
      <div className="bg-gradient -top-32 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 lg:-left-56 lg:h-[50rem] lg:w-[50rem] lg:translate-x-0"></div>
    </div>
  );
};

export default Product;
