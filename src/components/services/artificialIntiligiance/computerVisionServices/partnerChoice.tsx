import React, { FC, ReactNode, MouseEvent } from "react";
import needImage from "../../../../../public/images/blockChain/NFT/nftMarketPlace/partnerChoiseimg.webp";
import Image, { StaticImageData } from "next/image";
import AnimatedComponentLeft from "@/components/home/animationLeft";
interface partnerChoiceSectionComputerVisionProps { }

type imageList = {
  image: StaticImageData;
};
const imageData: imageList = { image: needImage };

const PartnerChoiceSectionComputerVision: FC<
  partnerChoiceSectionComputerVisionProps
> = () => {
  console.log(imageData);
  return (
    <div className="flex justify-center">
      <div className="grid max-w-7xl grid-cols-1 md:grid-cols-2  md:px-16  gap-0 md:gap-10  py-8">
        <AnimatedComponentLeft>
          <div>
            <Image
              src={imageData.image.src}
              alt=""
              width={430}
              height={470}
              className="w-full  h-84 "
            />
          </div>
        </AnimatedComponentLeft>
        <div className="  px-5  ">
          <p className="font-bold text-2xl md:text-3xl lg:text-4xl pb-8">
            Partner of Choice
          </p>
          <p className="text-md text-gray-800 leading-6">
            Choose Bawdicsoft for your software needs! We're experts in web development, blockchain, and AI. Our team is skilled and agile, dedicated to tailored solutions just for you. We focus on security and compliance to keep your applications safe. Your success is our top priority. We work closely with you to exceed your expectations. Experience innovation, reliability, and excellence with Bawdicsoft. Every line of code is crafted to help your business grow forward!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnerChoiceSectionComputerVision;
