import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '../../../../public/images/general/logo.png'
import Link from 'next/link'
import TextInput from '@/components/atoms/TextInput/TextInput'
import Profile from '@/components/icons/Profile'
import Shopping from '@/components/icons/Shopping'
import ROUTES from '@/core/constants/routes/routes.constant'
import fetchHandler from '@/core/helpers/fetchHandler'
import useDebounce from '@/core/hooks/useDebounce'
import IProduct from '@/core/types/product.types'
import { Button } from '@mui/material'
import EmptyState from '@/components/atoms/EmptyState/EmptyStates'

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const debouncedValue = useDebounce(searchTerm, 500)

    // const route = useRouter()

    const navLink = [
        {
            id: 1,
            label: 'Shop',
            href: `${ROUTES.Products}`
        },
        {
            id: 2,
            label: 'On Sale',
            href: '/'
        },
        {
            id: 3,
            label: 'New Arrivals',
            href: '/'
        },
        {
            id: 4,
            label: 'Brands',
            href: '/'
        }
    ]

    useEffect(() => {
        const fetchData = async () => {
            if (debouncedValue.trim() === '') return

            const response = await fetchHandler(`/products/?title=${debouncedValue}`)

            setSearchResult(response)
        }

        fetchData()
    }, [debouncedValue])

    return (
        <div className='px-2 md:px-[40px] py-6 bg-white flex gap-4 items-center flex-wrap'>
            <div className='lg:basis-1/2 flex gap-10 items-center flex-wrap'>
                <Link href={`${ROUTES.Landing}`}>
                    <Image src={logo.src} alt='shop co' width={200} height={100} />
                </Link>

                <ul className='flex gap-4 items-center '>
                    {navLink.map((item) => (
                        <li key={item.id}>
                            <Link href={item.href}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='flex items-center gap-2 grow lg:basis-1/2 relative'>
                <TextInput
                    placeholder='search'
                    name='search'
                    className='border border-gray-2'
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
                {searchResult.length > 0 && (
                    <div className='rounded-lg z-40 shadow-2xl bg-gray-50 max-h-[300px] overflow-y-auto  absolute top-16 w-full  p-2'>
                        <div className='flex items-center flex-wrap justify-between'>
                            <div>
                                Search Result : <strong>{searchTerm}</strong>
                            </div>
                            <Button
                                variant='outlined'
                                onClick={() => {
                                    setSearchTerm('')
                                    setSearchResult([])
                                }}
                            >
                                close
                            </Button>
                        </div>

                        <ul className='p-0 '>
                            {searchResult.map((item: IProduct) => (
                                <li
                                    key={item.id}
                                    className='flex items-center gap-2 flex-wrap p-4 border-gray-200 border-b last:border-0'
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
                                            <Link href={`${ROUTES.Products}/${item.slug}`}>{item?.title}</Link>
                                        </h3>
                                        <div>{item?.price} $</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {searchResult.length === 0 && searchTerm.trim() !== '' && (
                    <div className='rounded-lg z-40 shadow-2xl bg-gray-50 max-h-[300px] overflow-y-auto  absolute top-16 w-full  p-2'>
                         <div className='flex items-center flex-wrap justify-between'>
                            <div>
                                Search Result : <strong>{searchTerm}</strong>
                            </div>
                            <Button
                                variant='outlined'
                                onClick={() => {
                                    setSearchTerm('')
                                    setSearchResult([])
                                }}
                            >
                                close
                            </Button>
                        </div>
                        <EmptyState />
                    </div>
                )}

                <Link href='/cart'>
                    <Shopping />
                </Link>

                <Link href='/login'>
                    <Profile />
                </Link>
            </div>
        </div>
    )
}

export default Header
