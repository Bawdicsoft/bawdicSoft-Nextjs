import React, { FC, ReactNode, MouseEvent } from 'react';
import helpImage from "../../../../../../public/images/blockChain/NFT/nftDevelopmentImages/helpImage.webp"
import Image, { StaticImageData } from 'next/image';
interface HelpSectionsProps { }

type imageList = {
    image: StaticImageData
}
const imageData: imageList = { image: helpImage }

const HelpSections: FC<HelpSectionsProps> = () => {
    console.log(imageData);
    return (
       <div className=' md:mt-20 flex flex-wrap md:flex-nowrap gap-10 md:gap-20 justify-center py-16 items-center'>
        <div className='max-w-xl  px-5  md:pt-5 order-1 md:order-0'>
    <p className='mb-4 text-3xl font-semibold tracking-tight leading-7  md:text-4xl lg:text-5xl '>How we can help</p>
    <p className='text-md text-gray-800 leading-6'>Our team of expert developers specialize in the development of non-fungible tokens. We are constantly in the market to observe the latest trends and offer you full-stack services including the best scenario analysis and complete development of your NFT requirements. We offer the creation of standard or custom tokens for your digital art, collectables, gaming fashion or whatever tokens you require. Give us a call and we’ll take care of the rest for you.</p>
        </div>
        <div className='order-0 md:order-1'>
            <Image src={imageData.image.src} alt='' width={430} height={400} className='w-96 h-96 lg:w-[500px] lg:h-[500px] max-w-xl'/>
        </div>
       </div>

    );
};

export default HelpSections;