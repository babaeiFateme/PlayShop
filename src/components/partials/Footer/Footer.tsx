import React from 'react'
import logo from "../../../../public/images/_general/logo.png"
import Image from 'next/image'
import { Button } from '@mui/material'
import NextLink from "next/link"
const Footer = () => {

    const CompanyItems = [
        {
            id: 1,
            label: 'About',
            href: '/about'
        },
        {
            id: 2,
            label: 'Features',
            href: '/features'
        },
        {
            id: 3,
            label: 'Workers',
            href: '/workers'
        },
        {
            id: 4,
            label: 'Career',
            href: '/career'
        },
    ]

    const HelpItems = [
        {
            id: 1,
            label: 'Customer Support',
            href: '/'
        },
        {
            id: 2,
            label: 'Delivery Details',
            href: '/'
        },
        {
            id: 3,
            label: 'Terms & Conditions',
            href: '/'
        },
        {
            id: 4,
            label: 'Privacy Policy',
            href: '/'
        },
    ]

    const FaqItems = [
        {
            id: 1,
            label: 'Account',
            href: '/'
        },
        {
            id: 2,
            label: 'Manage Deliveries',
            href: '/'
        },
        {
            id: 3,
            label: 'Orders',
            href: '/'
        },
        {
            id: 4,
            label: 'Payments',
            href: '/'
        },
    ]
    const ResourcesItems = [
        {
            id: 1,
            label: 'Free eBooks',
            href: '/'
        },
        {
            id: 2,
            label: 'Development Tutorial',
            href: '/'
        },
        {
            id: 3,
            label: 'How to - Blog',
            href: '/'
        },
        {
            id: 4,
            label: 'Youtube Playlist',
            href: '/'
        },
    ]


    return (
        <footer className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-[20px] bg-gray-200 p-5'>
            <div>
                <Image
                    src={logo.src}
                    alt='shop'
                    width={200}
                    height={150}
                />

                <div className='my-4'>
                    We have clothes that suits your style and which you’re proud to wear. From women to men.
                </div>

                <div>
                    social link
                </div>
            </div>

            <div>
                <div className='font-semibold text-lg mb-4 uppercase'>Company</div>

                <ul className='*:mb-3'>
                    {CompanyItems.map((item) => (
                        <li key={item.id}>
                            <Button
                                className='!px-0'
                                variant='text'
                                component={NextLink}
                                href={`company-${item.href}`}
                                color='secondary'
                            >
                                {item.label}
                            </Button>
                        </li>

                    ))}
                </ul>
            </div>


            <div>
                <div className='font-semibold text-lg mb-4 uppercase'>Help</div>

                <ul className='*:mb-3'>
                    {HelpItems.map((item) => (
                        <li key={item.id}>
                            <Button
                                className='!px-0'
                                variant='text'
                                component={NextLink}
                                href={`help-${item.href}`}
                                color='secondary'
                            >
                                {item.label}
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <div className='font-semibold text-lg mb-4 uppercase'>FAQ</div>
                <ul className='*:mb-3'>
                    {FaqItems.map((item) => (
                        <li key={item.id}>
                            <Button
                                className='!px-0'
                                variant='text'
                                component={NextLink}
                                href={`faq-${item.href}`}
                                color='secondary'
                            >
                                {item.label}
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <div className='font-semibold text-lg mb-4 uppercase'>Resources</div>
                <ul className='*:mb-3'>
                    {ResourcesItems.map((item) => (
                        <li key={item.id}>
                            <Button
                                className='!px-0'
                                variant='text'
                                component={NextLink}
                                href={`resource-${item.href}`}
                                color='secondary'
                            >
                                {item.label}
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer