/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import Link from 'next/link'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Товары', href: '#', current: false },
  { name: 'Услуги', href: '#', current: false },
  { name: 'Калькулятор', href: '#', current: false },
  { name: 'Производство', href: '#', current: false },
  { name: 'O компании', href: '#', current: false },
  { name: 'Контакт', href: '#', current: false },
]

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
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex">
                <div
                  className="btn flex w-32"
                  onClick={() => setOpenCatalog((prev) => !prev)}
                >
                  {openCatalog ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                  <span className="pl-2 capitalize">каталог</span>
                </div>
              </div>
              <div className="flex-2 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center"></div>
                <div className="hidden sm:block">
                  <div className="flex space-x-10">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-black hover:border-black',
                          'space-x-10 border-b-2 border-transparent text-lg font-semibold transition duration-300'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
                <Menu as="div" className="relative">
                  <div>
                    <Link href="/">
                      <span className="cursor-pointer text-lg font-semibold hover:text-slate-400">
                        Как купить?
                      </span>
                    </Link>
                  </div>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
