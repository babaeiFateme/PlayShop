import Brands from '@/components/organisms/LandingOrganisms/Brands'
import Hero from '@/components/organisms/LandingOrganisms/Hero'
import TopSelling from '@/components/organisms/LandingOrganisms/TopSelling'
import React from 'react'

const Landing = () => {
    return (
        <>
            <Hero />

            <Brands />

            <TopSelling />
        </>
    )
}

export default Landing