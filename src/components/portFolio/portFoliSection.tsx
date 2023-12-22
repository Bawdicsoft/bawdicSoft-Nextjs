"use client";
import Image, { StaticImageData } from "next/image";
import React, { FC, ReactNode, MouseEvent, useState, useEffect } from "react";
import { allData } from "../allData";
import Link from "next/link";

interface PortFolioSectionProps { }

const PortFolioSection: FC<PortFolioSectionProps> = () => {
  const [allProductBtnHandle, setAllProductBtnHandle] = useState(true);
  const [wordProductBtnHandle, setwordProductBtnHandle] = useState(true);
  const wordpressData = allData.filter(p => p.category === "wordpress");
  const [allwordpressData, setallwordpressData] = useState(wordpressData.splice(0, 5))
  const AiData = allData.filter(p => p.category === "ai");
  const threedData = allData.filter(p => p.category === "threeDWeb");

  const [allProducts, setAllProducts] = useState(allData.splice(0, 5))

  // const filterHandler = (allData: string) => {
  //   if (allData === "all") {
  //     setNum(false);
  //     setData(allDataReciev);
  //   } else if (
  //     allData === "wordpress" ||
  //     allData === "wordpress-ecommerce" ||
  //     allData === "wordpress-blog" ||
  //     allData === "wordpress-others"
  //   ) {
  //     setNum(true);
  //     if (allData === "wordpress") {
  //       const filterDataWordpress = allDataReciev.filter(
  //         (product) => product.category === allData
  //       );
  //       setData(filterDataWordpress);
  //     } else if (allData === "wordpress-ecommerce") {
  //       const fileDataEcommerce = allDataReciev.filter(
  //         (product) => product.subCategory === allData
  //       );
  //       setData(fileDataEcommerce);
  //     } else if (allData === "wordpress-blog") {
  //       const fileDataBlog = allDataReciev.filter(
  //         (product) => product.subCategory === allData
  //       );
  //       setData(fileDataBlog);
  //     } else if (allData === "wordpress-others") {
  //       const fileDataOthers = allDataReciev.filter(
  //         (product) => product.subCategory === allData
  //       );
  //       setData(fileDataOthers);
  //     }
  //   } else {
  //     setNum(false);
  //     const filterData = allDataReciev.filter(
  //       (product) => product.category === allData
  //     );
  //     setData(filterData);
  //   }
  // };

  return (

    <div className="py-24 flex flex-col">
      {/* <p className="text-center">
          {" "}
          <a className="text-5xl font-bold py-3 md:py-5 px-10 md:px-40   bg-sky-800 text-white">
            Our Portfolio{" "}
          </a>
        </p>
        <p className="text-center py-5 text-md px-5 md:px-10 text-gray-200">Lorem ipsum dolo Lorem ipsum dolor sit amet consecr sit amet consectetur adipisicing elit. Alias repellat qui quia rerum delectus voluptatum voluptas ipsa possimus nisi consequuntur!</p>
        <p className="text-center py-5 text-md px-5 md:px-10 text-white font-bold text-3xl">All</p> */}
      {/* <div className=" py-20 grid grid-cols-1 gap-5  md:grid-cols-3 lg:grid-cols-4 md:px-12 px-5 ">
          <button
            className="text-lg border-blue-400 md:text-xl font-bold  cursor-pointer rounded-[35px] border-4 hover:border-blue-600 active:bg-sky-900 focus:outline-none focus:ring focus:ring-blue-600   focus:border-none  py-3 min-w-min text-white"
            onClick={() => filterHandler("all")}
          >
            All
          </button>
          <button
            className="text-lg border-blue-400 md:text-xl font-bold  cursor-pointer rounded-[35px] border-4 hover:border-blue-600 py-3 min-w-min text-white active:bg-sky-900 focus:outline-none focus:ring focus:ring-blue-600   focus:border-none"
            onClick={() => filterHandler("wordpress")}
          >
            Wordpress
          </button>
          <button
            className="text-lg border-blue-400 md:text-xl font-bold  cursor-pointer rounded-[35px] border-4 hover:border-blue-600 py-3 min-w-min text-white active:bg-sky-900 focus:outline-none focus:ring focus:ring-blue-600   focus:border-none"
            onClick={() => filterHandler("ai")}
          >
            AI
          </button>
          <button
            className="text-lg border-blue-400 md:text-xl font-bold  cursor-pointer rounded-[35px] border-4 hover:border-blue-600 py-3 min-w-min text-white active:bg-sky-900 focus:outline-none focus:ring focus:ring-blue-600   focus:border-none"
            onClick={() => filterHandler("threeDWeb")}
          >
            3D Model Website
          </button>
        </div> */}

      {/* {num && (
          <div className="flex justify-center items-center">
            <div className="pb-20 grid grid-cols-1 gap-5  md:grid-cols-3   ">
              <button
                className="text-md border-blue-400 md:text-md font-bold  cursor-pointer  rounded-[35px] border-4 hover:border-blue-600 py-3 min-w-min text-white active:bg-sky-900 focus:outline-none focus:ring focus:ring-blue-600 px-2 focus:border-none"
                onClick={() => filterHandler("wordpress-ecommerce")}
              >
                E-commerce
              </button>
              <button
                className="text-md border-blue-400 md:text-md font-bold  cursor-pointer  rounded-[35px] border-4 hover:border-blue-600 py-3 min-w-min text-white active:bg-sky-900 focus:outline-none focus:ring focus:ring-blue-600 px-2 focus:border-none"
                onClick={() => filterHandler("wordpress-blog")}
              >
                Blog
              </button>
              <button
                className="text-md border-blue-400 md:text-md font-bold  cursor-pointer  rounded-[35px] border-4 hover:border-blue-600 py-3 min-w-min text-white active:bg-sky-900 focus:outline-none focus:ring focus:ring-blue-600 px-2 focus:border-none"
                onClick={() => filterHandler("wordpress-others")}
              >
                Others
              </button>
            </div>
          </div>
        )} */}

      {/* Today Task 22-12-2023 */}
      <div className="grid grid-cols-1 md:grid-cols-3 px-16 pt-24 pb-16 rounded-3xl  bg-gradient-to-r from-sky-950  via-sky-800 via-30% to-sky-700 to-70%">
        <Image src={"/images/portFolio/webimg.jpg"} width={300} height={300} alt="" className="h-72 w-full rounded-3xl"></Image>
        <div className="flex flex-col md:col-span-2 gap-8 px-10">
          <h2 className="text-white text-5xl font-semibold ">Web App for One of the Largest Automotive Lead Marketing Companies in the US</h2>
          <div className="grid grid-cols-3 ">
            <div className="flex flex-col col-span-2">
              <h2 className="text-white p-4">Logo</h2>
              <div className="flex gap-1 ">
                <span className="bg-white py-1 px-2 rounded-xl text-sm">Web App</span>
                <span className="bg-white py-1 px-2 rounded-xl text-sm">Automotive</span>
                <span className="bg-white py-1 px-2 rounded-xl text-sm">US</span>
                <span className="bg-white py-1 px-2 rounded-xl text-sm">Enterprise</span>
              </div>
            </div>
            <button className="text-sm text-white border-2 border-white rounded-xl py-1 px-8 place-self-end ">View Case Study</button>
          </div>
        </div>
      </div>

      {/* All Data Render */}
      <div className="flex flex-col justify-center items-center">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-3 py-10">
          {allProducts.map((product) => (
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
                    Site</Link>
                </div>
              </div>
            </div>
          ))}

        </div>
        {allProductBtnHandle ? <button className="text-white font-semibold text-lg border-2 border-white p-3 rounded-3xl" onClick={() => { setAllProducts(allData); setAllProductBtnHandle(false) }}>Show more</button>
          : <button className="text-white font-semibold text-lg border-2 border-white p-3 rounded-3xl" onClick={() => { setAllProducts(allData.splice(0, 5)); setAllProductBtnHandle(true) }}>Show Less</button>}
      </div>

      {/* WordPress New */}
      {/* <p className="text-center py-5 text-md px-5 md:px-10 text-white font-bold text-3xl mt-32">Word Press</p>
        <div className="flex flex-col justify-center items-center ">
          <div className=" gap-8 grid grid-cols-1 md:grid-cols-3 px-5  md:px-12 py-10">
            {allwordpressData.map((product) => (
              <Link
                key={product.id}
                className=" relative  group"
                href={
                  product.category.includes("ai")
                    ? `/productDetailes/${product.id}`
                    : product.href
                }
              >
                <Image
                  src={product.projectImage}
                  alt=""
                  width={400}
                  height={400}
                  className="w-full h-60 rounded-[20px] hover:opacity-25 duration-500 transition-opacity"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="flex justify-center items-center md:gap-1 ">
                    <div>
                      <span className=" text-2xl mx-auto md:text-md break-words lg:text-3xl font-bold hidden group-hover:block text-white  ">
                        {product.projectName.length > 10
                          ? product.projectName.slice(0, 10)
                          : product.projectName}
                      </span>
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10 md:w-5 m:h-5  lg:w-10 lg:h-10 font-bold  hidden group-hover:block text-white  "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {wordProductBtnHandle ? <button className="text-white font-semibold text-lg border-2 border-white p-3 rounded-3xl" onClick={() => { setallwordpressData(wordpressData); setwordProductBtnHandle(false) }}>Show more</button>
            : <button className="text-white font-semibold text-lg border-2 border-white p-3 rounded-3xl" onClick={() => { setwordProductBtnHandle(true); setallwordpressData(wordpressData.splice(0, 5)) }}>Show Less</button>}
        </div> */}

      {/* AI New */}
      {/* <p className="text-center py-5 text-md px-5 md:px-10 text-white font-bold text-3xl mt-32">Artificial Intelligence</p>
        <div>
          <div className=" gap-8 grid grid-cols-1 md:grid-cols-3 px-5  md:px-12 py-10">
            {AiData.map((product) => (
              <Link
                key={product.id}
                className=" relative  group"
                href={
                  product.category.includes("ai")
                    ? `/productDetailes/${product.id}`
                    : product.href
                }
              >
                <Image
                  src={product.projectImage}
                  alt=""
                  width={400}
                  height={400}
                  className="w-full h-60 rounded-[20px] hover:opacity-25 duration-500 transition-opacity"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="flex justify-center items-center md:gap-1 ">
                    <div>
                      <span className=" text-2xl mx-auto md:text-md break-words lg:text-3xl font-bold hidden group-hover:block text-white  ">
                        {product.projectName.length > 10
                          ? product.projectName.slice(0, 10)
                          : product.projectName}
                      </span>
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10 md:w-5 m:h-5  lg:w-10 lg:h-10 font-bold  hidden group-hover:block text-white  "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div> */}

      {/* 3D Models New */}
      {/* <p className="text-center py-5 text-md px-5 md:px-10 text-white font-bold text-3xl mt-32">3D Models Website</p>
        <div>
          <div className=" gap-8 grid grid-cols-1 md:grid-cols-3 px-5  md:px-12 py-10">
            {threedData.map((product) => (
              <Link
                key={product.id}
                className=" relative  group"
                href={
                  product.category.includes("ai")
                    ? `/productDetailes/${product.id}`
                    : product.href
                }
              >
                <Image
                  src={product.projectImage}
                  alt=""
                  width={400}
                  height={400}
                  className="w-full h-60 rounded-[20px] hover:opacity-25 duration-500 transition-opacity"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="flex justify-center items-center md:gap-1 ">
                    <div>
                      <span className=" text-2xl mx-auto md:text-md break-words lg:text-3xl font-bold hidden group-hover:block text-white  ">
                        {product.projectName.length > 10
                          ? product.projectName.slice(0, 10)
                          : product.projectName}
                      </span>
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10 md:w-5 m:h-5  lg:w-10 lg:h-10 font-bold  hidden group-hover:block text-white  "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div> */}
    </div>

  );
};
export default PortFolioSection;
