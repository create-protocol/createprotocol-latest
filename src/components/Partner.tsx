const Partner = () => {
  const cardData = [
    {
      title: "Join The Dev Community",
      description: "Collaborate and evolve in our developer community.",
    },
    {
      title: "Explore Product Partnership",
      description:
        "Connect us if you have something that adds value to our ecosystem",
    },
    {
      title: "Feel Any Other Synergies?",
      description:
        "Share your ideas, let's create something extraordinary together.",
    },
  ];
  return (
    <div className="relative">
      <div className="flex flex-col items-center gap-5 py-10 xl:gap-3">
        <h2 className="text-center text-4xl font-bold sm:text-5xl xl:text-6xl">
          Partner With Us
        </h2>
        <div className="orange-line lg:w-[25rem]"></div>
        <p className="text-sm text-gray-400 lg:text-base">
          Let&apos;s build an incredible ecosystem step by step!
        </p>
        <div className="my-6 md:my-12 lg:mx-auto lg:flex lg:w-[90%] lg:items-center lg:justify-between lg:gap-10 xl:w-3/4">
          <div className="mx-auto flex w-3/4 flex-col items-center gap-5 sm:w-1/2 lg:mx-0 lg:w-2/5">
            {cardData.map((item) => (
              <div
                key={item.title}
                className="flex w-full flex-col items-center gap-3 border border-gray-800 bg-[#0D0D0E] p-8 text-center lg:items-start lg:text-start"
              >
                <h2 className="text-2xl font-semibold lg:underline">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="relative hidden text-end lg:flex lg:w-2/5 lg:flex-col lg:gap-6">
            <p className="text-4xl font-bold">
              “Partner with us to ignite innovation, amplify your impact, and
              shape a limitless future”
            </p>
            <p className="ml-auto mr-0 w-3/4 text-xs text-gray-300">
              Whether you&apos;re a visionary creator, a skilled developer, or
              have an ambitious project in mind, join forces with our platform
              to pave the way for extraordinary achievements
            </p>
            {/* <div className="orange-line absolute right-0 h-0 rotate-90 lg:w-full"></div> */}
          </div>
        </div>
      </div>
      <div className="bg-gradient bottom-10 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 lg:-right-20 lg:left-auto lg:h-[50rem] lg:w-[50rem] lg:translate-x-0 "></div>
      <div className="bg-gradient -top-32 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 lg:-top-64 lg:h-[40rem] lg:w-[40rem]"></div>
    </div>
  );
};

export default Partner;
