'use client'

import React from "react";
import banner from "../../../../public/images/pages/landing/hero.png";
import Image from "next/image";
import { useTheme } from '@mui/material/styles';
import Button from "@/components/atoms/Button/Button";

const Hero = () => {
    const theme = useTheme();

    const approach = [
        {
            id: 1,
            value: '200+',
            label: 'International Brands'
        },

        {
            id: 2,
            value: '2,000+',
            label: 'High-Quality Products'
        },

        {
            id: 3,
            value: '30,000+',
            label: 'Happy Customers'
        },
    ]

    return (
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 bg-[#F2F0F1] px-10 py-20">
            <div>
                <h1 className="font-bold lg:text-[60px] max-w-[600px]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>

                <p className="font-medium lg:text-lg text-gray-700 max-w-[600px] mb-10">
                    Browse through our diverse range of meticulously crafted
                    garments, designed to bring out your individuality and cater
                    to your sense of style.
                </p>

                <Button
                    variant="contained"
                    style={{ background: theme.palette.custom.black.main }}
                    className="!rounded-xl !px-10 !py-2"
                >
                    Shop Now
                </Button>

                <ul className="flex gap-4 items-center flex-wrap mt-15">
                    {approach.map((item) => (
                        <li key={item.id} className="flex flex-col gap-2 text-center border-l-1 border-gray-300 p-2 first:border-0">
                            <span className="text-md lg:text-3xl font-semibold">
                                {item.value}
                            </span>
                            <span className="text-gray-500">{item.label}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <Image
                    src={banner.src}
                    alt="banner"
                    width={1024}
                    height={613}
                    className="w-full aspect-[4/3] object-cover"
                />
            </div>

        </div>
    );
};

export default Hero;
