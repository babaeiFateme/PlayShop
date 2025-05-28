'use client'

import ProductCard from '@/components/molecules/ProductCard/ProductCard'
import { useQuery } from '@tanstack/react-query'

const fetchProducts = async () => {
    const res = await fetch('https://api.escuelajs.co/api/v1/products')
    if (!res.ok) throw new Error('Network error')
    return res.json()
}

const Products = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    })

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>خطا در دریافت اطلاعات!</p>
    if (!data || !Array.isArray(data)) return <p>داده‌ای برای نمایش وجود ندارد.</p>

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-[40px]'>
            {data.map((product: any) => (
                <ProductCard key={product.id} product={product}/>

                // <li key={product.id}>{product.title}</li>
            ))}
        </div>
    )
}

export default Products
