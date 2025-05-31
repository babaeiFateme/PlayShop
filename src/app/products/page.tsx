import { dehydrate, QueryClient } from '@tanstack/react-query'
import React from 'react'
import Products from '@/template/Products'
import ReactQueryProvider from '@/lib/react-query-provider'
import fetchHandler from '@/core/helpers/fetchHandler'
import API_ENDPOINTS from '@/core/constants/api-endpoints/api-endpoints.constants'

const Page = async () => {
    const queryClient = new QueryClient()

    await queryClient.ensureQueryData({
        queryKey: ['products'],
        queryFn: () => fetchHandler(API_ENDPOINTS.products)
    })

    const dehydratedState = dehydrate(queryClient)

    return (
        <ReactQueryProvider state={dehydratedState}>
            <Products />
        </ReactQueryProvider>
    )
}

export default Page
