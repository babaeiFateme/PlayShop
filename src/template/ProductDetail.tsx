'use client'

import Button from '@/components/atoms/Button/Button'
// import CardSkeleton from '@/components/atoms/Skeleton/CardSkeleton'
import TextInput from '@/components/atoms/TextInput/TextInput'
import ProductCard from '@/components/molecules/ProductCard/ProductCard'
// import fetchHandler from '@/core/helpers/fetchHandler'
import IProduct from '@/core/types/product.types'
import { useTheme } from '@mui/material'
// import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React from 'react'

const ProductDetail = ({
    product,
    related,
    // productEndPoint,
    // relatedEndPoint
}: {
    product: IProduct
    related: IProduct[]
    productEndPoint: string
    relatedEndPoint: string
}) => {
    const theme = useTheme()

    // const { data: productData = product } = useQuery({
    //     queryKey: ['product'],
    //     queryFn: () => fetchHandler(productEndPoint),
    //     initialData: product
    // })

    // const { data: relatedData = related, isFetching: isFetchingRelated } = useQuery({
    //     queryKey: ['related-products'],
    //     queryFn: () => fetchHandler(relatedEndPoint),
    //     initialData: related
    // })

    return (
        <div className='px-5 md:px-20 py-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div>
                    <Image
                        width={400}
                        height={400}
                        src={product.images?.[0] || '/placeholder.jpg'}
                        alt={product.title}
                        className='w-full aspect-[1.2] max-w-[300px] mx-auto md:mx-0 md:max-w-[700px] rounded-md object-cover'
                        loading='lazy'
                    />
                </div>

                <div className='relative'>
                    <h1 className='mb-5 lg:text-4xl font-bold grow'>{product?.title}</h1>

                    <div className='my-2'>
                        <span className='text-lg font-semibold'>Price: </span>
                        <span className='text-2xl !text-primary'>{product?.price} $</span>
                    </div>

                    <div className='my-2'>
                        <span className='text-lg font-semibold'>Category: </span>
                        <span className='!text-primary'>{product?.category?.name}</span>
                    </div>

                    <hr className='my-10' />

                    <div className='flex gap-3'>
                        <Button
                            variant='contained'
                            size='large'
                            style={{
                                backgroundColor: theme.palette.custom.black.main
                            }}
                            className='w-full basis-9/12'
                        >
                            Add To Cart
                        </Button>
                        <div className='flex basis-3/12 border-2 border-gray-200 rounded-md'>
                            <Button>+</Button>
                            <TextInput
                                defaultValue={1}
                                variant='outlined'
                                className='!text-center'
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            border: 'none',
                                            textAlign: 'center'
                                        },
                                        '&:hover fieldset': {
                                            border: 'none'
                                        },
                                        '&.Mui-focused fieldset': {
                                            border: 'none'
                                        }
                                    }
                                }}
                            />
                            <Button>-</Button>
                        </div>
                    </div>

                    <div className='mt-5 text-lg text-justify'>{product?.description}</div>
                </div>
            </div>

            <hr  className='my-20'/>

            <div>
                <h2 className='uppercase text-lg lg:text-4xl font-semibold text-center mb-10'>You might also like</h2>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 px-2 lg:px-[40px] gap-8 md:max-w-[900px] lg:max-w-[1200px] mx-auto'>
                    {related.map((product: IProduct) =>
                        // isFetchingRelated ? (
                        //     <CardSkeleton key={product.id} />
                        // ) : (
                            <ProductCard key={product.id} product={product} />
                        // )
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductDetail

