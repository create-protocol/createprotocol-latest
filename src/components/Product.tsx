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
      <div className="flex flex-col items-center gap-3 py-10">
        <h2 className="text-xl text-[#FFA28B]">Flagship Product</h2>
        <h2 className="text-3xl font-bold">Creator Console</h2>
        <div className="orange-line"></div>
        <Image
          src="/laptop-mobile-image.png"
          alt="product"
          width={100}
          height={100}
          className="mx-auto w-3/4"
        />
        <p className="mx-auto w-3/4">
          A MASTER DASHBOARD under the Create Protocol Ecosystem, which is on a
          mission to save a creator/creative asset owner&apos;s time and money
          simplifying the deployment of powerful contracts owned by user in a
          simple templatised way making it easy to manage and distribute their
          new / existing creations to multiple dapps (marketplaces, nft-finance,
          games, metaverses) and maximise monetization and reach.
        </p>
        <div className="my-6 flex w-3/4 flex-col items-center gap-5 md:flex-row">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-center gap-2 border border-[#212123] bg-[#0D0D0E] py-4"
            >
              <h3 className="text-5xl font-black">{item.num}</h3>
              <p className="text-xl font-bold text-gray-400">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
