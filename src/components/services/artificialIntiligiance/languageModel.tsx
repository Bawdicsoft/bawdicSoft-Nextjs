import React, { FC, ReactNode, MouseEvent } from 'react';
import needImage from "../../../../public/images/webApplication/backend.jpg"
import Image, { StaticImageData } from 'next/image';
interface LanguageModelSectionProps { }

type imageList = {
    image: StaticImageData
}
const imageData: imageList = { image: needImage }

const LanguageModelSection: FC<LanguageModelSectionProps> = () => {
    console.log(imageData);
    return (
        <div className='flex justify-center items-center bg-sky-950 '>

       <div className='grid grid-cols-1 gap-5  md:grid-cols-2    py-16'>
        <div>
            <Image src={imageData.image.src} alt='' width={430} height={400} className=' w-full h-96 md:w-[500px] md:h-96  '/>
        </div>
        <div className='max-w-lg lg:max-w-lg  pt-10 px-5  md:pt-5 '>
    <p className='mb-4 text-3xl text-white  font-semibold tracking-tight leading-7 md:text-3xl lg:text-4xl '>Language Model (LLM) Skills</p>
    <p className='text-md text-gray-800 text-white leading-6'>Communicate clearly and intelligently through our Language Model (LLM) services. Leverage natural language processing, sentiment analysis, and more to redefine how you connect with your audience.</p>
        </div>
       </div>
        </div>

    );
};

export default LanguageModelSection;