import Brands from '@/components/organisms/LandingOrganisms/Brands'
import Hero from '@/components/organisms/LandingOrganisms/Hero'
import NewArrivals from '@/components/organisms/LandingOrganisms/NewArrivals'
import TopSelling from '@/components/organisms/LandingOrganisms/TopSelling'
import React from 'react'

const Landing = () => {
    return (
        <>
            <Hero />

            <Brands />

            <NewArrivals/>

            <TopSelling />


        </>
    )
}

export default Landing