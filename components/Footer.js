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

import { FaFacebook, FaTelegram, FaInstagram } from 'react-icons/fa'

const navigation = [
  { name: 'Товары', href: '#', current: false },
  { name: 'Услуги', href: '#', current: false },
  { name: 'Калькулятор', href: '#', current: false },
  { name: 'Производство', href: '#', current: false },
  { name: 'O компании', href: '#', current: false },
  { name: 'Контакт', href: '#', current: false },
]

function Footer() {
  return (
    <div className="footer w-full bg-black text-white">
      <div className="footer-menu">
        <div className="mx-auto mt-16 mb-12 h-20 max-w-7xl px-2 sm:px-6">
          <div className="flex h-full justify-between">
            <div className="flex items-center justify-start">
              <Link href="/">
                <Image
                  className="cursor-pointer"
                  src={Logo}
                  alt="Picture of the author"
                />
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex space-x-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={
                      (item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-black hover:border-black',
                      'space-x-10 border-b-2 border-transparent text-lg font-semibold transition duration-300')
                    }
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-end">
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
      <div className="footer-social">
        <div className="mx-auto h-full max-w-7xl px-2 sm:px-6">
          <div className="flex h-full items-center justify-between">
            <h4>© METIKS 2022</h4>
            <div className="flex">
              <FaFacebook className="text-lg" />
              <FaTelegram className="ml-5 text-lg" />
              <FaInstagram className="ml-5 text-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
