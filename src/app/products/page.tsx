import React from 'react'
import Products from '@/template/Products'
import fetchHandler from '@/core/helpers/fetchHandler'
import API_ENDPOINTS from '@/core/constants/api-endpoints/api-endpoints.constants'

const Page = async () => {
    const fetchResponse = await fetchHandler(API_ENDPOINTS.products)

    return <Products initialData={fetchResponse} />
}

export default Page
