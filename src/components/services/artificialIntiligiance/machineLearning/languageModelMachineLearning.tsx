import React, { FC, ReactNode, MouseEvent } from "react";
// import needImage from "../../../../public/images/webApplication/backend.jpg";
import Image, { StaticImageData } from "next/image";
import AnimatedComponentLeft from "@/components/home/animationLeft";
interface LanguageModelSectionMachineLearningProps {}

type imageList = {
  image: StaticImageData;
};
// const imageData: imageList = { image: needImage };

const LanguageModelSectionMachineLearning: FC<
  LanguageModelSectionMachineLearningProps
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
          Deep Learning and Neural Networks
          </p>
          <p className="text-md  text-white leading-6">
          Unlock intelligence with Us. Our deep learning expertise covers image recognition, natural language processing, speech recognition, and unique neural network architectures. Defining digital possibilities, we increase visual understanding and communication coherently.
.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LanguageModelSectionMachineLearning;
