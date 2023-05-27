import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between px-4 py-4">
      <Image src="/create-full-logo.svg" alt="logo" width={200} height={100} />
      <Image src="/hamburger-icon.svg" alt="logo" width={30} height={0} />
    </div>
  );
};

export default Navbar;
