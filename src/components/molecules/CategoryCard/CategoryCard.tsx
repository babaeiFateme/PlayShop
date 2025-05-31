import ICategory from '@/core/types/category.types'
import Image from 'next/image'
import React from 'react'

const CategoryCard = ({ category }: { category: ICategory }) => {
    const imageUrl = category?.image

    const validImageSrc =
        imageUrl && imageUrl !== 'string.png'
            ? imageUrl.startsWith('http')
                ? imageUrl
                : `https://fakeapi.platzi.com/${imageUrl}`
            : '/placeholder.png'

    return (
        <div className='rounded-md bg-white'>
            <div className='bg-gray-100 rounded-lg relative'>
                <Image
                    src={validImageSrc}
                    alt={category?.name}
                    width={100}
                    height={100}
                    loading='lazy'
                    className='block mx-auto rounded-md aspect-[1] object-cover w-full'
                />
            </div>

            <div className='flex flex-col gap-3 mt-3'>
                <h3 className='line-clamp-1 font-semibold text-lg'>{category?.name}</h3>
            </div>
        </div>
    )
}

export default CategoryCard
