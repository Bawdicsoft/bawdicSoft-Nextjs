import React, { FC, ReactNode, MouseEvent } from "react";
// import needImage from "../../../../../../public/images/blockChain/NFT/nftDevelopmentImages/needImage.webp";
import Image, { StaticImageData } from "next/image";
import AnimatedComponentLeft from "@/components/home/animationLeft";
interface NeedNftProps { }

type imageList = {
  image: StaticImageData;
};
// const imageData: imageList = { image: needImage };

const NeedCustomDevelopment: FC<NeedNftProps> = () => {
  // console.log(imageData);
  return (
    <div className="bg-sky-950 flex justify-center">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2  md:px-16    py-16 ">
        <AnimatedComponentLeft>
          <div>
            <Image
              src={"/images/blockChain/NFT/nftDevelopmentImages/needImage.webp"}
              alt=""
              width={330}
              height={300}
              className="w-96 h-96 px-5 md:px-0 "
            />
          </div>
        </AnimatedComponentLeft>

        <div className=" pt-10 px-5  md:pt-5 ">
          <p className="mb-4 text-3xl font-semibold tracking-tight leading-7 text-white md:text-4xl lg:text-5xl ">
            Why and Where do you need NFTs?
          </p>
          <p className="text-md text-gray-200 leading-6">
            Choose Bawdicsoft for your software needs! We're experts in web development, blockchain, and AI. Our team is skilled and agile, dedicated to tailored solutions just for you. We focus on security and compliance to keep your applications safe. Your success is our top priority. We work closely with you to exceed your expectations. Experience innovation, reliability, and excellence with Bawdicsoft. Every line of code is crafted to help your business grow forward!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NeedCustomDevelopment;
