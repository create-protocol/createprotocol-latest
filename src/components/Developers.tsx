import { developerData } from "@/constants";
import Image from "next/image";

const Developers = () => {
  return (
    <div className="relative py-12 lg:py-20">
      <div className="mx-auto flex w-[90%] flex-col items-center gap-5 py-4 text-center">
        <h2 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
          Developers Resource
        </h2>
        <div className="orange-line lg:w-[25rem]"></div>
        <p className="text-gray-300 md:text-lg md:font-semibold lg:text-xl">
          Everything you need to get started building on Create Protocol, all in
          one one place
        </p>
      </div>
      <div className="mx-auto flex flex-col items-center gap-5 rounded-lg border border-[#212123] bg-[#0d0d0e66] py-8 text-center lg:mb-6 lg:mt-10 lg:w-3/4 lg:gap-10 lg:py-16">
        <div className="mx-auto my-8 flex w-[90%] flex-col justify-center gap-10 lg:flex-row">
          {developerData.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-3 px-4 text-center"
            >
              <Image src={item.image} width={60} height={60} alt="contracts" />
              <h2 className="text-2xl font-semibold lg:text-3xl">
                {item.name}
              </h2>
              <div className="orange-line"></div>
              <p className="text-sm lg:w-3/4 lg:text-base">{item.p1}</p>
              <p className="text-sm lg:w-3/4 lg:text-base">{item.p2}</p>
              <p className="text-sm lg:w-3/4 lg:text-base">{item.p3}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="mt-2 rounded-full border border-white px-8 py-3 text-sm text-white hover:cursor-pointer">
            Build On Create Protocol
          </button>
        </div>
      </div>
      <div className="bg-gradient -top-32 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 lg:h-[40rem] lg:w-[40rem]"></div>
    </div>
  );
};

export default Developers;
