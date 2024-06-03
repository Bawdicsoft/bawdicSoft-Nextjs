import React, { FC, ReactNode, MouseEvent } from "react";
// import needImage from "../../../../public/images/AI/generatinAi.webp";
import Image, { StaticImageData } from "next/image";
import AnimatedComponentRight from "@/components/home/animationRight";
interface GenerationAISectionMachineLearningProps {}

type imageList = {
  image: StaticImageData;
};
// const imageData: imageList = { image: needImage };

const GenerationAISectionMachineLearning: FC<
  GenerationAISectionMachineLearningProps
> = () => {
  // console.log(imageData);
  return (
    <div className="flex justify-center items-center">
      <div className=" grid grid-cols-1 gap-5 px-5  md:grid-cols-2    py-16">
        <div className="max-w-lg lg:max-w-lg  self-center  px-5   order-2 md:order-none ">
          <p className="mb-4 text-2xl  font-semibold tracking-tight leading-7 md:text-3xl lg:text-4xl ">
          Machine Learning Applications Across Industries
          </p>
          <p className="text-md text-gray-800 leading-6">
          We strive to adapt machine learning for various industries. In finance, optimize risk assessment, healthcare benefits from personalized treatment plans. E-commerce gains an edge with effective pricing, and manufacturing grasps predictive maintenance for efficiency. Adaptive solutions transform sectors, steering success in the era of intelligent automation.

          </p>
        </div>
        <AnimatedComponentRight>
          <div className="order-1 md:order-none">
            <Image
              src={"/images/AI/generatinAi.webp"}
              alt=""
              width={430}
              height={400}
              className=" w-full h-60 md:w-[500px] md:h-96  "
            />
          </div>
        </AnimatedComponentRight>
      </div>
    </div>
  );
};

export default GenerationAISectionMachineLearning;
