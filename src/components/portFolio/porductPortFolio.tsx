import Image from 'next/image';
import React, { FC, ReactNode, MouseEvent } from 'react';
import webDevelopmentImg from "../../../public/images/portFolio/Web-Application-Development.png"
import Block_ChainImg from "../../../public/images/portFolio/Block-Chain-Development.png"
import Cryptocurrency_ExchangeImg from "../../../public/images/portFolio/Cryptocurrency-Exchange-Platforms.png"
import DeFi_DevelopmentImg from "../../../public/images/portFolio/DeFi-Development.png"
import NFT_DevelopmentImg from "../../../public/images/portFolio/NFT-Development.png"
import NFT_Marketplace_DevelopmentImg from "../../../public/images/portFolio/NFT-Marketplace-Development.png"
import Token_DevelopmenImg from "../../../public/images/portFolio/Token-Development.png"
import Web_DevelopmentImg from "../../../public/images/portFolio/Web-Development_.png"

interface productSevicesProps { }


const ProductServices: FC<productSevicesProps> = () => {
    return (
        <div className='bg-white py-20 px-16 sm:px-32 lg:px-20'>
            <p className=' font-extrabold  text-2xl md:text-5xl text-center'>Product Portfolio</p>


            <div className='bg-white py-20  '>

                <div className='flex pt-5 justify-center sm:px-16 md:px-32 flex-wrap gap-32'>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <Image src={Web_DevelopmentImg} alt='' width={20} height={20} className='w-24 h-24  ' />
                        <p className=' font-bold text-lg  md:text-2xl text-center'>Web Application</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <Image src={NFT_DevelopmentImg} alt='' width={20} height={20} className='w-24 h-24  ' />
                        <p className=' font-bold text-lg md:text-2xl  text-center'>Blockchain</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <Image src={DeFi_DevelopmentImg} alt='' width={20} height={20} className='w-24 h-24  ' />
                        <p className=' font-bold text-lg md:text-2xl text-center '>Token development</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <Image src={Token_DevelopmenImg} alt='' width={20} height={20} className='w-24 h-24  ' />
                        <p className=' font-bold text-lg md:text-2xl text-center'>DeFi</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <Image src={webDevelopmentImg} alt='' width={20} height={20} className='w-24 h-24  ' />
                        <p className=' font-bold text-lg md:text-2xl text-center'>NFT Marketplace</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <Image src={NFT_Marketplace_DevelopmentImg} width={20} height={20} alt='' className='w-24 h-24  ' />
                        <p className='font-bold text-lg  md:text-2xl text-center'>Currency Exchange</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <Image src={Block_ChainImg} width={20} height={20} alt='' className='w-24 h-24  ' />
                        <p className=' font-bold text-lg md:text-2xl text-center'>Currency Exchange</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <Image src={Cryptocurrency_ExchangeImg} width={20} height={20} alt='' className='w-24 h-24  ' />
                        <p className=' font-bold text-lg md:text-2xl text-center'>Currency Exchange</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default ProductServices;