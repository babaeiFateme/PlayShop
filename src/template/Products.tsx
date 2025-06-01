'use client'

import CardSkeleton from '@/components/atoms/Skeleton/CardSkeleton'
import ProductCard from '@/components/molecules/ProductCard/ProductCard'
import API_ENDPOINTS from '@/core/constants/api-endpoints/api-endpoints.constants'
import fetchHandler from '@/core/helpers/fetchHandler'
import IProduct from '@/core/types/product.types'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

const Products = () => {
    const { data, error, isFetching } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetchHandler(API_ENDPOINTS.products)
    })

    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
        setHydrated(true)
    }, [])

    if (error) return <p>خطا در دریافت اطلاعات!</p>

    if (!data || !Array.isArray(data)) return <p>داده‌ای برای نمایش وجود ندارد.</p>

    return (
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 px-2 lg:px-[40px] gap-8 md:max-w-[900px]  lg:max-w-[1200px] mx-auto'>
            {data.map((product: IProduct) =>
                !hydrated || isFetching ? (
                    <CardSkeleton key={product.id} />
                ) : (
                    <ProductCard key={product.id} product={product} />
                )
            )}
        </div>
    )
}

export default Products
