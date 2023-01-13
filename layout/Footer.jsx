import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// IMPORT ICONS
import { DeviceMobileIcon } from '@heroicons/react/outline'
import { LocationMarkerIcon } from '@heroicons/react/solid'
import Facebook from '../public/svg/Facebook.svg'
import Telegram from '../public/svg/Telegram.svg'
import Instagram from '../public/svg/Instagram.svg'
// API
import { productAPI } from '../api'

//REACT - I18NEXT
import { useTranslation } from 'react-i18next'

function Footer() {
  const [data, setData] = useState([])
  const { t } = useTranslation()

  useEffect(async () => {
    const res = await productAPI.settings()
    if (res.status === 200) {
      setData(res.data.data)
    }

    return () => {
      second
    }
  }, [])

  const navigation = [
    { name: t('Products'), href: '/products', current: false },
    { name: t('Services'), href: '/services', current: false },
    { name: t('Calculator'), href: '/calculator', current: false },
    { name: t('Production'), href: '/production', current: false },
    { name: t('About'), href: '/about', current: false },
    { name: t('Contact'), href: '/contact', current: false },
  ]

  return (
    <div className="footer w-full bg-black text-white">
      <div className="footer-menu">
        <div className="mx-auto mb-20 h-full max-w-7xl px-10 pt-16 lg:h-24 lg:px-6">
          <div className="block h-full flex-wrap justify-between md:flex">
            <div className="flex w-32 items-center justify-start lg:w-40 xl:w-56">
              <Link href="/">
                <img
                  className="cursor-pointer"
                  src="/svg/logo.svg"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="my-9 grid grid-cols-2 flex-wrap items-center justify-center gap-2 gap-x-8 md:my-0 lg:flex lg:gap-0 lg:space-x-3 xl:space-x-10">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a
                    className={
                      (item.current ? 'text-white' : 'text-black',
                      'space-x-10 border-b-2 border-transparent text-lg font-normal')
                    }
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
            <div className="font-Inter flex flex-col items-start justify-center text-sm font-normal text-neutral-400 lg:justify-end">
              <div className="group mb-4 flex items-center justify-end">
                <DeviceMobileIcon
                  className="mr-2 text-white group-hover:text-slate-400"
                  width={20}
                  height={20}
                />
                <a
                  className="border-b border-transparent transition-all duration-500 ease-in-out group-hover:border-b-white"
                  href={`tel:${data.support_phone}`}
                >
                  Tel: {data.support_phone}
                </a>
              </div>
              <div className="group flex items-center justify-end">
                <LocationMarkerIcon
                  className="mr-2 text-white group-hover:text-slate-400"
                  width={20}
                  height={20}
                />
                <a
                  className="border-b border-transparent group-hover:border-b-white"
                  href={data.address_store}
                  target="_blank"
                >
                  {t('Find store')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-social">
        <div className="mx-auto h-full max-w-7xl px-10 lg:px-6">
          <div className="flex h-full items-center justify-between">
            <h4 className="font-Inter text-xs font-normal">
              © METIKS 2022 by{' '}
              <a
                className="font-bold"
                target="_blank"
                href="https://pss-it.uz/"
              >
                PSS
              </a>
            </h4>
            <div className="flex">
              <a href={data.facebook} target="_blank">
                <Image
                  src={Facebook}
                  className="hover:text-neutral-500"
                  width={22}
                  height={22}
                />
              </a>
              <a href={data.telegram} className="ml-5" target="_blank">
                <Image
                  src={Telegram}
                  className="hover:text-neutral-500"
                  width={22}
                  height={22}
                />
              </a>
              <a href={data.instagram} className="ml-5" target="_blank">
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
