import Image from 'next/image'
import React from 'react'
import logo from '../../../../public/images/general/logo.png'
import Link from 'next/link'
import TextInput from '@/components/atoms/TextInput/TextInput'
import Profile from '@/components/icons/Profile'
import Shopping from '@/components/icons/Shopping'

const Header = () => {
    const navLink = [
        {
            id: 1,
            label: 'Shop',
            href: '/products'
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

    return (
        <div className='px-2 md:px-[40px] py-6 bg-white flex gap-4 items-center flex-wrap'>
            <div className='lg:basis-1/2 flex gap-10 items-center flex-wrap'>
                <Link href='/'>
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

            <div className='flex items-center gap-2 grow lg:basis-1/2'>
                <TextInput placeholder='search' name='search' className='border border-gray-2' />

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
