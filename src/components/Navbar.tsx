import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="flex justify-between px-4 py-4 md:px-8 md:py-6 xl:px-10">
      <Image src="/create-full-logo.svg" alt="logo" width={200} height={100} />
      <Image
        src={navbarOpen ? "/close-icon.svg" : "/hamburger-icon.svg"}
        alt="logo"
        width={navbarOpen ? 24 : 30}
        height={0}
        className={`z-50 md:hidden ${navbarOpen ? "fixed right-5 top-5" : ""}`}
        onClick={() => setNavbarOpen(!navbarOpen)}
      />
      <div className="hidden gap-8 md:flex">
        <a href="https://blog.createprotocol.org/" target="_blank">
          <button className="text-sm text-white underline-offset-2 hover:underline">
            Blogs
          </button>
        </a>
        <a
          href="https://create-protocol.gitbook.io/create-protocol-whitepaper/"
          target="_blank"
        >
          <button className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-black">
            Whitepaper
          </button>
        </a>
      </div>
      <div
        // the navbar should stay hidden on top and then should slide down when the hamburger icon is clicked with a transition
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
