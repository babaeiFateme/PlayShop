import Brands from '@/components/organisms/LandingOrganisms/Brands'
import Hero from '@/components/organisms/LandingOrganisms/Hero'
import NewArrivals from '@/components/organisms/LandingOrganisms/NewArrivals'
import TopSelling from '@/components/organisms/LandingOrganisms/TopSelling'
import ReactQueryProvider from '@/lib/react-query-provider'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import React from 'react'

const fetchProducts = async () => {

    const res = await fetch('https://api.escuelajs.co/api/v1/products')
    if (!res.ok) {
        throw new Error('Network response was not ok')
    }
    return res.json()
}
const Landing = async () => {

    const queryClient = new QueryClient()

    await queryClient.ensureQueryData({
        queryKey: ['products'],
        queryFn: fetchProducts
    })

     const dehydratedState = dehydrate(queryClient)


    return (
        <>
            <Hero />

            <Brands />

            <NewArrivals />

            <ReactQueryProvider state={dehydratedState}>
                <TopSelling />
            </ReactQueryProvider>


        </>
    )
}

export default Landing