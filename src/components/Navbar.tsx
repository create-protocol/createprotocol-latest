import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between px-4 py-4 md:px-8 md:py-6 xl:px-10">
      <Image src="/create-full-logo.svg" alt="logo" width={200} height={100} />
      <Image
        src="/hamburger-icon.svg"
        alt="logo"
        width={30}
        height={0}
        className="md:hidden"
      />
      <div className="hidden gap-8 md:flex">
        <button className="text-sm text-white">Blogs</button>
        <button className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-black">
          Whitepaper
        </button>
      </div>
    </div>
  );
};

export default Navbar;
