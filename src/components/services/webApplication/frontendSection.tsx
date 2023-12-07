import React, { FC, ReactNode, MouseEvent } from 'react';
import needImage from "../../../../public/images/webApplication/frontend.jpg"
import Image, { StaticImageData } from 'next/image';
interface FrontEndSectionProps { }

type imageList = {
    image: StaticImageData
}
const imageData: imageList = { image: needImage }

const FrontEndSection: FC<FrontEndSectionProps> = () => {
    console.log(imageData);
    return (
        <div className='bg-sky-950 flex justify-center items-center'>

       <div className=' grid grid-cols-1 gap-5  md:grid-cols-2    py-16'>
        <div className='max-w-lg lg:max-w-lg  pt-10 px-5  md:pt-5 order-2 md:order-none'>
    <p className='mb-4 text-3xl text-white font-semibold tracking-tight leading-7 md:text-3xl lg:text-4xl '>Frontend​</p>
    <p className='text-md text-gray-200 leading-6'>Converting designs into codes and mapping everything as the user would like it is the real magic that makes a website function with all its desired capabilities. We ensure that your user interface looks exactly like you want it while optimising speed and performance so its both functional and good looking.</p>
        </div>
        <div>
            <Image src={imageData.image.src} alt='' width={430} height={400} className=' w-full h-96 md:w-[500px] md:h-96  order-1 md:order-none'/>
        </div>
       </div>
        </div>

    );
};

export default FrontEndSection;