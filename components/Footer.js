import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo.svg'
import Link from 'next/link'
// IMPORT ICONS
import { DeviceMobileIcon } from '@heroicons/react/outline'
import { LocationMarkerIcon } from '@heroicons/react/solid'

import { FaFacebook, FaTelegram, FaInstagram } from 'react-icons/fa'
import Facebook from '../public/Facebook.svg'
import Telegram from '../public/Telegram.svg'
import Instagram from '../public/Instagram.svg'

const navigation = [
  { name: 'Каталог', href: '#', current: false },
  { name: 'О нас', href: '#', current: false },
  { name: 'Услуги', href: '#', current: false },
  { name: 'Производство', href: '#', current: false },
  { name: 'Калькулятор', href: '#', current: false },
  { name: 'Где купить', href: '#', current: false },
  { name: 'Контакт', href: '#', current: false },
]

function Footer() {
  return (
    <div className="footer w-full bg-black text-white">
      <div className="footer-menu">
        <div className="mx-auto mt-16 mb-12 h-full max-w-7xl px-10 lg:h-24 lg:px-6">
          <div className="block h-full flex-wrap justify-between md:flex">
            <div className="flex w-32 items-center justify-start lg:w-40 xl:w-56">
              <Link href="/">
                <Image
                  className="cursor-pointer"
                  src={Logo}
                  alt="Picture of the author"
                />
              </Link>
            </div>
            <div className="my-9 grid grid-cols-2 flex-wrap items-center justify-center gap-2 gap-x-8 md:my-0 lg:flex lg:gap-0 lg:space-x-3 xl:space-x-10">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={
                    (item.current ? 'text-white' : 'text-black',
                    'space-x-10 border-b-2 border-transparent text-lg font-normal')
                  }
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="font-Inter flex flex-col items-start justify-center text-sm font-normal text-neutral-400 lg:justify-end">
              <div className="mb-4 flex items-center justify-end">
                <DeviceMobileIcon
                  className="mr-2 text-white hover:text-slate-400"
                  width={20}
                  height={20}
                />
                <a
                  className="border-b border-transparent hover:border-b-white"
                  href="tel:+998998974504"
                >
                  Tel: +998 99 897 45 04
                </a>
              </div>
              <div className="flex items-center justify-end">
                <LocationMarkerIcon
                  className="mr-2 text-white hover:text-slate-400"
                  width={20}
                  height={20}
                />
                <a
                  className="border-b border-transparent hover:border-b-white"
                  href="https://www.google.com/maps"
                  target="_blank"
                >
                  Найти магазин
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-social">
        <div className="mx-auto h-full max-w-7xl px-10 lg:px-6">
          <div className="flex h-full items-center justify-between">
            <h4 className="font-Inter text-xs font-normal">© METIKS 2022</h4>
            <div className="flex">
              <a href="https://www.facebook.com/" target="_blank">
                <Image
                  src={Facebook}
                  className="hover:text-neutral-500"
                  width={22}
                  height={22}
                />
              </a>
              <a
                href="https://www.facebook.com/"
                className="ml-5"
                target="_blank"
              >
                <Image
                  src={Telegram}
                  className="hover:text-neutral-500"
                  width={22}
                  height={22}
                />
              </a>
              <a
                href="https://www.facebook.com/"
                className="ml-5"
                target="_blank"
              >
                <Image
                  src={Instagram}
                  className="hover:text-neutral-500"
                  width={22}
                  height={22}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
