const StayTuned = () => {
  return (
    <div className="relative">
      <div className="mx-auto flex w-[90%] flex-col items-center gap-5 py-10 text-center md:py-20">
        <h2 className="text-4xl font-bold md:text-5xl">
          Stay Tuned Stay Updated
        </h2>
        <div className="orange-line md:w-[25rem]"></div>
        <p className="text-sm text-gray-400">
          Connecting You to the Latest Insights and Trends
        </p>
        <div className="my-4 flex items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-3/5 border border-white bg-transparent px-5 py-2 text-white"
          />
          <button className="border border-white px-5 py-2 uppercase text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default StayTuned;
