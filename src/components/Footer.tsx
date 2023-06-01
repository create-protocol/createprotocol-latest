import Image from "next/image";

const Footer = () => {
  const socialMedia = [
    {
      name: "twitter",
      image: "/social_media/twitter.svg",
      link: "https://twitter.com/CreateProtocol",
    },
    {
      name: "telegram",
      image: "/social_media/telegram.svg",
      link: "https://t.me/CreateProtocolOfficial",
    },
    {
      name: "youtube",
      image: "/social_media/youtube.svg",
      link: "https://www.youtube.com/channel/UCWAt7rkiZ5qTcYY6hx8yYiA",
    },
    {
      name: "discord",
      image: "/social_media/discord.svg",
      link: "https://discord.com/invite/M2xcC2Cex5",
    },
    {
      name: "instagram",
      image: "/social_media/instagram.svg",
      link: "https://www.instagram.com/create.protocol/",
    },
    {
      name: "linkedin",
      image: "/social_media/linkedin.svg",
      link: "https://www.linkedin.com/company/create-protocol/",
    },
  ];

  return (
    <>
      <div className="relative w-full bg-[#0d0d0eb3] pb-6 pt-10 lg:pt-20">
        <div className="mx-auto flex w-[90%] flex-col items-center gap-6 text-center lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:text-start xl:w-3/4">
          <div className="flex flex-col items-center gap-3 lg:w-2/5 lg:items-start">
            <Image
              src="/create-full-logo.svg"
              alt="logo"
              width={250}
              height={50}
              className="hover:cursor-pointer lg:w-[16rem]"
            />
            <p className="lg:w-3/4 lg:text-sm">
              The next gen AI powered Web 3.0 Infra. Create Protocol consists is
              a suite of contracts, SDKs, Packages, APIs, Plugins supporting
              multiple blockchains to power Dapps & Use cases.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 lg:w-[30%] lg:items-start">
            <h3 className="text-3xl font-semibold text-gray-400 lg:text-2xl">
              Information
            </h3>
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/1frTMbaaEqoBMN2xiP4M7Uivgb9B0b8xq4GJxG6F1iU8/viewform?edit_requested=true"
            >
              <p className="hover:underline">Careers</p>
            </a>
            <a href="https://blog.createprotocol.org/" target="_blank">
              <p className="hover:underline">Blogs</p>
            </a>
          </div>
          <div className="flex flex-col items-center gap-6 lg:w-[30%] lg:items-start">
            <div className="flex flex-col items-center gap-3 lg:items-start">
              <h3 className="text-3xl font-semibold text-gray-400 lg:text-2xl">
                Support
              </h3>
              <a href="mailto:support@createprotocol.org">
                <p className="hover:cursor-pointer hover:underline">
                  support@createprotocol.org
                </p>
              </a>
            </div>
            <div className="flex flex-col items-center gap-3 lg:items-start lg:gap-2">
              <h3 className="text-3xl font-semibold text-gray-400 lg:text-2xl">
                Social Media
              </h3>
              <div className="flex -space-x-4 lg:-ml-3 lg:-space-x-6">
                {socialMedia.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={50}
                      className="hover:cursor-pointer"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-gradient left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 lg:-left-40 lg:top-0 lg:h-[50rem] lg:w-[50rem] lg:translate-x-0 lg:translate-y-0"></div>
        </div>
      </div>
      <div className="pb-6">
        <div className="mb-6 h-[1px] w-screen bg-white"></div>
        <p className="text-center text-sm">
          Copyright ©2022 Create Protocol. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
