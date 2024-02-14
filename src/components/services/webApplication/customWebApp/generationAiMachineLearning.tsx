import React, { FC, ReactNode, MouseEvent } from "react";
// import needImage from "../../../../public/images/AI/generatinAi.webp";
import Image, { StaticImageData } from "next/image";
import AnimatedComponentRight from "@/components/home/animationRight";
interface GenerationAISectionCustomeWebAppProps { }

type imageList = {
  image: StaticImageData;
};
// const imageData: imageList = { image: needImage };

const GenerationAISectionCustomeWebApp: FC<
  GenerationAISectionCustomeWebAppProps
> = () => {
  // console.log(imageData);
  return (
    <div className="flex justify-center items-center">
      <div className=" grid grid-cols-1 gap-5 px-5  md:grid-cols-2    py-16">
        <div className="max-w-lg lg:max-w-lg  self-center  px-5   order-2 md:order-none ">
          <p className="mb-4 text-2xl  font-semibold tracking-tight leading-7 md:text-3xl lg:text-4xl ">
            Intuitive UX/UI Design          </p>
          <p className="text-md text-gray-800 leading-6">
            Experience the fusion of aesthetics and usability with Us. Our focus on instinctive UX/UI design ensures a joyful user journey. From smooth navigation to visually attractive interfaces, we create web apps that not only meet your functionality requirements but also captivate your audience.
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

export default GenerationAISectionCustomeWebApp;
