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
      <div className="flex flex-col items-center gap-5 py-10">
        <h2 className="text-center text-4xl font-bold">Partner With Us</h2>
        <div className="orange-line"></div>
        <p className="text-sm text-gray-400">
          Let&apos;s build an incredible ecosystem step by step!
        </p>
        <div className="flex w-[80%] flex-col items-center gap-5 py-10 md:flex-row">
          {cardData.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-3 border border-gray-800 bg-[#0D0D0E] p-8 text-center"
            >
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
