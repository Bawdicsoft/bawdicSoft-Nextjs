import Image from "next/image";
import React, { FC, ReactNode, MouseEvent } from "react";
import webDevelopmentImg from "../../../public/images/portFolio/Web-Application-Development.png";
import Block_ChainImg from "../../../public/images/portFolio/Block-Chain-Development.png";
import Cryptocurrency_ExchangeImg from "../../../public/images/portFolio/Cryptocurrency-Exchange-Platforms.png";
import DeFi_DevelopmentImg from "../../../public/images/portFolio/DeFi-Development.png";
import NFT_DevelopmentImg from "../../../public/images/portFolio/NFT-Development.png";
import NFT_Marketplace_DevelopmentImg from "../../../public/images/portFolio/NFT-Marketplace-Development.png";
import Token_DevelopmenImg from "../../../public/images/portFolio/Token-Development.png";
import Web_DevelopmentImg from "../../../public/images/portFolio/Web-Development_.png";

interface productSevicesProps { }

const ProductServices: FC<productSevicesProps> = () => {
  const projectList = [{
    id: 1, count: "100+", title: "Clients", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 2, count: "200+", title: "Projects", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }, {
    id: 3, count: "300+", title: "Organizations", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }, {
    id: 4, count: "400+", title: "Developers", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }]
  return (
    <div className="py-28">
      <div className="text-center">
        <h1 className="text-center text text-2xl md::text-4xl font-bold tracking-tight leading-none  md:text-5xl lg:text-6xl ">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="text-center text-sm md:text-lg px-20 py-4 md:pb-0 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa recusandae ipsam excepturi soluta maiores quaerat nihil vero numquam qui alias?</p>
      </div>
      <div
        className="mt-16 grid divide-x divide-y bg-gradient-to-r from-sky-950  via-sky-800 via-30% to-sky-700 to-70% divide-gray-400 overflow-hidden  rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
        {projectList.map(p => <div key={p.id} className="group relative text-center transition hover:z-[1] hover:shadow-2xl">
          <div className="relative space-y-4 py-12 p-8">
            <p className="text-white text-3xl font-semibold">{p.count}</p>
            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">{p.title}</h5>
              <p className="text-gray-300">{p.desc}</p>
            </div>
          </div>
        </div>)}

      </div>
    </div>


    // <div className="py-28">
    //   <div className="text-center">
    //     <h1 className="text-center text text-2xl md::text-4xl font-bold tracking-tight leading-none  md:text-5xl lg:text-6xl ">
    //       Lorem ipsum dolor sit amet.
    //     </h1>
    //     <p className="text-center text-sm md:text-lg px-20 py-4 md:pb-0 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa recusandae ipsam excepturi soluta maiores quaerat nihil vero numquam qui alias?</p>
    //   </div>
    //   <div
    //     className="mt-16 grid divide-x divide-y   divide-gray-400 overflow-hidden  rounded-3xl border text-gray-600 border-gradient-to-r from-sky-950  via-sky-800 via-30% to-sky-700 to-70% sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
    //     {projectList.map(p => <div key={p.id} className="group relative text-center transition hover:z-[1] hover:shadow-2xl">
    //       <div className="relative space-y-4 py-12 p-8">
    //         <p className=" text-3xl font-semibold">{p.count}</p>
    //         <div className="space-y-2">
    //           <h5 className="text-xl font-semibold  transition group-hover:text-secondary">{p.title}</h5>
    //           <p className="">{p.desc}</p>
    //         </div>
    //       </div>
    //     </div>)}

    //   </div>
    // </div>
  );
};
export default ProductServices;
