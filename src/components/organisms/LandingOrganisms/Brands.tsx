'use client'
import Swiper from '@/components/atoms/Swiper/Swiper'
import { SwiperSlide } from 'swiper/react'
import Image from 'next/image'

import brand1 from '@images/pages/landing/brand/brand-1.png'
import brand2 from '@images/pages/landing/brand/brand-2.png'
import brand3 from '@images/pages/landing/brand/brand-3.png'
import brand4 from '@images/pages/landing/brand/brand-4.png'

const Brands = () => {
    const brands = [brand1, brand2, brand1, brand3, brand2, brand4]

    return (
        <div className='bg-black text-white p-4 md:p-8'>
            <Swiper
                slidesPerView={5}
                autoPlay
                loop
                navigation={false}
                pagination={false}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    575: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 3
                    },
                    992: {
                        slidesPerView: 3
                    },
                    1024: {
                        slidesPerView: 4
                    },
                    1200: {
                        slidesPerView: 5
                    }
                }}
            >
                {brands.map((brand, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={brand.src}
                            alt={`Brand ${index + 1}`}
                            width={300}
                            height={200}
                            className='object-contain aspect-[2] max-w-[100px] md:max-w-[200px] mx-auto block'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Brands
