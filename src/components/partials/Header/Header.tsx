import Image from 'next/image'
import React from 'react'
import logo from "../../../../public/images/_general/logo.png"
import Link from 'next/link'

const Header = () => {
  const navLink = [
    {
      id: 1,
      label: "Shop",
      href: "/"
    },
    {
      id: 2,
      label: "On Sale",
      href: "/"
    },
    {
      id: 3,
      label: "New Arrivals",
      href: "/"
    },
    {
      id: 4,
      label: "Brands",
      href: "/"
    },
  ]
  return (
    <div className="px-2 md:px-[40px] py-6 bg-red-300 flex gap-6 items-center">
      <Image
        src={logo.src}
        alt='logo'
        width={200}
        height={100}
      />

      <ul className='flex gap-4 items-center '>
        {navLink.map((item) => (
          <li key={item.id}>
            <Link href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <input type='text' placeholder='search' className='border border-gray-2 grow' />
    </div>
  )
}

export default Header