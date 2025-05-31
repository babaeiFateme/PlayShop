'use client'
import CardSkeleton from '@/components/atoms/Skeleton/CardSkeleton'
import CategoryCard from '@/components/molecules/CategoryCard/CategoryCard'
import API_ENDPOINTS from '@/core/constants/api-endpoints/api-endpoints.constants'
import fetchHandler from '@/core/helpers/fetchHandler'
import ICategory from '@/core/types/category.types'
import { useQuery } from '@tanstack/react-query'

const Categories = ({ initialData }: { initialData: ICategory }) => {
    const { data, error, isFetching } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetchHandler(API_ENDPOINTS.categories),
        initialData
    })

    if (error) return <p>خطا در دریافت اطلاعات!</p>

    if (!data || !Array.isArray(data)) return <p>داده‌ای برای نمایش وجود ندارد.</p>

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-2 lg:px-[40px] gap-8 md:max-w-[900px]  lg:max-w-[1200px] mx-auto'>
            {data.map((category: ICategory) =>
                isFetching ? <CardSkeleton key={category.id} /> : <CategoryCard key={category.id} category={category} />
            )}
        </div>
    )
}

export default Categories
