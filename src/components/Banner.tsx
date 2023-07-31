import { useEffect, useState } from "react";

const Banner = () => {
  const text = ['F', 'u', 't', 'u', 'r', 'e', ' ', 'o', 'f', ' ', 'C', 'r', 'e', 'a', 't', 'i', 'o', 'n']
  const [title, setTitle] = useState('F')
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex === (text.length-1)) {
        setAnimationComplete(true);
        clearInterval(interval);
      } else {
        currentIndex++;
        setTitle((prevTitle) => prevTitle + text[currentIndex]);
        console.log(currentIndex, text[currentIndex]);
      }
    }, 250); // Adjust the typing speed as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80vh] md:h-screen">
      <img
        src="/background.jpg"
        alt="background"
        width={100}
        height={100}
        className="h-[80vh] w-screen object-cover opacity-30 md:h-screen"
      />
      <div className="absolute left-1/2 top-[40%] flex w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-8 text-center sm:gap-8">
        <div className="orange-line lg:w-[25rem]"></div>
        <h2 className="text-4xl font-extrabold sm:text-5xl md:text-7xl xl:text-8xl">
          <span className={`block animate-typing ${title.length < 2 && 'invisible'}`}>{title}</span>
        </h2>
        <p className="px-5 text-xl">
          The next gen AI Powered Web 3.0 Infra for dApps
        </p>
        <div className="orange-line lg:w-[25rem]"></div>
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/1cYRgLyKIcNozuZiCr7HdtnCQ97zeySLe9jk-SmDEWZI/viewform?edit_requested=true"
        >
          <button className="bg-button rounded-full px-6 py-2.5 text-sm font-bold text-black lg:px-8 lg:py-3 lg:text-base xl:px-10 xl:text-lg">
            Build On Create Protocol
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
