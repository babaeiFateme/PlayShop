import React from 'react'
import logo from "../../../../public/images/general/logo.png"
import Image from 'next/image'
import FooterSection from '../../organisms/Footer/FooterSection'
import FooterInfo from '../../organisms/Footer/resources/content/FooterInfo'
import FooterBottom from '@/components/organisms/Footer/FooterBottom'
import GPay from '../../../../public/images/general/G Pay.png'
import master from '../../../../public/images/general/Mastercard.png'
import applePay from '../../../../public/images/general/ Pay.png'
import visa from '../../../../public/images/general/Visa.png'
import paypal from '../../../../public/images/general/Paypal.png'
import Subscribe from '@/components/organisms/Footer/Subscribe'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className=' bg-gray-200 p-5 pt-[150px] relative'>
            <Subscribe />

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-[20px]'>
                <div>
                    <Link href='/'>
                        <Image
                            src={logo.src}
                            alt='shop'
                            width={200}
                            height={150}
                        />
                    </Link>

                    <div className='my-4'>
                        We have clothes that suits your style and which you’re proud to wear. From women to men.
                    </div>

                    <div>
                        social link
                    </div>
                </div>

                {FooterInfo.map((item, index) => (
                    <FooterSection
                        key={index}
                        title={item.title}
                        baseHref={item.baseHref}
                        items={item.items}
                    />
                ))}
            </div>

            <FooterBottom >
                <hr />
                <div className='flex justify-between items-center flex-wrap mt-4'>
                    <div>
                        Shop.co © 2000-2023, All Rights Reserved
                    </div>

                    <div>
                        <div className='flex gap-2 items-center *:max-w-[50px]'>
                            <div className='bg-white p-2 rounded-md'>
                                <Image
                                    src={visa.src}
                                    alt=''
                                    width={100}
                                    height={100}

                                />
                            </div>

                            <div className='bg-white p-2 rounded-md'>
                                <Image
                                    src={paypal.src}
                                    alt=''
                                    width={100}
                                    height={100}

                                />
                            </div>

                            <div className='bg-white p-2 rounded-md'>
                                <Image
                                    src={applePay.src}
                                    alt=''
                                    width={100}
                                    height={100}

                                />
                            </div>

                            <div className='bg-white p-2 rounded-md'>
                                <Image
                                    src={GPay.src}
                                    alt=''
                                    width={100}
                                    height={100}

                                />
                            </div>

                            <div className='bg-white p-2 rounded-md'>
                                <Image
                                    src={master.src}
                                    alt=''
                                    width={100}
                                    height={100}

                                />

                            </div>
                        </div>
                    </div>
                </div>
            </FooterBottom>
        </footer>
    )
}

export default Footer