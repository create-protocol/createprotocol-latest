import Image from "next/image";

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
    <div className="relative">
      <div className="lg:flex lg:items-center lg:justify-center lg:gap-10 lg:py-10 xl:mx-auto xl:w-[90%]">
        <div className="flex flex-col items-center gap-3 py-10 sm:gap-5 lg:w-2/5 lg:items-start xl:gap-8">
          <div className="flex flex-col items-center gap-3 lg:w-full lg:items-start">
            <h2 className="text-xl text-[#FFA28B]">Flagship Product</h2>
            <h2 className="text-3xl font-bold md:text-5xl">Creator Console</h2>
            <div className="orange-line lg:w-[18rem]"></div>
          </div>
          <Image
            src="/laptop-mobile-image.png"
            alt="product"
            width={100}
            height={100}
            className="mx-auto w-3/4 sm:w-1/2 md:w-1/3 lg:hidden"
          />
          <p className="mx-auto w-3/4 lg:w-full">
            A MASTER DASHBOARD under the Create Protocol Ecosystem, which is on
            a mission to save a creator/creative asset owner&apos;s time and
            money simplifying the deployment of powerful contracts owned by user
            in a simple templatised way making it easy to manage and distribute
            their new / existing creations to multiple dapps (marketplaces,
            nft-finance, games, metaverses) and maximise monetization and reach.
          </p>
          <a target="_blank" href="https://app.creatorconsole.com/">
            <button className="rounded-full border border-white px-8 py-2 text-xs text-white hover:cursor-pointer">
              Launch App
            </button>
          </a>
        </div>
        <div className="hidden lg:block lg:w-2/5">
          <Image
            src="/laptop-mobile-image.png"
            alt="product"
            width={100}
            height={100}
            className="mx-auto lg:w-3/4"
          />
        </div>
      </div>
      <div className="my-6 md:my-12 lg:mx-auto lg:flex lg:w-[90%] lg:items-center lg:justify-between lg:gap-10 xl:w-3/4">
        <div className="mx-auto flex w-3/4 flex-col items-center gap-5 sm:w-1/2 lg:mx-0 lg:w-2/5">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-center gap-2 border border-[#212123] bg-[#0D0D0E] py-4"
            >
              <h3 className="text-5xl font-black lg:text-4xl">{item.num}</h3>
              <p className="text-xl font-bold text-gray-400">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="hidden text-end lg:flex lg:w-2/5 lg:flex-col lg:gap-6">
          <p className="text-4xl font-bold">
            Join a thriving global community of talented creators, spanning
            across multiple countries.
          </p>
          <p className="ml-auto mr-0 w-3/4 text-xs text-[#666666]">
            Be part of a diverse and supportive community of creators
          </p>
          <p className="ml-auto mr-0 w-3/4 text-xs text-[#666666]">
            Connect with inspiring individuals and grow together in our
            community
          </p>
        </div>
      </div>
      <div className="bg-gradient bottom-10 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 lg:-right-20 lg:left-auto lg:top-56 lg:h-[50rem] lg:w-[50rem] lg:translate-x-0"></div>
      <div className="bg-gradient -top-32 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 lg:-left-56 lg:h-[50rem] lg:w-[50rem] lg:translate-x-0"></div>
    </div>
  );
};

export default Product;
