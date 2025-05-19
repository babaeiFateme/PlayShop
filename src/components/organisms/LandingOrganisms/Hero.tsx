'use client'

import React from "react";
import banner from "../../../../public/images/pages/landing/Rectangle 2(3).png";
import Image from "next/image";
import { useTheme } from '@mui/material/styles';
import Button from "@/components/atoms/Button/Button";

const Hero = () => {
    const theme = useTheme();

    return (
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 bg-[#F2F0F1]">
            <div>
                <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>

                <p>
                    Browse through our diverse range of meticulously crafted
                    garments, designed to bring out your individuality and cater
                    to your sense of style.
                </p>
                
                <Button
                    variant="contained"
                    style={{ background: theme.palette.custom.black.main }}
                    className="rounded-lg"
                >
                    Shop Now
                </Button>
            </div>

            <div>
                <Image
                    src={banner.src}
                    alt="banner"
                    width={1024}
                    height={613}
                    className="w-full"
                />
            </div>
        </div>
    );
};

export default Hero;
