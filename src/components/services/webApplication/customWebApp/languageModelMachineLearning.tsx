import React, { FC, ReactNode, MouseEvent } from "react";
// import needImage from "../../../../public/images/webApplication/backend.jpg";
import Image, { StaticImageData } from "next/image";
import AnimatedComponentLeft from "@/components/home/animationLeft";
interface LanguageModelSectionCustomWebAppProps {}

type imageList = {
  image: StaticImageData;
};
// const imageData: imageList = { image: needImage };

const LanguageModelSectionCustomWebApp: FC<
  LanguageModelSectionCustomWebAppProps
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
          Scalable Solutions for Growth
          </p>
          <p className="text-md  text-white leading-6">
          We understand the evolving nature of businesses. Our web apps are scalable, adapting to your growth trajectory. From initial development to future expansions, we provide solutions that grow with your enterprise, ensuring preserved success in the digital landscape.

          </p>
        </div>
      </div>
    </div>
  );
};

export default LanguageModelSectionCustomWebApp;
