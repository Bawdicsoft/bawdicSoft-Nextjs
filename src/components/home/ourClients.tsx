"use client"
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
interface OurClientsSectionProps { }
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';



const OurClients: FC<OurClientsSectionProps> = () => {
    const clientsList = [
        { name: "Maria Kate", title: "Photographer", desc: "In ac turpis justo. Vivamus auctor quam vitae odio feugiatpulvinar. Sed semper ligula sed lorem tincidunt dignissim.Nam sed cursus lectus. Proin non rutrum magna. Proingravida, justo et imperdiet tristique turpis nisi viverra.", img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).jpg" },
        { name: "John Doe", title: " Web Developer", desc: " Maecenas auctor, quam eget tincidunt pretium, felis diamsemper turpis, sed scelerisque diam libero facilisis libero.Quisque vitae semper metus. Aliquam eu dui aliquam, faucibusmetus quis, elementum nunc.", img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).jpg" },
        { name: "Anna Deynah", title: "UX Designer", desc: " Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui, sit amet rutrum enim massa in ante. Curabitur injusto at lorem laoreet ultricies. Nunc ligula felis,sagittis eget nisi vitae ex arcu sit amet erat.", img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg" },
    ]
    return (
        <div className="">
            {/* Swiper carasual */}
            <Swiper
                pagination={{
                    clickable: true,
                }}

                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,

                }}
                modules={[Autoplay, Pagination]}
                className=""
            >
                {clientsList.map((c, index) =>
                    <SwiperSlide className="py-16  !flex !flex-col gap-10 !justify-center !items-center rounded-3xl">
                        <div id="carouselExampleCaptions" className="relative">
                            <div className="relative w-full  after:clear-both after:block after:content-['']">
                                <div
                                    className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none backface-hidden"
                                >
                                    <img className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                                        src={c.img} alt="avatar" />
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                                            <h5 className="mb-2 text-lg font-bold text-center">{c.name}</h5>
                                            <p className="mb-4 font-medium text-neutral-700 dark:text-neutral-400 text-center">
                                                {c.title}
                                            </p>
                                            <p className="mb-6 text-neutral-500 dark:text-neutral-300 text-center">
                                                {c.desc}
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                                                    <path fill="currentColor"
                                                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                                                </svg>
                                            </p>
                                            <ul className="mb-0 flex justify-center">
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning text-yellow-500">
                                                        <path fill="currentColor"
                                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning text-yellow-500">
                                                        <path fill="currentColor"
                                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning text-yellow-500">
                                                        <path fill="currentColor"
                                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning text-yellow-500">
                                                        <path fill="currentColor"
                                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning text-yellow-500">
                                                        <path fill="currentColor"
                                                            d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>

            {/* Second Carasual */}
            {/* <div className="mb-16">
                <div>
                    <div className="container flex justify-center mx-auto pt-16">
                        <div>
                            <p className="text-gray-500 text-lg text-center font-normal pb-3">BUILDING TEAM</p>
                            <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
                        </div>
                    </div>
                    <div className="w-full bg-gray-100 px-10 pt-10">
                        <div className="container mx-auto">
                            <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                                <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                    <div className="rounded overflow-hidden shadow-md bg-white">
                                        <div className="absolute -mt-20 w-full flex justify-center">
                                            <div className="h-32 w-32">
                                                <img src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" alt="Display Picture of Andres Berlin" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                            </div>
                                        </div>
                                        <div className="px-6 mt-16">
                                            <h1 className="font-bold text-3xl text-center mb-1">Andres Berlin</h1>
                                            <p className="text-gray-800 text-sm text-center">Chief Executive Officer</p>
                                            <p className="text-center text-gray-600 text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p>
                                            <div className="w-full flex justify-center pt-5 pb-5">
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div aria-label="Github" role="img">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github">
                                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div aria-label="Twitter" role="img">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter">
                                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div aria-label="Instagram" role="img">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram">
                                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                        </svg>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                    <div className="rounded overflow-hidden shadow-md bg-white">
                                        <div className="absolute -mt-20 w-full flex justify-center">
                                            <div className="h-32 w-32">
                                                <img src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif" alt="Display Picture of Silene Tokyo" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                            </div>
                                        </div>
                                        <div className="px-6 mt-16">
                                            <h1 className="font-bold text-3xl text-center mb-1">Silene Tokyo</h1>
                                            <p className="text-gray-800 text-sm text-center">Product Design Head</p>
                                            <p className="text-center text-gray-600 text-base pt-3 font-normal">The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.</p>
                                            <div className="w-full flex justify-center pt-5 pb-5">
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div aria-label="Github" role="img">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github">
                                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div aria-label="Twitter" role="img">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter">
                                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div aria-label="Instagram" role="img">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram">
                                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                        </svg>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                    <div className="rounded overflow-hidden shadow-md bg-white">
                                        <div className="absolute -mt-20 w-full flex justify-center">
                                            <div className="h-32 w-32">
                                                <img src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif" alt="Display Picture of Johnson Stone" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                            </div>
                                        </div>
                                        <div className="px-6 mt-16">
                                            <h1 className="font-bold text-3xl text-center mb-1">Johnson Stone</h1>
                                            <p className="text-gray-800 text-sm text-center">Manager Development</p>
                                            <p className="text-center text-gray-600 text-base pt-3 font-normal">Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.</p>
                                            <div className="w-full flex justify-center pt-5 pb-5">
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div aria-label="Github" role="img">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github">
                                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div aria-label="Twitter" role="img">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter">
                                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div aria-label="Instagram" role="img">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram">
                                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                        </svg>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                    <div className="rounded overflow-hidden shadow-md bg-white">
                                        <div className="absolute -mt-20 w-full flex justify-center">
                                            <div className="h-32 w-32">
                                                <img src="https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg" alt="Display Picture of Dean Jones" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                            </div>
                                        </div>
                                        <div className="px-6 mt-16">
                                            <h1 className="font-bold text-3xl text-center mb-1">Dean Jones</h1>
                                            <p className="text-gray-800 text-sm text-center">Principal Software Engineer</p>
                                            <p className="text-center text-gray-600 text-base pt-3 font-normal">An avid open-source developer who loves to be creative and inventive. I have 20 years of experience in the field.</p>
                                            <div className="w-full flex justify-center pt-5 pb-5">
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div aria-label="Github" role="img">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github">
                                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div aria-label="Twitter" role="img">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter">
                                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div aria-label="Instagram" role="img">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram">
                                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                        </svg>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                    <div className="rounded overflow-hidden shadow-md bg-white">
                                        <div className="absolute -mt-20 w-full flex justify-center">
                                            <div className="h-32 w-32">
                                                <img src="https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg" alt="Display Picture of Rachel Adams" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                            </div>
                                        </div>
                                        <div className="px-6 mt-16">
                                            <h1 className="font-bold text-3xl text-center mb-1">Rachel Adams</h1>
                                            <p className="text-gray-800 text-sm text-center">Product Design Head</p>
                                            <p className="text-center text-gray-600 text-base pt-3 font-normal">Product designer with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them a life.</p>
                                            <div className="w-full flex justify-center pt-5 pb-5">
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div aria-label="Github" role="img">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github">
                                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div aria-label="Twitter" role="img">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter">
                                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div aria-label="Instagram" role="img">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram">
                                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                        </svg>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                    <div className="rounded overflow-hidden shadow-md bg-white">
                                        <div className="absolute -mt-20 w-full flex justify-center">
                                            <div className="h-32 w-32">
                                                <img src="https://cdn.tuk.dev/assets/photo-1570211776045-af3a51026f4a.jfif" alt="Display Picture of Charles Keith" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                            </div>
                                        </div>
                                        <div className="px-6 mt-16">
                                            <h1 className="font-bold text-3xl text-center mb-1">Charles Keith</h1>
                                            <p className="text-gray-800 text-sm text-center">UX Designer</p>
                                            <p className="text-center text-gray-600 text-base pt-3 font-normal">A UX designer is the voice of the customer. Our job is to look beyond the business goals. We don't just experience user interface but also questions it.</p>
                                            <div className="w-full flex justify-center pt-5 pb-5">
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div aria-label="Github" role="img">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github">
                                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div aria-label="Twitter" role="img">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter">
                                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div aria-label="Instagram" role="img">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram">
                                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                        </svg>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         </div> */}





            {/* Third Carasual */}
            {/* <div className="container my-24 mx-auto md:px-6">

                <section className="mb-32 text-center">
                    <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>

                    <div id="carouselExampleCaptions" className="relative">
                        <div className="relative w-full  after:clear-both after:block after:content-['']">
                            <div
                                className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none backface-hidden"
                            >
                                <img className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                                    src={clientsList[client].img} alt="avatar" />
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                                        <h5 className="mb-2 text-lg font-bold">{clientsList[client].name}</h5>
                                        <p className="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                                            {clientsList[client].title}
                                        </p>
                                        <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                                            {clientsList[client].desc}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                                                <path fill="currentColor"
                                                    d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                                            </svg>
                                        </p>
                                        <ul className="mb-0 flex justify-center">
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning text-yellow-500">
                                                    <path fill="currentColor"
                                                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                </svg>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning text-yellow-500">
                                                    <path fill="currentColor"
                                                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                </svg>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning text-yellow-500">
                                                    <path fill="currentColor"
                                                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                </svg>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning text-yellow-500">
                                                    <path fill="currentColor"
                                                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                </svg>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning text-yellow-500">
                                                    <path fill="currentColor"
                                                        d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                </svg>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                            type="button" data-te-target="#carouselExampleCaptions" data-te-slide="prev" onClick={() => client >= 2 ? setClient(client - 1) : setClient(0)}>
                            <span className="inline-block h-8 w-8">
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                    className="text-sky-700 dark:text-neutral-300">
                                    <path fill="currentColor"
                                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                </svg>
                            </span>
                            <span
                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
                        </button>
                        <button
                            className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                            type="button" data-te-target="#carouselExampleCaptions" data-te-slide="next" onClick={() => client < 2 ? setClient(client + 1) : setClient(2)}>
                            <span className="inline-block h-8 w-8">
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                    className="text-sky-700 dark:text-neutral-300">
                                    <path fill="currentColor"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </span>
                            <span
                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
                        </button>
                    </div>
                </section>
            </div> */}



        </div>
    );
};
export default OurClients;