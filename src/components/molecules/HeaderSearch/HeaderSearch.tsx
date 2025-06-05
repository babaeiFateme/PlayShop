'use client'

import EmptyState from '@/components/atoms/EmptyState/EmptyStates'
import TextInput from '@/components/atoms/TextInput/TextInput'
import ROUTES from '@/core/constants/routes/routes.constant'
import fetchHandler from '@/core/helpers/fetchHandler'
import IProduct from '@/core/types/product.types'
import { Button, CircularProgress } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeaderSearch = ({
    searchTerm,
    setSearchTerm,
    debouncedValue
}: {
    searchTerm: string
    setSearchTerm: (value: string) => void
    debouncedValue: string
}) => {
    const showDropdown = debouncedValue.trim() !== ''

    const { data: searchResult = [], isFetching } = useQuery<IProduct[]>({
        queryKey: ['products', debouncedValue],
        queryFn: () => fetchHandler(`/products/?title=${debouncedValue}`),
        enabled: debouncedValue.trim().length > 0,
        staleTime: 1000 * 60
    })

    const clearSearch = () => {
        setSearchTerm('')
    }

    return (
        <div className='w-full'>
            <TextInput
                placeholder='search'
                name='search'
                className='border border-gray-2 w-full'
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
            />
            {showDropdown && (
                <div className='rounded-lg z-40 shadow-2xl bg-gray-50 max-h-[300px] overflow-y-auto absolute top-16 w-full p-2'>
                    <div className='flex items-center justify-between flex-wrap mb-2'>
                        <div>
                            Search Result: <strong>{searchTerm}</strong>
                        </div>
                        <Button variant='outlined' onClick={clearSearch}>
                            Close
                        </Button>
                    </div>

                    {searchResult.length > 0 ? (
                        <ul className='p-0'>
                            {searchResult.map((item) => (
                                <li
                                    key={item.id}
                                    className='flex items-center gap-2 flex-wrap p-4 border-b border-gray-200 last:border-0'
                                >
                                    <Image
                                        width={60}
                                        height={60}
                                        src={item.images[0]}
                                        alt={item.title}
                                        className='aspect-square rounded-md'
                                    />
                                    <div>
                                        <h3>
                                            <Link href={`${ROUTES.Products}/${item.slug}`}>{item.title}</Link>
                                        </h3>
                                        <div>{item.price} $</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : isFetching ? (
                        <div className='flex justify-center my-4'>
                            <CircularProgress />
                        </div>
                    ) : (
                        <EmptyState />
                    )}
                </div>
            )}
        </div>
    )
}

export default HeaderSearch

