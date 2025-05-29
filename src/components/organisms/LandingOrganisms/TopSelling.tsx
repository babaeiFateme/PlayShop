'use client'
import Button from "@/components/atoms/Button/Button"
import CardSkeleton from "@/components/atoms/Skeleton/CardSkeleton"
import ProductCard from "@/components/molecules/ProductCard/ProductCard"
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

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

const TopSelling = () => {
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
        <div className="px-5 md:px-10 mt-16">
            <h2 className="text-center font-bold text-4xl mb-10 mt-20">TOP SELLING</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    data.map((product: Product, index: number) =>
                        ((!hydrated || isFetching) && index < 4)
                            ? <CardSkeleton key={product.id} />
                            : (index < 4 ? <ProductCard key={product.id} product={product} /> : null)
                    )
                }

            </div>

            <Button variant="outlined" color="secondary" className="!rounded-xl !block !mx-auto !my-20 !px-10 !py-2">
                View All
            </Button>
        </div>
    )
}

export default TopSelling