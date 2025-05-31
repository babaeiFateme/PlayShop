import Brands from '@/components/organisms/LandingOrganisms/Brands'
import Hero from '@/components/organisms/LandingOrganisms/Hero'
import NewArrivals from '@/components/organisms/LandingOrganisms/NewArrivals'
import TopSelling from '@/components/organisms/LandingOrganisms/TopSelling'
import fetchHandler from '@/core/helpers/fetchHandler'
import ReactQueryProvider from '@/lib/react-query-provider'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import React from 'react'

const Landing = async () => {
    const queryClient = new QueryClient()

    await queryClient.ensureQueryData({
        queryKey: ['products'],
        queryFn: () => fetchHandler('products')
    })

    const dehydratedState = dehydrate(queryClient)

    return (
        <>
            <Hero />

            <Brands />

            <ReactQueryProvider state={dehydratedState}>
                <NewArrivals />
            </ReactQueryProvider>

            <ReactQueryProvider state={dehydratedState}>
                <TopSelling />
            </ReactQueryProvider>
        </>
    )
}

export default Landing
