import React, { FC, ReactNode, MouseEvent } from "react";
import needImage from "../../../../../public/images/blockChain/DeFi/Why-choose-us.jpg";
import Image, { StaticImageData } from "next/image";
import AnimatedComponentLeft from "@/components/home/animationLeft";
interface WhyCoosUSProps { }

type imageList = {
  image: StaticImageData;
};
const imageData: imageList = { image: needImage };

const WhyCoosUS: FC<WhyCoosUSProps> = () => {
  console.log(imageData);
  return (
    <div className="py-5">
      <div className=" flex flex-wrap md:flex-nowrap gap-5 md:gap-10 lg:gap-20 justify-center py-16 items-start">
        <AnimatedComponentLeft>
          <div>
            <Image
              src={imageData.image.src}
              alt=""
              width={330}
              height={270}
              className="w-full  md:w-[400px] lg:w-[500px] h-84 "
            />
          </div>
        </AnimatedComponentLeft>
        <div className="max-w-xl  px-5  ">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold pb-5 ">
            Why Choose Us??
          </p>
          <p className="md:text-lg text-md text-gray-800 leading-6">
            Choose Bawdicsoft for your software needs! We're 
            experts in web development, blockchain, and AI.
             Our team is skilled and agile, dedicated to tailored 
             solutions just for you. We focus on security and compliance 
             to keep your applications safe. Your success is our top priority.
              We work closely with you to exceed your expectations. Experience 
              innovation, reliability, and excellence with Bawdicsoft. Every line 
              of code is crafted to help your business grow forward!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyCoosUS;
