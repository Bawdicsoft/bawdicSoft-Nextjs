import React, { FC, ReactNode, MouseEvent } from "react";
// import needImage from "../../../../public/images/AI/machine.jpg"
import Image, { StaticImageData } from "next/image";
import AnimatedComponentRight from "@/components/home/animationRight";
interface MasterMachineSectionComputerVisionProps {}

type imageList = {
  image: StaticImageData;
};
// const imageData: imageList = { image: needImage }

const MasterMachineSectionComputerVision: FC<
  MasterMachineSectionComputerVisionProps
> = () => {
  // console.log(imageData);
  return (
    <div className=" flex justify-center items-center">
      <div className=" grid grid-cols-1 px-5 gap-5  md:grid-cols-2    py-16">
        <div className="max-w-lg lg:max-w-lg self-center  px-5   order-2 md:order-none">
          <p className="mb-4 text-2xl  font-semibold tracking-tight leading-7 md:text-3xl lg:text-4xl ">
          Visual Recognition Services          </p>
          <p className="text-md text-gray-900 leading-6">
          We are experts in visual recognition, we offer object detection for inventory management and image classification for smooth processes in content organization.
Our facial recognition ensures secure access while gesture recognition increases interactions in AR/VR-based games

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

export default MasterMachineSectionComputerVision;
