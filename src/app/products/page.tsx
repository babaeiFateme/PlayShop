import { dehydrate, QueryClient } from '@tanstack/react-query'
import React from 'react'
import Products from '@/template/Products'
import ReactQueryProvider from '@/lib/react-query-provider'
import fetchHandler from '@/core/helpers/fetchHandler'

const Page = async () => {
    const queryClient = new QueryClient()

    await queryClient.ensureQueryData({
        queryKey: ['products'],
        queryFn: () => fetchHandler('/products')
    })

    const dehydratedState = dehydrate(queryClient)

    return (
        <ReactQueryProvider state={dehydratedState}>
            <Products />
        </ReactQueryProvider>
    )
}

export default Page
