import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../../../public/images/general/logo.png'
import Link from 'next/link'
import Profile from '@/components/icons/Profile'
import Shopping from '@/components/icons/Shopping'
import ROUTES from '@/core/constants/routes/routes.constant'
import useDebounce from '@/core/hooks/useDebounce'
import HeaderSearch from '@/components/molecules/HeaderSearch/HeaderSearch'

const navLinks = [
  { id: 1, label: 'Shop', href: ROUTES.Products },
  { id: 2, label: 'On Sale', href: '/' },
  { id: 3, label: 'New Arrivals', href: '/' },
  { id: 4, label: 'Brands', href: '/' }
]

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedValue = useDebounce(searchTerm, 500)

  return (
    <div className='px-2 md:px-[40px] py-6 bg-white flex gap-4 items-center flex-wrap'>
      <div className='lg:basis-1/2 flex gap-10 items-center flex-wrap'>
        <Link href={ROUTES.Landing}>
          <Image src={logo.src} alt='shop co' width={200} height={100} />
        </Link>

        <ul className='flex gap-4 items-center'>
          {navLinks.map(({ id, label, href }) => (
            <li key={id}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex items-center gap-2 grow lg:basis-1/2 relative'>
        <HeaderSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          debouncedValue={debouncedValue}
        />

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
