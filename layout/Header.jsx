import { useState } from 'react'
import Image from 'next/image'
import Logo from '../public/svg/logo.svg'
import Link from 'next/link'
import navigation from '../navigation/menu'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
// IMPORT ICONS
import {
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
  DeviceMobileIcon,
} from '@heroicons/react/outline'
import { LocationMarkerIcon } from '@heroicons/react/solid'
//Portal
import Modal from '../layout/Modal'
import Search from '../components/Search'

const options = [
  { name: 'RU', value: 'RU', active: 'true' },
  { name: 'UZ', value: 'UZ', active: 'false' },
  { name: 'EN', value: 'EN', active: 'false' },
]

function Header() {
  const [isModal, setIsModal] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <>
      <div className="header header-shadow fixed top-0 z-[9] w-full bg-black text-white lg:static">
        <div className="mx-auto h-20 max-w-7xl px-2 sm:px-6">
          <div className="flex h-full justify-between">
            <div className="flex items-center justify-start">
              <select
                className={`bg-black lg:block ${
                  openMenu ? 'absolute left-[63%] flex p-[9px]' : 'hidden'
                }`}
              >
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
                {openMenu ? (
                  <XIcon
                    onClick={() => setOpenMenu(false)}
                    className="block h-6 w-6 cursor-pointer"
                    aria-hidden="true"
                  />
                ) : (
                  <MenuIcon
                    onClick={() => setOpenMenu(true)}
                    className="block h-6 w-6 cursor-pointer"
                    aria-hidden="true"
                  />
                )}
              </div>
            </div>
            <div className="flex w-36 items-center justify-center lg:w-full">
              <Link href="/">
                <Image className="cursor-pointer" src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="flex items-center justify-end">
              <div>
                <SearchIcon
                  className={`cursor-pointer transition-all duration-300 ease-in-out hover:text-neutral-500 ${
                    openMenu ? 'h-0 opacity-0' : ''
                  }`}
                  width={24}
                  height={24}
                  onClick={() => setSearchOpen((prev) => !prev)}
                />
              </div>

              <Link href="/basket">
                <ShoppingCartIcon
                  className="ml-5 cursor-pointer transition-all duration-300 ease-in-out hover:text-neutral-500"
                  width={24}
                  height={24}
                />
              </Link>
              <UserIcon
                onClick={() => setIsModal(true)}
                className="ml-5 cursor-pointer transition-all duration-300 ease-in-out hover:text-neutral-500"
                width={24}
                height={24}
              />
            </div>
          </div>
          <div>
            <div
              className={`navbar-mobile ${
                openMenu ? 'active-navbar-mobile' : ''
              }`}
            >
              <div className="relative h-screen">
                <div className="space-y-1 px-10 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        onClick={() => setOpenMenu(false)}
                        className={
                          (item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'block rounded-md py-2 text-base font-semibold')
                        }
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                  <div
                    href="#"
                    className="block rounded-md py-2 text-base font-semibold"
                    aria-current="page"
                  >
                    Как купить?
                  </div>
                </div>
                <div className="bottom-20-1 absolute flex flex-col items-start justify-end px-10 text-sm font-normal text-neutral-400">
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
        </div>
      </div>
      <Modal
        open={isModal}
        setOpen={setIsModal}
        setUser={setUser}
        user={user}
      />
      <Search open={searchOpen} setOpen={setSearchOpen} />
    </>
  )
}

export default Header
