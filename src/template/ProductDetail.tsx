'use client'
import Button from '@/components/atoms/Button/Button'
import TextInput from '@/components/atoms/TextInput/TextInput'
import IProduct from '@/core/types/product.types'
import { useTheme } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const ProductDetail = ({ product }: { product: IProduct }) => {
    const theme = useTheme()
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div>
                    <Image
                        width={400}
                        height={400}
                        src={product.images[0]}
                        alt={product.title}
                        className='w-full aspect-[1.2] max-w-[700px] rounded-md object-cover'
                        loading='lazy'
                    />
                </div>

                <div className=' relative'>
                    <h1 className='mb-5 lg:text-4xl font-bold grow'>{product?.title}</h1>

                    <div className='my-2'>
                        <span className='text-lg font-semibold'>Price: </span>
                        <span className='text-2xl !text-primary'>{product?.price} $</span>
                    </div>

                    <div className='my-2'>
                        <span className='text-lg font-semibold'>Category: </span>
                        <span className=' !text-primary'>{product?.category?.name}</span>
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
                        <div className='flex basis-3/12  border-2 border-gray-200 rounded-md'>
                            <Button>+</Button>
                            <TextInput
                                defaultValue={1}
                                variant='outlined'
                                className='!text-center'
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            border: 'none',
                                            textAlign:'center'
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

                    <div className='mt-5 text-lg'>{product?.description}</div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail

