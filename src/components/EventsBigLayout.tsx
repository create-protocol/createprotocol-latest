import Image from "next/image";

const EventsBigLayout = () => {
  return (
    <div className="grid w-full grid-cols-4 grid-rows-2 gap-4 xl:gap-8 [&>*]:rounded-lg">
      <div className="row-span-2 bg-[#171717] p-6">
        <div className="grid grid-rows-3 gap-4 rounded-xl">
          <Image
            src="/eventsBig/consensus1.png"
            alt="consensus"
            width={100}
            height={100}
            className="row-span-2 h-full w-full object-cover"
          />
          <Image
            src="/eventsBig/consensus2.png"
            alt="consensus"
            width={100}
            height={100}
            className="h-full w-full object-cover"
          />
          <Image
            src="/eventsBig/consensus4.png"
            alt="consensus"
            width={100}
            height={100}
            className="h-full w-full"
          />
          <div className="my-2 space-y-4">
            <p className="text-3xl font-bold text-white">Consensus&apos;23</p>
            <p className="text-xs text-gray-400">
              hosted a mega event at create mansion, austin with 1000s of
              guests, hundreds of industry experts, and tons of learnings for
              everyone.
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2 grid grid-cols-2 grid-rows-1 gap-4 xl:gap-8">
        <div className="col-span-2 bg-[#171717] p-6 text-center">
          <div className="my-4 space-y-4">
            <p className="text-3xl font-bold uppercase text-white">
              nft nyc&apos;23
            </p>
            <p className="text-xs text-gray-400">
              Hosted 3 day grand event. major eyeballs - NAkamigos community,
              beeple, michael terpin. hackathon, gallery, art shows we had them
              all
            </p>
          </div>
          <div className="grid h-[20rem] grid-cols-3 grid-rows-2 gap-2">
            <Image
              src="/eventsBig/nyc1.png"
              alt="nyc"
              width={100}
              height={100}
              className="row-span-2 h-full w-full object-cover"
            />
            <Image
              src="/eventsBig/nyc2.png"
              alt="nyc"
              width={100}
              height={100}
              className="h-full w-full object-cover"
            />
            <Image
              src="/eventsBig/nyc3.jpg"
              alt="nyc"
              width={100}
              height={100}
              className="row-span-2 h-full w-full object-cover"
            />
            <Image
              src="/eventsBig/nyc4.png"
              alt="nyc"
              width={100}
              height={100}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="col-start-2 row-start-2 flex flex-col gap-2 bg-[#171717] p-6">
        <Image
          src="/eventsBig/basel.png"
          alt="basel"
          width={100}
          height={100}
          className="h-full w-full object-cover"
        />
        <div className="my-2 space-y-4">
          <p className="text-3xl font-bold text-white">Art Basel Miami’22</p>
          <p className="text-xs text-gray-400">
            hosted 3 day grand event at one of the most celebrated art event in
            the world
          </p>
        </div>
      </div>
      <div className="col-start-3 row-start-2 flex flex-col gap-2 bg-[#171717] p-6">
        <Image
          src="/eventsBig/jamaica.png"
          alt="jamaica"
          width={100}
          height={100}
          className="h-full w-full object-cover"
        />
        <div className="my-2 space-y-4">
          <p className="text-3xl font-bold text-white">CanEx Summit Jamaica</p>
          <p className="text-xs text-gray-400">
            Sponsored Summit & launched Seed to weed nft in partnership with bob
            marley foundation and Jimi hendrix foundation
          </p>
        </div>
      </div>
      <div className="col-start-4 row-span-2 row-start-1 flex flex-col gap-2 bg-[#171717] p-6">
        <Image
          src="/eventsBig/foodverse.png"
          alt="foodverse"
          width={100}
          height={100}
          className="h-full w-full object-cover"
        />
        <div className="my-2 space-y-4">
          <p className="text-3xl font-bold text-white">
            Foodverse at Dubai World Trade Centre
          </p>
          <p className="text-xs text-gray-400">
            Presented foodverse, our dapp built on console through interactive
            experience center in the heart of dubai
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsBigLayout;
