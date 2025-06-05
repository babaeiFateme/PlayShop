'use client'

import CardSkeleton from '@/components/atoms/Skeleton/CardSkeleton'
import ProductCard from '@/components/molecules/ProductCard/ProductCard'
import API_ENDPOINTS from '@/core/constants/api-endpoints/api-endpoints.constants'
import fetchHandler from '@/core/helpers/fetchHandler'
import IProduct from '@/core/types/product.types'
import { useQuery } from '@tanstack/react-query'

const Products = ({ initialData }: { initialData: IProduct[] }) => {
    const { data, error, isFetching } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetchHandler(API_ENDPOINTS.products),
        initialData: initialData
    })

    if (error) return <p>خطا در دریافت اطلاعات!</p>

    if (!data || !Array.isArray(data)) return <p>داده‌ای برای نمایش وجود ندارد.</p>

    return (
        <div className='block md:grid grid-cols-10 md:max-w-[900px] gap-5 lg:max-w-[1800px] mx-auto px-2 lg:px-[40px]'>
            <div className='md:col-span-4 lg:col-span-3 hidden md:block'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, et.
            </div>
            <div className='md:col-span-6 lg:col-span-7'>
                <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {data.map((product: IProduct) =>
                        isFetching ? (
                            <CardSkeleton key={product.id} />
                        ) : (
                            <ProductCard key={product.id} product={product} />
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Products
