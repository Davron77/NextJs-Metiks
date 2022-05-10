import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo.svg'
import Link from 'next/link'
// IMPORT ICONS
import {
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/outline'

function Header() {
  return (
    <div className="header w-full bg-black text-white">
      <div className="mx-auto h-20 max-w-7xl px-2 sm:px-6">
        <div className="flex h-full">
          <div className="flex flex-1 items-center justify-start">Ru</div>
          <div className="flex flex-1 items-center justify-center">
            <Link href="/">
              <Image
                className="cursor-pointer"
                src={Logo}
                alt="Picture of the author"
              />
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <SearchIcon
              className="cursor-pointer hover:text-slate-400"
              width={20}
              height={20}
            />
            <ShoppingCartIcon
              className="ml-5 cursor-pointer hover:text-slate-400"
              width={20}
              height={20}
            />
            <UserIcon
              className="ml-5 cursor-pointer hover:text-slate-400"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
