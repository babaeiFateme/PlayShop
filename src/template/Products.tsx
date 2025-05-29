'use client'

import CardSkeleton from '@/components/atoms/Skeleton/CardSkeleton';
import ProductCard from '@/components/molecules/ProductCard/ProductCard'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
}
const fetchProducts = async () => {
    const res = await fetch('https://api.escuelajs.co/api/v1/products')
    if (!res.ok) throw new Error('Network error')
    return res.json()
}

const Products = () => {
    const { data, error, isFetching } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    })

    const [hydrated, setHydrated] = useState(false)
    
    useEffect(() => {
        setHydrated(true)
    }, [])

    if (error) return <p>خطا در دریافت اطلاعات!</p>

    if (!data || !Array.isArray(data)) return <p>داده‌ای برای نمایش وجود ندارد.</p>

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  px-[40px] gap-8 md:max-w-[900px]  lg:max-w-[1200px] mx-auto'>

            {
                data.map((product: Product) => (
                    (!hydrated || isFetching) ? <CardSkeleton key={product.id} /> : <ProductCard key={product.id} product={product} />
                ))

            }
        </div>
    )
}

export default Products
