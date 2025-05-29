'use client'

import { Swiper as SwiperComponent } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import React from 'react'
import { SwiperOptions } from 'swiper/types'

interface CustomSwiperProps {
    children: React.ReactNode
    slidePreview?: number
    autoPlay?: boolean
    loop?: boolean,
    navigation?: boolean,
    pagination?: boolean,
    breakpoints?: SwiperOptions['breakpoints']

}

const Swiper: React.FC<CustomSwiperProps> = ({
    slidePreview = 1,
    autoPlay = false,
    loop = false,
    breakpoints = {},
    children,
    ...props
}) => {
    return (
        <SwiperComponent
            modules={[Navigation, Pagination, Autoplay]}
            pagination={props.pagination ? { clickable: true } : false}
            spaceBetween={50}
            slidesPerView={slidePreview}
            autoplay={autoPlay ? { delay: 1000, disableOnInteraction: false } : false}
            loop={loop}
            navigation={props.navigation ?? true}
            breakpoints={breakpoints}
            {...props}
        >
            {children}
        </SwiperComponent>
    )
}

export default Swiper
