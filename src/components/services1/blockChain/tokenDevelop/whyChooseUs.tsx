import React, { FC, ReactNode, MouseEvent } from "react";
import needImage from "../../../../../public/images/blockChain/TokenExcahge/whychoose.jpg";
import Image, { StaticImageData } from "next/image";
import AnimatedComponentLeft from "@/components/home/animationLeft";
interface ChooseSectionProps { }

type imageList = {
  image: StaticImageData;
};
const imageData: imageList = { image: needImage };

const ChooseSection: FC<ChooseSectionProps> = () => {
  console.log(imageData);
  return (
    <div className="flex justify-center items-center">
      <div className=" grid grid-cols-1 gap-5  md:grid-cols-2    py-16">
        <AnimatedComponentLeft>
          <div>
            <Image
              src={imageData.image.src}
              alt=""
              width={430}
              height={400}
              className=" w-full h-60 md:w-[500px] md:h-96  "
            />
          </div>
        </AnimatedComponentLeft>
        <div className="max-w-lg lg:max-w-lg  pt-10 px-5  md:pt-5 ">
          <p className="mb-4 text-3xl font-semibold tracking-tight leading-7 md:text-3xl lg:text-4xl ">
            Why Choose Us?
          </p>
          <p className="text-md text-gray-800 leading-6">
            Choose Bawdicsoft for your software needs! We're experts in web development, blockchain, and AI. Our team is skilled and agile, dedicated to tailored solutions just for you. We focus on security and compliance to keep your applications safe. Your success is our top priority. We work closely with you to exceed your expectations. Experience innovation, reliability, and excellence with Bawdicsoft. Every line of code is crafted to help your business grow forward!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseSection;
