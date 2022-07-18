import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Disclosure, Menu } from '@headlessui/react'
import Catalog from '../components/Catalog'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'
// Icons
import CatalogIcon from '../public/svg/catalog.svg'
import { useDispatch } from 'react-redux'
import { isOpen } from '../redux/openCatalog'

export default function Navbar() {
  const [isOpenCatalog, setIsOpenCatalog] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  dispatch(isOpen(isOpenCatalog))

  const navigation = [
    { name: t('Products'), href: '/products', current: false },
    { name: t('Services'), href: '/services', current: false },
    { name: t('Calculator'), href: '/calculator', current: false },
    { name: t('Production'), href: '/production', current: false },
    { name: t('About'), href: '/about', current: false },
    { name: t('Contact'), href: '/contact', current: false },
  ]

  return (
    <>
      <Disclosure
        as="nav"
        className={`w-full ${
          isOpenCatalog ? 'border-bottom border-[#434343]' : ''
        }`}
      >
        {({ open }) => (
          <>
            <div className="mt-20 lg:mt-0">
              <div className="mx-auto mt-20 hidden max-w-7xl py-0 lg:mt-0 lg:block lg:py-5 lg:px-4">
                <div className="relative flex h-full items-center justify-between px-0 lg:h-16">
                  <div className="flex basis-full lg:basis-0">
                    <div
                      className="btn flex w-full justify-center rounded-none lg:w-32"
                      onClick={() => setIsOpenCatalog((prev) => !prev)}
                    >
                      <span className="font-medium lg:font-semibold">
                        <Image src={CatalogIcon} /> {t('catalog')}
                        <span className="inline lg:hidden"></span>
                      </span>
                    </div>
                  </div>
                  <div className="flex-2 justify-centern hidden items-center sm:items-stretch sm:justify-start lg:block">
                    <div className="flex space-x-6 xl:space-x-10">
                      {navigation.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <a
                            className={`border-b-2 border-transparent text-lg font-semibold text-black transition-all duration-500 ease-in-out ${
                              router?.pathname == item?.href
                                ? 'border-black'
                                : ''
                            }`}
                            onClick={() => setIsOpenCatalog(false)}
                          >
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 hidden items-center pr-2 sm:static sm:inset-auto sm:pr-0 lg:block">
                    <Menu as="div" className="relative">
                      <div>
                        <Link href="/">
                          <span className="cursor-pointer text-lg font-semibold hover:text-neutral-500">
                            {t('How to buy')} ?
                          </span>
                        </Link>
                      </div>
                    </Menu>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
      <Catalog
        isOpenCatalog={isOpenCatalog}
        setIsOpenCatalog={setIsOpenCatalog}
      />
    </>
  )
}
