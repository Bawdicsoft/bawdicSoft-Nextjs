import React, { FC, ReactNode, MouseEvent } from "react";
// import needImage from "../../../../public/images/AI/machine.jpg";
import Image, { StaticImageData } from "next/image";
import AnimatedComponentRight from "@/components/home/animationRight";
interface MasterMachineSectionFullStackProps { }

type imageList = {
  image: StaticImageData;
};
// const imageData: imageList = { image: needImage };

const MasterMachineSectionFullStack: FC<
  MasterMachineSectionFullStackProps
> = () => {
  // console.log(imageData);
  return (
    <div className=" flex justify-center items-center">
      <div className=" grid grid-cols-1 px-5 gap-5  md:grid-cols-2    py-16">
        <div className="max-w-lg lg:max-w-lg self-center  px-5   order-2 md:order-none">
          <p className="mb-4 text-2xl  font-semibold tracking-tight leading-7 md:text-3xl lg:text-4xl ">
            End-to-End Full Stack Solutions:          </p>
          <p className="text-md text-gray-900 leading-6">
            Experience comprehensive development with Us. Our full stack development services cover everything, from the user interface to server-side scripting. We coherently integrate technologies, ensuring your project is not just functional but strives in both frontend and backend aspects
          </p>
        </div>
        <AnimatedComponentRight>
          <div>
            <Image
              src={"/images/AI/machine.jpg"}
              alt=""
              width={430}
              height={400}
              className=" w-full h-60 md:w-[500px] md:h-96  order-1 md:order-none"
            />
          </div>
        </AnimatedComponentRight>
      </div>
    </div>
  );
};

export default MasterMachineSectionFullStack;
