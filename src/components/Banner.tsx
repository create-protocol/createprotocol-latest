import { useEffect, useState } from "react";

const text = " Create With Create Protocol";

const Banner = () => {
  const [title, setTitle] = useState("O");
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex === text.length - 1) {
        setAnimationComplete(true);
        clearInterval(interval);
      } else {
        currentIndex++;
        setTitle((prevTitle) => prevTitle + text[currentIndex]);
      }
    }, 100); // Adjust the typing speed as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80vh] md:h-screen">
      <video
        src="/background.mp4"
        width={100}
        height={100}
        className="h-[vh] w-screen object-cover  md:h-screen"
        autoPlay
        muted
        loop
      />
      <div className="absolute left-1/2 top-[50%] flex w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-8 text-center sm:gap-8">
        <div className="orange-line lg:invisible lg:w-[25rem]"></div>
        <h2 className="text-3xl font-black sm:text-4xl md:w-3/5 lg:text-5xl 2xl:w-3/5 2xl:text-6xl min-[1700px]:text-7xl">
          <span className={`block animate-typing`}>{title}</span>
        </h2>
        <p className="-mt-6 px-5 sm:w-3/4 lg:w-1/2 lg:text-lg xl:text-xl 2xl:text-2xl">
          We empower your dApps creation journey with unmatched speed &
          efficiency through the power of our Ecosystem and Decentralized AI
          advancement
        </p>
        <div className="orange-line lg:w-[25rem]"></div>
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/1cYRgLyKIcNozuZiCr7HdtnCQ97zeySLe9jk-SmDEWZI/viewform?edit_requested=true"
        >
          <button className="bg-button rounded-full px-6 py-2.5 text-sm font-bold text-black lg:px-8 lg:py-3 lg:text-base xl:px-10 xl:text-lg">
            Build With Create Protocol
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
