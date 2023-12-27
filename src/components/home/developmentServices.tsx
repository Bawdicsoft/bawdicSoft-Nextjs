import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
interface DevelopmentServicesSectionProps { }

const DevelopmentServices: FC<DevelopmentServicesSectionProps> = () => {
    return (
        <div className="flex flex-col justify-center">
            {/* Left Container */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:py-24 px-5 lg:px-0">
                <div className="group relative order-2 md:order-1 bg-gray-100 p-4 md-p-6 lg:p-8 rounded-3xl flex flex-wrap md:flex-nowrap gap-3 overflow-hidden">
                    <div className="bg-sky-700 p-6 h-20  rounded-full">
                        <svg width="32px" height="32px" viewBox="0 -39.5 1103 1103" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M1102.698193 358.4512c0-3.557452-2.167467-5.193956-4.835556-3.654163l-236.870163 136.757096v499.986963c0 7.114904 4.331141 10.389807 9.667319 7.310223l227.202844-131.176297c2.668089-1.539793 4.835556-5.679407 4.835556-9.236859V358.4512z" fill="#4D6FBB" /><path d="M862.424178 490.727348L249.573452 136.897422c-4.279941-2.470874-7.755852 0.155496-7.755852 5.863348V644.266667c0 2.853926 1.737007 6.174341 3.877926 7.408829L843.036444 996.551111c10.7008 6.178133 19.387733-0.388741 19.387734-14.656474V490.727348z" fill="#4D6FBB" /><path d="M499.626667 3.822933c-8.004267-4.621274-20.131081-5.123793-27.062045-1.120711L246.497659 133.2224c-6.932859 4.001185-6.062459 11.002311 1.941808 15.623585l595.897837 344.041245c8.004267 4.621274 20.131081 5.123793 27.062044 1.122607l226.066963-130.520178c6.932859-4.003081 6.062459-11.004207-1.941807-15.625481L499.626667 3.822933z" fill="#6D8ACA" /><path d="M499.626667 508.237748c-8.004267-4.621274-20.131081-5.123793-27.062045-1.120711l-226.066963 130.520178c-6.932859 4.001185-6.062459 11.002311 1.941808 15.623585l595.897837 344.041244c8.004267 4.621274 20.131081 5.123793 27.062044 1.122608l226.066963-130.520178c6.932859-4.003081 6.062459-11.004207-1.941807-15.625481L499.626667 508.237748z" fill="#4D6FBB" /><path d="M29.743407 243.065363c-2.254696-1.302756-5.669926-1.443081-7.621214-0.316682l-18.194963 10.503586c-1.951289 1.128296-1.706667 3.100444 0.548029 4.401303l489.946074 282.870519c2.254696 1.302756 5.669926 1.443081 7.623111 0.316681l18.193067-10.503585c1.953185-1.128296 1.706667-3.100444-0.546133-4.401304L29.743407 243.065363z" fill="#4762AF" /><path d="M521.293748 529.068563c0-0.893156-0.542341-1.302756-1.211733-0.917807l-21.822578 12.598992c-0.669393 0.386844-1.211733 1.426015-1.211733 2.317274v429.074963c0 0.891259 0.542341 1.302756 1.211733 0.915911l21.822578-12.598992c0.669393-0.386844 1.211733-1.424119 1.211733-2.317274V529.068563z" fill="#4762AF" /><path d="M499.520474 549.986607c0-7.332978-4.463881-15.864415-9.963141-19.038814L9.965037 254.0544C4.463881 250.88 0 254.255407 0 261.586489v416.278755c0 7.331081 4.463881 15.862519 9.965037 19.036919l479.592296 276.893393c5.499259 3.176296 9.963141-0.199111 9.963141-7.532089V549.986607z" fill="#6D8ACA" /><path d="M467.757511 564.521719c0-6.174341-3.758459-13.357511-8.389215-16.031289l-423.006815-244.224c-4.630756-2.673778-8.391111 0.16877-8.391111 6.343111v350.53037c0 6.174341 3.760356 13.357511 8.391111 16.031289l423.006815 244.222104c4.630756 2.673778 8.389215-0.16877 8.389215-6.343111V564.521719z" fill="#92B3E1" /><path d="M138.611674 802.876681c-7.918933-4.57197-19.9168-5.0688-26.773807-1.109333L12.42643 859.162548c-6.858904 3.959467-5.996089 10.886637 1.922844 15.458608l250.989985 144.909274c7.918933 4.57197 19.9168 5.0688 26.775704 1.109333l99.409541-57.3952c6.858904-3.959467 5.997985-10.886637-1.920948-15.458607L138.611674 802.876681z" fill="#4762AF" /><path d="M247.864889 834.254696l-23.521659-13.579377v46.502874l23.521659 13.579377v-46.502874z" fill="#E4E9F5" /><path d="M1076.942696 500.366222l-163.627615 94.471585v57.425541l163.627615-94.471585v-57.425541zM1076.942696 604.715615l-163.627615 94.471585v57.423644l163.627615-94.469688v-57.425541z" fill="#6D8ACA" /><path d="M1011.308089 756.110222c8.929659-5.15603 16.177304-0.969007 16.177304 9.341156s-7.247644 22.867437-16.177304 28.02157c-8.929659 5.15603-16.1792 0.970904-16.1792-9.341155 0-10.310163 7.249541-22.865541 16.1792-28.021571z" fill="#FFFFFF" /></svg>
                    </div>
                    <div className="flex flex-col gap-2 group-hover:text-white">
                        <h2 className="text-2xl font-bold lg:text-3xl">Lorem ipsum dolor sit adipisicing elit. Pariatur</h2>
                        <span className="bg-sky-700 h-1 w-16 lg:w-32"></span>
                        <p className="text-md text-gray-700 group-hover:text-white">Because we really love and feel passion for what we do. We always seek the benefit and satisfaction of our clients, through personalized advice and quality in all our developments. Our web developers work in a single office space and are a well-coordinated team. As a leading Software house in Pakistan, We provide clients with all types of services for website creation, increase SEO traffic, conversion optimization Logos and Icons, and Internet resources modernization. Our software house mission is spreading the best services in the industry of online market.</p>
                    </div>

                    <div
                        className="absolute top-0 left-0 h-full w-0  bg-gradient-to-r from-sky-950  via-sky-700 to-sky-600 group-hover:w-full  duration-500">
                        <div className="hidden group-hover:flex group-hover:p-4 group-hover:md:p-6 group-hover:lg:p-8 group-hover:flex-wrap md:group-hover:flex-nowrap gap-3 overflow-hidden">
                            <div className="group-hover:bg-sky-600 bg-sky-700 p-6 h-20  rounded-full">
                                <svg width="32px" height="32px" viewBox="0 -39.5 1103 1103" className="" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M1102.698193 358.4512c0-3.557452-2.167467-5.193956-4.835556-3.654163l-236.870163 136.757096v499.986963c0 7.114904 4.331141 10.389807 9.667319 7.310223l227.202844-131.176297c2.668089-1.539793 4.835556-5.679407 4.835556-9.236859V358.4512z" fill="#4D6FBB" /><path d="M862.424178 490.727348L249.573452 136.897422c-4.279941-2.470874-7.755852 0.155496-7.755852 5.863348V644.266667c0 2.853926 1.737007 6.174341 3.877926 7.408829L843.036444 996.551111c10.7008 6.178133 19.387733-0.388741 19.387734-14.656474V490.727348z" fill="#4D6FBB" /><path d="M499.626667 3.822933c-8.004267-4.621274-20.131081-5.123793-27.062045-1.120711L246.497659 133.2224c-6.932859 4.001185-6.062459 11.002311 1.941808 15.623585l595.897837 344.041245c8.004267 4.621274 20.131081 5.123793 27.062044 1.122607l226.066963-130.520178c6.932859-4.003081 6.062459-11.004207-1.941807-15.625481L499.626667 3.822933z" fill="#6D8ACA" /><path d="M499.626667 508.237748c-8.004267-4.621274-20.131081-5.123793-27.062045-1.120711l-226.066963 130.520178c-6.932859 4.001185-6.062459 11.002311 1.941808 15.623585l595.897837 344.041244c8.004267 4.621274 20.131081 5.123793 27.062044 1.122608l226.066963-130.520178c6.932859-4.003081 6.062459-11.004207-1.941807-15.625481L499.626667 508.237748z" fill="#4D6FBB" /><path d="M29.743407 243.065363c-2.254696-1.302756-5.669926-1.443081-7.621214-0.316682l-18.194963 10.503586c-1.951289 1.128296-1.706667 3.100444 0.548029 4.401303l489.946074 282.870519c2.254696 1.302756 5.669926 1.443081 7.623111 0.316681l18.193067-10.503585c1.953185-1.128296 1.706667-3.100444-0.546133-4.401304L29.743407 243.065363z" fill="#4762AF" /><path d="M521.293748 529.068563c0-0.893156-0.542341-1.302756-1.211733-0.917807l-21.822578 12.598992c-0.669393 0.386844-1.211733 1.426015-1.211733 2.317274v429.074963c0 0.891259 0.542341 1.302756 1.211733 0.915911l21.822578-12.598992c0.669393-0.386844 1.211733-1.424119 1.211733-2.317274V529.068563z" fill="#4762AF" /><path d="M499.520474 549.986607c0-7.332978-4.463881-15.864415-9.963141-19.038814L9.965037 254.0544C4.463881 250.88 0 254.255407 0 261.586489v416.278755c0 7.331081 4.463881 15.862519 9.965037 19.036919l479.592296 276.893393c5.499259 3.176296 9.963141-0.199111 9.963141-7.532089V549.986607z" fill="#6D8ACA" /><path d="M467.757511 564.521719c0-6.174341-3.758459-13.357511-8.389215-16.031289l-423.006815-244.224c-4.630756-2.673778-8.391111 0.16877-8.391111 6.343111v350.53037c0 6.174341 3.760356 13.357511 8.391111 16.031289l423.006815 244.222104c4.630756 2.673778 8.389215-0.16877 8.389215-6.343111V564.521719z" fill="#92B3E1" /><path d="M138.611674 802.876681c-7.918933-4.57197-19.9168-5.0688-26.773807-1.109333L12.42643 859.162548c-6.858904 3.959467-5.996089 10.886637 1.922844 15.458608l250.989985 144.909274c7.918933 4.57197 19.9168 5.0688 26.775704 1.109333l99.409541-57.3952c6.858904-3.959467 5.997985-10.886637-1.920948-15.458607L138.611674 802.876681z" fill="#4762AF" /><path d="M247.864889 834.254696l-23.521659-13.579377v46.502874l23.521659 13.579377v-46.502874z" fill="#E4E9F5" /><path d="M1076.942696 500.366222l-163.627615 94.471585v57.425541l163.627615-94.471585v-57.425541zM1076.942696 604.715615l-163.627615 94.471585v57.423644l163.627615-94.469688v-57.425541z" fill="#6D8ACA" /><path d="M1011.308089 756.110222c8.929659-5.15603 16.177304-0.969007 16.177304 9.341156s-7.247644 22.867437-16.177304 28.02157c-8.929659 5.15603-16.1792 0.970904-16.1792-9.341155 0-10.310163 7.249541-22.865541 16.1792-28.021571z" fill="#FFFFFF" /></svg>
                            </div>
                            <div className="flex flex-col gap-2 group-hover:text-white">
                                <h2 className="text-2xl font-bold lg:text-3xl">Lorem ipsum dolor sit adipisicing elit. Pariatur</h2>
                                <span className="bg-white h-1 w-16 lg:w-32"></span>
                                <p className="text-md text-gray-700 group-hover:text-white">Because we really love and feel passion for what we do. We always seek the benefit and satisfaction of our clients, through personalized advice and quality in all our developments. Our web developers work in a single office space and are a well-coordinated team. As a leading Software house in Pakistan, We provide clients with all types of services for website creation, increase SEO traffic, conversion optimization Logos and Icons, and Internet resources modernization. Our software house mission is spreading the best services in the industry of online market.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-1 md:order-2">
                    <Image src={"/images/WebApplication.jpg"} alt="" width={400} height={400} className="rounded-3xl h-full w-full max-h-screen" />
                </div>
            </div>

            {/* Right Container */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 py-24 px-5 lg:px-0">
                <div className="">
                    <Image src={"/images/Blockchainweb3.jpg"} alt="" width={400} height={400} className="rounded-3xl h-full w-full max-h-screen" />
                </div>
                <div className="group relative bg-gray-100 p-4 md-p-6 lg:p-8 rounded-3xl flex flex-wrap md:flex-nowrap gap-3 overflow-hidden">
                    <div className="bg-sky-700 p-6 h-20  rounded-full">
                        <svg width="32px" height="32px" viewBox="0 -39.5 1103 1103" className="group-hover:fill-white" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M1102.698193 358.4512c0-3.557452-2.167467-5.193956-4.835556-3.654163l-236.870163 136.757096v499.986963c0 7.114904 4.331141 10.389807 9.667319 7.310223l227.202844-131.176297c2.668089-1.539793 4.835556-5.679407 4.835556-9.236859V358.4512z" fill="#4D6FBB" /><path d="M862.424178 490.727348L249.573452 136.897422c-4.279941-2.470874-7.755852 0.155496-7.755852 5.863348V644.266667c0 2.853926 1.737007 6.174341 3.877926 7.408829L843.036444 996.551111c10.7008 6.178133 19.387733-0.388741 19.387734-14.656474V490.727348z" fill="#4D6FBB" /><path d="M499.626667 3.822933c-8.004267-4.621274-20.131081-5.123793-27.062045-1.120711L246.497659 133.2224c-6.932859 4.001185-6.062459 11.002311 1.941808 15.623585l595.897837 344.041245c8.004267 4.621274 20.131081 5.123793 27.062044 1.122607l226.066963-130.520178c6.932859-4.003081 6.062459-11.004207-1.941807-15.625481L499.626667 3.822933z" fill="#6D8ACA" /><path d="M499.626667 508.237748c-8.004267-4.621274-20.131081-5.123793-27.062045-1.120711l-226.066963 130.520178c-6.932859 4.001185-6.062459 11.002311 1.941808 15.623585l595.897837 344.041244c8.004267 4.621274 20.131081 5.123793 27.062044 1.122608l226.066963-130.520178c6.932859-4.003081 6.062459-11.004207-1.941807-15.625481L499.626667 508.237748z" fill="#4D6FBB" /><path d="M29.743407 243.065363c-2.254696-1.302756-5.669926-1.443081-7.621214-0.316682l-18.194963 10.503586c-1.951289 1.128296-1.706667 3.100444 0.548029 4.401303l489.946074 282.870519c2.254696 1.302756 5.669926 1.443081 7.623111 0.316681l18.193067-10.503585c1.953185-1.128296 1.706667-3.100444-0.546133-4.401304L29.743407 243.065363z" fill="#4762AF" /><path d="M521.293748 529.068563c0-0.893156-0.542341-1.302756-1.211733-0.917807l-21.822578 12.598992c-0.669393 0.386844-1.211733 1.426015-1.211733 2.317274v429.074963c0 0.891259 0.542341 1.302756 1.211733 0.915911l21.822578-12.598992c0.669393-0.386844 1.211733-1.424119 1.211733-2.317274V529.068563z" fill="#4762AF" /><path d="M499.520474 549.986607c0-7.332978-4.463881-15.864415-9.963141-19.038814L9.965037 254.0544C4.463881 250.88 0 254.255407 0 261.586489v416.278755c0 7.331081 4.463881 15.862519 9.965037 19.036919l479.592296 276.893393c5.499259 3.176296 9.963141-0.199111 9.963141-7.532089V549.986607z" fill="#6D8ACA" /><path d="M467.757511 564.521719c0-6.174341-3.758459-13.357511-8.389215-16.031289l-423.006815-244.224c-4.630756-2.673778-8.391111 0.16877-8.391111 6.343111v350.53037c0 6.174341 3.760356 13.357511 8.391111 16.031289l423.006815 244.222104c4.630756 2.673778 8.389215-0.16877 8.389215-6.343111V564.521719z" fill="#92B3E1" /><path d="M138.611674 802.876681c-7.918933-4.57197-19.9168-5.0688-26.773807-1.109333L12.42643 859.162548c-6.858904 3.959467-5.996089 10.886637 1.922844 15.458608l250.989985 144.909274c7.918933 4.57197 19.9168 5.0688 26.775704 1.109333l99.409541-57.3952c6.858904-3.959467 5.997985-10.886637-1.920948-15.458607L138.611674 802.876681z" fill="#4762AF" /><path d="M247.864889 834.254696l-23.521659-13.579377v46.502874l23.521659 13.579377v-46.502874z" fill="#E4E9F5" /><path d="M1076.942696 500.366222l-163.627615 94.471585v57.425541l163.627615-94.471585v-57.425541zM1076.942696 604.715615l-163.627615 94.471585v57.423644l163.627615-94.469688v-57.425541z" fill="#6D8ACA" /><path d="M1011.308089 756.110222c8.929659-5.15603 16.177304-0.969007 16.177304 9.341156s-7.247644 22.867437-16.177304 28.02157c-8.929659 5.15603-16.1792 0.970904-16.1792-9.341155 0-10.310163 7.249541-22.865541 16.1792-28.021571z" fill="#FFFFFF" /></svg>
                    </div>
                    <div className="flex flex-col gap-2 group-hover:text-white">
                        <h2 className="text-2xl font-bold lg:text-3xl">Lorem ipsum dolor sit adipisicing elit. Pariatur</h2>
                        <span className="bg-sky-700 h-1 w-16 lg:w-32"></span>
                        <p className="text-md text-gray-700 group-hover:text-white">Because we really love and feel passion for what we do. We always seek the benefit and satisfaction of our clients, through personalized advice and quality in all our developments. Our web developers work in a single office space and are a well-coordinated team. As a leading Software house in Pakistan, We provide clients with all types of services for website creation, increase SEO traffic, conversion optimization Logos and Icons, and Internet resources modernization. Our software house mission is spreading the best services in the industry of online market.</p>
                    </div>

                    <div
                        className="absolute top-0 left-0 h-full w-0  bg-gradient-to-r from-sky-950  via-sky-700 to-sky-600 group-hover:w-full  duration-500">
                        <div className="hidden group-hover:flex group-hover:p-4 group-hover:md:p-6 group-hover:lg:p-8 group-hover:flex-wrap md:group-hover:flex-nowrap gap-3 overflow-hidden">
                            <div className="group-hover:bg-sky-600 bg-sky-700 p-6 h-20  rounded-full">
                                <svg width="32px" height="32px" viewBox="0 -39.5 1103 1103" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M1102.698193 358.4512c0-3.557452-2.167467-5.193956-4.835556-3.654163l-236.870163 136.757096v499.986963c0 7.114904 4.331141 10.389807 9.667319 7.310223l227.202844-131.176297c2.668089-1.539793 4.835556-5.679407 4.835556-9.236859V358.4512z" fill="#4D6FBB" /><path d="M862.424178 490.727348L249.573452 136.897422c-4.279941-2.470874-7.755852 0.155496-7.755852 5.863348V644.266667c0 2.853926 1.737007 6.174341 3.877926 7.408829L843.036444 996.551111c10.7008 6.178133 19.387733-0.388741 19.387734-14.656474V490.727348z" fill="#4D6FBB" /><path d="M499.626667 3.822933c-8.004267-4.621274-20.131081-5.123793-27.062045-1.120711L246.497659 133.2224c-6.932859 4.001185-6.062459 11.002311 1.941808 15.623585l595.897837 344.041245c8.004267 4.621274 20.131081 5.123793 27.062044 1.122607l226.066963-130.520178c6.932859-4.003081 6.062459-11.004207-1.941807-15.625481L499.626667 3.822933z" fill="#6D8ACA" /><path d="M499.626667 508.237748c-8.004267-4.621274-20.131081-5.123793-27.062045-1.120711l-226.066963 130.520178c-6.932859 4.001185-6.062459 11.002311 1.941808 15.623585l595.897837 344.041244c8.004267 4.621274 20.131081 5.123793 27.062044 1.122608l226.066963-130.520178c6.932859-4.003081 6.062459-11.004207-1.941807-15.625481L499.626667 508.237748z" fill="#4D6FBB" /><path d="M29.743407 243.065363c-2.254696-1.302756-5.669926-1.443081-7.621214-0.316682l-18.194963 10.503586c-1.951289 1.128296-1.706667 3.100444 0.548029 4.401303l489.946074 282.870519c2.254696 1.302756 5.669926 1.443081 7.623111 0.316681l18.193067-10.503585c1.953185-1.128296 1.706667-3.100444-0.546133-4.401304L29.743407 243.065363z" fill="#4762AF" /><path d="M521.293748 529.068563c0-0.893156-0.542341-1.302756-1.211733-0.917807l-21.822578 12.598992c-0.669393 0.386844-1.211733 1.426015-1.211733 2.317274v429.074963c0 0.891259 0.542341 1.302756 1.211733 0.915911l21.822578-12.598992c0.669393-0.386844 1.211733-1.424119 1.211733-2.317274V529.068563z" fill="#4762AF" /><path d="M499.520474 549.986607c0-7.332978-4.463881-15.864415-9.963141-19.038814L9.965037 254.0544C4.463881 250.88 0 254.255407 0 261.586489v416.278755c0 7.331081 4.463881 15.862519 9.965037 19.036919l479.592296 276.893393c5.499259 3.176296 9.963141-0.199111 9.963141-7.532089V549.986607z" fill="#6D8ACA" /><path d="M467.757511 564.521719c0-6.174341-3.758459-13.357511-8.389215-16.031289l-423.006815-244.224c-4.630756-2.673778-8.391111 0.16877-8.391111 6.343111v350.53037c0 6.174341 3.760356 13.357511 8.391111 16.031289l423.006815 244.222104c4.630756 2.673778 8.389215-0.16877 8.389215-6.343111V564.521719z" fill="#92B3E1" /><path d="M138.611674 802.876681c-7.918933-4.57197-19.9168-5.0688-26.773807-1.109333L12.42643 859.162548c-6.858904 3.959467-5.996089 10.886637 1.922844 15.458608l250.989985 144.909274c7.918933 4.57197 19.9168 5.0688 26.775704 1.109333l99.409541-57.3952c6.858904-3.959467 5.997985-10.886637-1.920948-15.458607L138.611674 802.876681z" fill="#4762AF" /><path d="M247.864889 834.254696l-23.521659-13.579377v46.502874l23.521659 13.579377v-46.502874z" fill="#E4E9F5" /><path d="M1076.942696 500.366222l-163.627615 94.471585v57.425541l163.627615-94.471585v-57.425541zM1076.942696 604.715615l-163.627615 94.471585v57.423644l163.627615-94.469688v-57.425541z" fill="#6D8ACA" /><path d="M1011.308089 756.110222c8.929659-5.15603 16.177304-0.969007 16.177304 9.341156s-7.247644 22.867437-16.177304 28.02157c-8.929659 5.15603-16.1792 0.970904-16.1792-9.341155 0-10.310163 7.249541-22.865541 16.1792-28.021571z" fill="#FFFFFF" /></svg>
                            </div>
                            <div className="flex flex-col gap-2 group-hover:text-white">
                                <h2 className="text-2xl font-bold lg:text-3xl">Lorem ipsum dolor sit adipisicing elit. Pariatur</h2>
                                <span className="bg-white h-1 w-16 lg:w-32"></span>
                                <p className="text-md text-gray-700 group-hover:text-white">Because we really love and feel passion for what we do. We always seek the benefit and satisfaction of our clients, through personalized advice and quality in all our developments. Our web developers work in a single office space and are a well-coordinated team. As a leading Software house in Pakistan, We provide clients with all types of services for website creation, increase SEO traffic, conversion optimization Logos and Icons, and Internet resources modernization. Our software house mission is spreading the best services in the industry of online market.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DevelopmentServices;