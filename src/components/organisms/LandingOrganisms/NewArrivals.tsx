'use client'
import Button from '@/components/atoms/Button/Button'
import CardSkeleton from '@/components/atoms/Skeleton/CardSkeleton'
import ProductCard from '@/components/molecules/ProductCard/ProductCard'
import API_ENDPOINTS from '@/core/constants/api-endpoints/api-endpoints.constants'
import fetchHandler from '@/core/helpers/fetchHandler'
import IProduct from '@/core/types/product.types'
import { useQuery } from '@tanstack/react-query'

const NewArrivals = ({ initialData }: { initialData: IProduct[] }) => {
    const { data, isFetching, error } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetchHandler(API_ENDPOINTS.products),
        initialData: initialData
    })

    if (error) return <p>خطا در دریافت اطلاعات!</p>

    if (!data || !Array.isArray(data)) return <p>داده‌ای برای نمایش وجود ندارد.</p>
    return (
        <div className='px-5 md:px-10 mt-16'>
            <h2 className='text-center font-bold text-4xl mb-10 mt-20'>NEW ARRIVALS</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {data
                    .slice(-4)
                    .map((product: IProduct, index: number) =>
                        isFetching ? (
                            <CardSkeleton key={product.id} />
                        ) : index < 4 ? (
                            <ProductCard key={product.id} product={product} />
                        ) : null
                    )}
            </div>

            <Button variant='outlined' color='secondary' className='!rounded-xl !block !mx-auto !my-20 !px-10 !py-2'>
                View All
            </Button>
        </div>
    )
}

export default NewArrivals
