import React, { FC, ReactNode, MouseEvent } from "react";
// import needImage from "../../../../public/images/webApplication/backend.jpg"
import Image, { StaticImageData } from "next/image";
import AnimatedComponentLeft from "@/components/home/animationLeft";
interface LanguageModelSectionComputerVisonProps {}

type imageList = {
  image: StaticImageData;
};
// const imageData: imageList = { image: needImage }

const LanguageModelSectionComputerVision: FC<
  LanguageModelSectionComputerVisonProps
> = () => {
  // console.log(imageData);
  return (
    <div className="flex justify-center items-center bg-sky-950 ">
      <div className="grid grid-cols-1 gap-5  px-5 md:grid-cols-2    py-16">
        <AnimatedComponentLeft>
          <div>
            <Image
              src={"/images/webApplication/backend.jpg"}
              alt=""
              width={430}
              height={400}
              className=" w-full h-60 md:w-[500px] md:h-96  "
            />
          </div>
        </AnimatedComponentLeft>
        <div className="max-w-lg self-center lg:max-w-lg  pt-10 px-5   ">
          <p className="mb-4 text-2xl text-white  font-semibold tracking-tight leading-7 md:text-3xl lg:text-4xl ">
          Contextual Understanding
          </p>
          <p className="text-md  text-white leading-6">
          Going ahead from basic recognition, We focus on contextual understanding. Our image segmentation helps in medical diagnoses, scene understanding increases surveillance and 3D vision supports AR/VR experiences. Video analysis provides real-time insights for various industries.

          </p>
        </div>
      </div>
    </div>
  );
};

export default LanguageModelSectionComputerVision;
