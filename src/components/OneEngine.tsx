import Image from "next/image";
import React from "react";

const OneEngine = () => {
  const engineData = [
    {
      image: "/engine/defi.svg",
      title: "DeFi",
    },
    {
      image: "/engine/metaverse.svg",
      title: "Metaverse",
    },
    {
      image: "/engine/music.svg",
      title: "Music",
    },
    {
      image: "/engine/dapps.svg",
      title: "Dapps",
    },
    {
      image: "/engine/gamefi.svg",
      title: "GameFi",
    },
    {
      image: "/engine/brand.svg",
      title: "Brand",
    },
    {
      image: "/engine/marketplace.svg",
      title: "Marketplace",
    },
    {
      image: "/engine/art.svg",
      title: "Art",
    },
  ];
  return (
    <div className="relative py-12 lg:py-20">
      <div className="mx-auto flex w-[90%] flex-col items-center gap-5 py-4 text-center">
        <h2 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
          One Engine Many Use Cases
        </h2>
        <div className="orange-line lg:w-[25rem]"></div>
        <p className="text-gray-300 md:text-lg md:font-semibold lg:text-xl">
          Uniting Diverse Use Cases with a Single Powerhouse
        </p>
      </div>
      <div className="mx-auto grid w-[90%] grid-cols-2 gap-6 py-6 md:grid-cols-4 lg:w-3/4 lg:gap-10 lg:py-10 xl:w-3/5 xl:gap-16 xl:py-20">
        {engineData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 rounded-xl bg-[#0D0D0E] bg-opacity-60 p-2 md:gap-4 md:p-4 lg:gap-6"
          >
            <Image src={data.image} alt={data.title} width={100} height={100} />
            <p className="font-semibold text-gray-300 lg:text-lg">
              {data.title}
            </p>
          </div>
        ))}
      </div>
      <div className="bg-gradient -top-32 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 lg:h-[40rem] lg:w-[40rem]"></div>
    </div>
  );
};

export default OneEngine;
