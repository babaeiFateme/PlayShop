import Brands from '@/components/organisms/LandingOrganisms/Brands'
import Hero from '@/components/organisms/LandingOrganisms/Hero'
import NewArrivals from '@/components/organisms/LandingOrganisms/NewArrivals'
import TopSelling from '@/components/organisms/LandingOrganisms/TopSelling'
import IProduct from '@/core/types/product.types'

import React from 'react'

const Landing = async ({ initialData }: { initialData: IProduct[] }) => {
    return (
        <>
            <Hero />

            <Brands />

            <NewArrivals initialData={initialData} />

            <TopSelling initialData={initialData} />
        </>
    )
}

export default Landing
