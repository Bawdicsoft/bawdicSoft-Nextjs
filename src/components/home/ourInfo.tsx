import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
interface OurInfoSectionSectionProps { }

const OurInfoSection: FC<OurInfoSectionSectionProps> = () => {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 py-24">
                <Image src={"/images/corporateWebsites.jpg"} alt="" width={400} height={400} className="rounded-3xl w-full" />
                <div className="flex flex-col gap-2 self-center ">
                    <h2 className="text-2xl font-bold lg:text-4xl">Lorem ipsum dolor sit adipisicing elit. Pariatur</h2>
                    <span className="bg-sky-700 h-1 w-16 lg:w-32"></span>
                    <p className="text-md text-gray-700">Exytex technologies is an IT Software Company currently working in Pakistan. We provide services for the professional web development, Graphic Designing, Digital Marketing, and mobile applications.
                        We create a unique web design and corporate identity, as well as promote websites and conduct a comprehensive advertising campaign. Exytex is a top software house in Pakistan registered by PSEB and also the best web applications and software Development Company in Pakistan. Our main advantage is that you can go through the entire process of web development.</p>
                </div>
            </div>
        </div>
    );
};
export default OurInfoSection;