"use client";
import Image, { StaticImageData } from "next/image";
import React, { FC, ReactNode, MouseEvent, useState, useEffect } from "react";
import { allData } from "../allData";
import Link from "next/link";

interface PortFolioSectionProps { }

const PortFolioSection: FC<PortFolioSectionProps> = () => {
  const wordpressData = allData.filter(p => p.category === "wordpress");
  const [wordPressData, setWordPressData] = useState(wordpressData)
  const ecommerce = wordpressData.filter(p => p.subCategory === "wordpress-ecommerce");
  const blog = wordpressData.filter(p => p.subCategory === "wordpress-blog");
  const others = wordpressData.filter(p => p.subCategory === "wordpress-others");
  const [readMore, setReadMore] = useState(5)
  const AiData = allData.filter(p => p.category === "ai");
  const threedData = allData.filter(p => p.category === "threeDWeb");

  return (
    <div className="flex flex-col">
      {/* Wordpress product */}
      <div className="py-20 mx-5 xl:mx-0">
        <div className="grid grid-cols-1 md:grid-cols-3 px-5 lg:px-16 pt-24 pb-16 rounded-3xl  bg-gradient-to-r from-sky-950  via-sky-800 via-30% to-sky-700 to-70%">
          <Image src={"/images/portFolio/webimg.jpg"} width={300} height={300} alt="" className="h-60 md:h-72 w-full rounded-3xl"></Image>
          <div className="flex flex-col md:col-span-2 gap-8 md:px-10">
            <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-semibold ">WordPress One of the Largest Automotive Lead</h2>
            <p className="text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rem quis nulla consequuntur nam nesciunt dolorum doloribus obcaecati quia. Libero adipisci tenetur magni ullam dolorum doloribus cupiditate consequatur quidem officiis.</p>
            <div className="grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-3 ">
              <div className="flex flex-col md:col-span-2">
                <div className="flex flex-wrap md:flex-nowrap gap-1 ">
                  <button className="bg-white py-1 px-2 rounded-xl text-sm" onClick={() => setWordPressData(ecommerce)}>E-Commerce</button>
                  <button className="bg-white py-1 px-2 rounded-xl text-sm" onClick={() => setWordPressData(blog)}>Blog</button>
                  <button className="bg-white py-1 px-2 rounded-xl text-sm" onClick={() => setWordPressData(others)}>Others</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3 py-10">
            {wordPressData.map((product, index) => (
              <>
                {index <= readMore &&
                  <div
                    key={product.id}
                    className="group relative rounded-3xl overflow-hidden"
                  >
                    <Image
                      src={product.projectImage}
                      alt=""
                      width={400}
                      height={400}
                      className="w-full object-cover"
                    />
                    <div
                      className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gradient-to-r from-sky-950  via-sky-700 to-sky-600 opacity-100 group-hover:h-full group-hover:opacity-75 duration-500">
                    </div>
                    <div className="absolute w-full h-full flex justify-center items-center top-0 left-0 ">
                      <div className="hidden group-hover:block text-sky-800 text-center">
                        <h1 className="text-2xl text-white mb-2">{product.projectName}</h1>
                        <Link href={
                          product.category.includes("ai")
                            ? `/productDetailes/${product.id}`
                            : product.href
                        } className="mt-5 px-5 py-1 rounded-full border border-white hover:opacity-75 bg-white">Visit
                          Site
                        </Link>
                      </div>
                    </div>
                  </div>
                }
              </>
            ))}
          </div>
          {(readMore + 1) <= wordPressData.length ? < button className="font-semibold text-lg border border-gray-400 p-3 rounded-3xl" onClick={() => setReadMore(readMore + 3)}>Show more</button> : <button className="font-semibold text-lg  border border-gray-400 p-3 rounded-3xl" onClick={() => setReadMore(5)}>Show Less</button>}
        </div>
      </div>
      {/* Ai product*/}
      <div className="mx-5 xl:mx-0">
        <div className="grid grid-cols-1 md:grid-cols-3 px-5 lg:px-16 pt-24 pb-16 rounded-3xl  bg-gradient-to-r from-sky-950  via-sky-800 via-30% to-sky-700 to-70%">
          <Image src={"/images/portFolio/ai.jpeg"} width={300} height={300} alt="" className="h-60 md:h-72 w-full rounded-3xl"></Image>
          <div className="flex flex-col md:col-span-2 gap-8 md:px-10">
            <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-semibold ">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
            <p className="text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rem quis nulla consequuntur nam nesciunt dolorum doloribus obcaecati quia. Libero adipisci tenetur magni ullam dolorum doloribus cupiditate consequatur quidem officiis.</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3 py-10">
            {AiData.map((product, index) => (
              <>
                {index <= readMore &&
                  <div
                    key={product.id}
                    className="group relative rounded-3xl overflow-hidden"
                  >
                    <Image
                      src={product.projectImage}
                      alt=""
                      width={400}
                      height={400}
                      className="w-full object-cover"
                    />
                    <div
                      className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gradient-to-r from-sky-950  via-sky-700 to-sky-600 opacity-100 group-hover:h-full group-hover:opacity-75 duration-500">
                    </div>
                    <div className="absolute w-full h-full flex justify-center items-center top-0 left-0 ">
                      <div className="hidden group-hover:block text-sky-800 text-center">
                        <h1 className="text-2xl text-white mb-2">{product.projectName}</h1>
                        <Link href={
                          product.category.includes("ai")
                            ? `/productDetailes/${product.id}`
                            : product.href
                        } className="mt-5 px-5 py-1 rounded-full border border-white hover:opacity-75 bg-white">Visit
                          Site
                        </Link>
                      </div>
                    </div>
                  </div>
                }
              </>
            ))}

          </div>
        </div>
      </div>
      {/* 3DModel Website*/}
      <div className="mx-5 xl:mx-0 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 px-5 lg:px-16 pt-24 pb-16 rounded-3xl  bg-gradient-to-r from-sky-950  via-sky-800 via-30% to-sky-700 to-70%">
          <Image src={"/images/portFolio/ai.jpeg"} width={300} height={300} alt="" className="h-60 md:h-72 w-full rounded-3xl"></Image>
          <div className="flex flex-col md:col-span-2 gap-8 md:px-10">
            <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-semibold ">3D Model dolor, sit amet consectetur adipisicing elit.</h2>
            <p className="text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rem quis nulla consequuntur nam nesciunt dolorum doloribus obcaecati quia. Libero adipisci tenetur magni ullam dolorum doloribus cupiditate consequatur quidem officiis.</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3 py-10">
            {threedData.map((product, index) => (
              <>
                {index <= readMore &&
                  <div
                    key={product.id}
                    className="group relative rounded-3xl overflow-hidden"
                  >
                    <Image
                      src={product.projectImage}
                      alt=""
                      width={400}
                      height={400}
                      className="w-full object-cover"
                    />
                    <div
                      className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gradient-to-r from-sky-950  via-sky-700 to-sky-600 opacity-100 group-hover:h-full group-hover:opacity-75 duration-500">
                    </div>
                    <div className="absolute w-full h-full flex justify-center items-center top-0 left-0 ">
                      <div className="hidden group-hover:block text-sky-800 text-center">
                        <h1 className="text-2xl text-white mb-2">{product.projectName}</h1>
                        <Link href={
                          product.category.includes("ai")
                            ? `/productDetailes/${product.id}`
                            : product.href
                        } className="mt-5 px-5 py-1 rounded-full border border-white hover:opacity-75 bg-white">Visit
                          Site
                        </Link>
                      </div>
                    </div>
                  </div>
                }
              </>
            ))}

          </div>
        </div>
      </div>
    </div >

  );
};
export default PortFolioSection;
