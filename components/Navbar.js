/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import CatalogIcon from '../public/catalog.svg'
import navigation from '../navigation/menu'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [openCatalog, setOpenCatalog] = useState(false)
  return (
    <Disclosure as="nav" className="w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl py-5">
            <div className="relative flex h-16 items-center justify-between sm:px-6">
              <div className="flex basis-full">
                <div
                  className="btn flex w-full lg:w-32"
                  onClick={() => setOpenCatalog((prev) => !prev)}
                >
                  <span className="pl-2 capitalize">
                    <Image src={CatalogIcon} /> каталог
                  </span>
                </div>
              </div>
              <div className="flex-2 justify-centern flex hidden items-center sm:items-stretch sm:justify-start lg:block">
                <div className="flex flex-shrink-0 items-center"></div>
                <div>
                  <div className="flex space-x-6 xl:space-x-10">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={
                          (item.current
                            ? 'border-black '
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
              </div>
              <div className="absolute inset-y-0 right-0 flex hidden items-center pr-2 sm:static sm:inset-auto sm:pr-0 lg:block">
                <Menu as="div" className="relative">
                  <div>
                    <Link href="/">
                      <span className="cursor-pointer text-lg font-semibold hover:text-neutral-500">
                        Как купить?
                      </span>
                    </Link>
                  </div>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
