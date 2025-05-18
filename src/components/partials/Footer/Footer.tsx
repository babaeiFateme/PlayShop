import React from 'react'
import logo from "../../../../public/images/_general/logo.png"
import Image from 'next/image'
const Footer = () => {
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
                <div className='font-semibold mb-4'>Company</div>
                <ul className='*:mb-3'>
                    <li>
                        About
                    </li>

                    <li>Features</li>

                    <li>Works</li>

                    <li>Career</li>
                </ul>
            </div>
            <div>
                <div className='font-semibold mb-4'>Company</div>
                <ul className='*:mb-3'>
                    <li>
                        About
                    </li>

                    <li>Features</li>

                    <li>Works</li>

                    <li>Career</li>
                </ul>
            </div>

            <div>
                <div className='font-semibold mb-4'>Company</div>
                <ul className='*:mb-3'>
                    <li>
                        About
                    </li>

                    <li>Features</li>

                    <li>Works</li>

                    <li>Career</li>
                </ul>
            </div>

            <div>
                <div className='font-semibold mb-4'>Company</div>
                <ul className='*:mb-3'>
                    <li>
                        About
                    </li>

                    <li>Features</li>

                    <li>Works</li>

                    <li>Career</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer