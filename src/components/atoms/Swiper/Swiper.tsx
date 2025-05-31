'use client'

import { Swiper as SwiperComponent } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import React from 'react'
import ISwiperProps from './Swiper.types'

const Swiper = ({ autoPlay = false, children, spaceBetween = 50, ...props }: ISwiperProps) => {
    return (
        <SwiperComponent
            modules={[Navigation, Pagination, Autoplay]}
            /* pass from outside -> Ali say */
            pagination={props.pagination ? { clickable: true } : false}
            spaceBetween={spaceBetween}
            autoplay={autoPlay ? { delay: 1000, disableOnInteraction: false } : false}
            {...props}
        >
            {children}
        </SwiperComponent>
    )
}

export default Swiper
