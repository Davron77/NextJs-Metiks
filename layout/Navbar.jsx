import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Disclosure, Menu } from '@headlessui/react'
import navigation from '../navigation/menu'
import Catalog from '../layout/Catalog'
// Icons
import CatalogIcon from '../public/svg/catalog.svg'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [isOpenCatalog, setIsOpenCatalog] = useState(false)

  return (
    <>
      <Disclosure
        as="nav"
        className={`w-full ${isOpenCatalog ? 'border-bottom ' : ''}`}
      >
        {({ open }) => (
          <>
            <div className="mx-auto mt-20 max-w-7xl py-0 lg:mt-0 lg:py-5 lg:px-4">
              <div className="relative flex h-full items-center justify-between px-0 lg:h-16">
                <div className="flex basis-full lg:basis-0">
                  <div
                    className="btn flex w-full justify-center rounded-none lg:w-32"
                    onClick={() => setIsOpenCatalog((prev) => !prev)}
                  >
                    <span className="font-medium lg:font-semibold">
                      <Image src={CatalogIcon} /> Каталог{' '}
                      <span className="inline lg:hidden"> продукции</span>
                    </span>
                  </div>
                </div>
                <div className="flex-2 justify-centern hidden items-center sm:items-stretch sm:justify-start lg:block">
                  <div>
                    <div className="flex space-x-6 xl:space-x-10">
                      {navigation.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <a
                            className={classNames(
                              item.current
                                ? 'border-black'
                                : 'hover:border-black',
                              'border-b-2 border-transparent text-lg font-semibold text-black transition-all duration-500 ease-in-out'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 hidden items-center pr-2 sm:static sm:inset-auto sm:pr-0 lg:block">
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
      <Catalog isOpenCatalog={isOpenCatalog} />
    </>
  )
}
