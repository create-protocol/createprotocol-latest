import Image from "next/image";

const Footer = () => {
  return (
    <div className="mx-auto flex w-[90%] flex-col items-center gap-5 pb-5 pt-10 text-center">
      <Image src="/create-full-logo.svg" alt="logo" width={250} height={50} />
      <p>
        Create Protocol consists is a suite of contracts, SDKs, Packages, APIs,
        Plugins supporting multiple blockchains to power Dapps & Use cases.
      </p>
      <h3 className="text-3xl font-semibold text-gray-400">Information</h3>
      <p>Careers</p>
      <p>Blogs</p>
      <h3 className="text-3xl font-semibold text-gray-400">Support</h3>
      <p className="hover:cursor-pointer hover:underline">
        support@createprotocol.org
      </p>
      <h3 className="text-3xl font-semibold text-gray-400">Social Media</h3>
      <div className="flex -space-x-4">
        <Image
          src="/social_media/twitter.svg"
          alt="twitter"
          width={60}
          height={50}
        />
        <Image
          src="/social_media/telegram.svg"
          alt="telegram"
          width={60}
          height={50}
        />
        <Image
          src="/social_media/youtube.svg"
          alt="github"
          width={60}
          height={50}
        />
        <Image
          src="/social_media/discord.svg"
          alt="discord"
          width={60}
          height={50}
        />
        <Image
          src="/social_media/instagram.svg"
          alt="instagram"
          width={60}
          height={50}
        />
        <Image
          src="/social_media/linkedin.svg"
          alt="linkedin"
          width={60}
          height={50}
        />
      </div>
      <p className="border-t pt-6 text-sm">
        Copyright ©2023 Create Protocol. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
