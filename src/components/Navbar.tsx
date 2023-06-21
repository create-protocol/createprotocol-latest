import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="left-1/2 flex -translate-x-1/2 justify-between px-4 py-4 md:absolute md:z-10 md:mt-5 md:w-[90%] md:rounded-md md:bg-[#16161880] md:px-8 md:py-3 xl:px-10 xl:py-4">
      <Image
        src="/create-full-logo.svg"
        alt="logo"
        width={200}
        height={100}
        className="lg:w-[14rem]"
      />
      <Image
        src={navbarOpen ? "/close-icon.svg" : "/hamburger-icon.svg"}
        alt="logo"
        width={navbarOpen ? 24 : 30}
        height={0}
        className={`z-50 md:hidden ${navbarOpen ? "fixed right-5 top-5" : ""}`}
        onClick={() => setNavbarOpen(!navbarOpen)}
      />
      <div className="hidden gap-8 md:flex md:items-center lg:gap-12">
        <a href="https://blog.createprotocol.org/" target="_blank">
          <button className="text-sm text-white underline-offset-2 hover:underline lg:text-base">
            Blogs
          </button>
        </a>
        <a
          href="https://create-protocol.gitbook.io/create-protocol-whitepaper/"
          target="_blank"
        >
          <button className="bg-button rounded-full px-4 py-1.5 text-sm font-semibold text-black lg:px-5 lg:py-2 lg:text-base">
            Whitepaper
          </button>
        </a>
      </div>

      {/* Hamburger menu */}
      <div
        className={`${
          navbarOpen ? "translate-y-0" : "-translate-y-full"
        } fixed left-0 top-0 z-40 flex h-fit w-full flex-col items-center justify-center gap-8 bg-black bg-opacity-80 p-8 pt-20 transition-all duration-500 md:hidden`}
      >
        <a href="https://blog.createprotocol.org/" target="_blank">
          <button className="text-white underline-offset-2 hover:underline">
            Blogs
          </button>
        </a>
        <a
          href="https://create-protocol.gitbook.io/create-protocol-whitepaper/"
          target="_blank"
        >
          <button className="text-white underline-offset-2 hover:underline">
            Whitepaper
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
