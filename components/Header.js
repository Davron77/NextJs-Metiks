import { useState } from 'react'
import Image from 'next/image'
import Logo from '../public/logo.svg'
import Link from 'next/link'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import navigation from '../navigation/menu'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
// IMPORT ICONS
import {
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/outline'

const options = [
  { name: 'Ru', value: 'Ru', active: 'true' },
  { name: 'Uz', value: 'Uz', active: 'false' },
  { name: 'En', value: 'En', active: 'false' },
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <div className="header w-full bg-black text-white">
      <div className="mx-auto h-20 max-w-7xl px-2 sm:px-6">
        <div className="flex h-full justify-between">
          <div className="flex items-center justify-start">
            <select className="hidden bg-black lg:block">
              {options.map((item) => {
                return item.active ? (
                  <option value={item.value} key={item.name}>
                    {item.name}
                  </option>
                ) : (
                  ''
                )
              })}
            </select>
            <div className="lg:hidden">
              {open ? (
                <XIcon
                  onClick={() => setOpen(false)}
                  className="block h-6 w-6"
                  aria-hidden="true"
                />
              ) : (
                <MenuIcon
                  onClick={() => setOpen(true)}
                  className="block h-6 w-6"
                  aria-hidden="true"
                />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link href="/">
              <Image
                className="cursor-pointer"
                src={Logo}
                alt="Picture of the author"
              />
            </Link>
          </div>
          <div className="flex items-center justify-end">
            <SearchIcon
              className="cursor-pointer hover:text-neutral-500"
              width={24}
              height={24}
            />
            <ShoppingCartIcon
              className="ml-5 cursor-pointer hover:text-neutral-500"
              width={24}
              height={24}
            />
            <UserIcon
              className="ml-5 cursor-pointer hover:text-neutral-500"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div>
          <div
            className={`navbar-mobile ${open ? 'active-navbar-mobile' : ''}`}
          >
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={
                    (item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium')
                  }
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
