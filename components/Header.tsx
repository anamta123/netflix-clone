
// '@heroicons/react/24/solid'
import { BellIcon } from '@heroicons/react/24/solid'
import {BsSearch} from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
//import BasicMenu from './BasicMenu'


function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    //const{ logout }= useAuth
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }
  
      window.addEventListener('scroll', handleScroll)
  
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])
  
    return (
      <header className={`${isScrolled && 'bg-[#141414]'}`}>
        {/* inside of header  */}
       {/* 2 div commands one for the left one for the right left side contains logo image  */}
       <div className="flex items-center space-x-2 md:space-x-10">
       <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
   <ul className="hidden space-x-4 md:flex">
          <li className="headerLink"> Home</li>
        <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
</ul>
       </div>
       <div className="flex items-center space-x-4 text-sm font-light">
        {/* this is the right sections where there are icons */}
        <BsSearch className="sm hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
