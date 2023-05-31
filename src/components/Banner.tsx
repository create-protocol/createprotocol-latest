import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative">
      <Image
        src="/background.png"
        alt="background"
        width={100}
        height={100}
        className="h-[50vh] w-screen object-cover sm:h-[60vh] xl:h-[70vh]"
      />
      <div className="absolute left-1/2 top-1/2 flex w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-6 text-center sm:gap-8">
        <div className="orange-line lg:w-[25rem]"></div>
        <h2 className="text-4xl font-extrabold sm:text-5xl md:text-7xl xl:text-8xl">
          Future of Creation
        </h2>
        <p className="px-5 text-xl">
          The next gen AI Powered Web 3.0 Infra for dApps
        </p>
        <div className="orange-line lg:w-[25rem]"></div>
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/1cYRgLyKIcNozuZiCr7HdtnCQ97zeySLe9jk-SmDEWZI/viewform?edit_requested=true"
        >
          <button className="rounded-full bg-white px-6 py-2.5 text-sm font-bold text-black">
            Build On Create Protocol
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
