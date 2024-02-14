import React, { FC, ReactNode, MouseEvent } from "react";
// import needImage from "../../../../public/images/AI/machine.jpg";
import Image, { StaticImageData } from "next/image";
import AnimatedComponentRight from "@/components/home/animationRight";
interface MasterMachineSectionResponsiveWebAppProps {}

type imageList = {
  image: StaticImageData;
};
// const imageData: imageList = { image: needImage };

const MasterMachineSectionResponsiveWebApp: FC<
  MasterMachineSectionResponsiveWebAppProps
> = () => {
  // console.log(imageData);
  return (
    <div className=" flex justify-center items-center">
      <div className=" grid grid-cols-1 px-5 gap-5  md:grid-cols-2    py-16">
        <div className="max-w-lg lg:max-w-lg self-center  px-5   order-2 md:order-none">
          <p className="mb-4 text-2xl  font-semibold tracking-tight leading-7 md:text-3xl lg:text-4xl ">
          Adaptive Design for Any Device
      </p>
          <p className="text-md text-gray-900 leading-6">
          Delight your users across devices with Us. Our responsive web app solutions adapt to various screen sizes, ensuring a consistent and user-friendly experience on desktops, tablets, and smartphones. Stay accessible, no matter the device.

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

export default MasterMachineSectionResponsiveWebApp;
