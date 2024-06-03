import React, { FC, ReactNode, MouseEvent } from "react";
// import heroImage from "../../../../../../public/images/blockChain/NFT/nftMarketPlace/heroSection.png";
import { StaticImageData } from "next/image";
interface HeroSectionProps {}

type imageList = {
  image: StaticImageData;
};
// const imageData: imageList = { image: heroImage };

const HeroSectionResponsiveWebApp: FC<HeroSectionProps> = () => {
  // console.log(imageData);
  return (
    <section
      className=" pt-32 md:pt-30 lg:pt-0 bg-center bg-cover bg-no-repeat  bg-gray-500 bg-blend-multiply"
      style={{
        backgroundImage: `url(/images/ServicesPagesCoverImages/responsive-web-.png)`,
        height: "calc(100vh - 48px)",
      }}
    >
      <div className="px-4 max-w-7xl mx-auto flex flex-col items-center justify-center text-center  lg:pt-44">
        <h1 className="mb-4 text-4xl max-w-4xl font-bold tracking-tight leading-none text-white md:text-6xl lg:text-7xl -ml-30">
        Responsive Web Apps
        </h1>
        <p className="mb-8  md:text-lg font-normal text-gray-300 lg:text-xl sm:px-16 ">
        coherent on Every Screen: Uplift User Experience with Our Responsive Web App Solutions
        </p>
      </div>
    </section>
  );
};

export default HeroSectionResponsiveWebApp;
