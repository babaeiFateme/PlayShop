import { SwiperProps } from 'swiper/react'

interface ISwiperProps extends SwiperProps {
    children: React.ReactNode
    autoPlay?: boolean
}

export default ISwiperProps
