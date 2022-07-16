import React from 'react'
import SliderHome from './SliderHome'
import { DeviceMobileIcon } from '@heroicons/react/outline'
import { LocationMarkerIcon, ArrowRightIcon } from '@heroicons/react/solid'
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'

function HomeBanner({ settings, banner }) {
  const { t } = useTranslation()

  return (
    <div>
      <div className="mx-auto max-w-[1440px] gap-5 lg:flex">
        <div className="flex-initial lg:w-[54%] xl:w-3/5">
          <SliderHome banner={banner} />
        </div>
        <div className="flex-initial">
          <div className="h-full flex-1 bg-black p-7 text-white lg:h-[428px] lg:px-[50px] lg:py-11">
            <h1 className="font-Bebas text-3xl font-bold leading-[50px] lg:text-[44px]">
              {t('Best')}{' '}
              <span className="text-neutral-400">{t('Banner info')}</span>
            </h1>
            <div className=" mt-14">
              <a href="tel:+998998974504" className="group flex cursor-pointer">
                <img
                  className="h-12 w-12 rounded-full lg:h-16 lg:w-16"
                  src="/user.png"
                  alt="user"
                />
                <div className=" flex flex-col justify-center pl-3">
                  <h5 className=" text-xl font-bold tracking-wide">
                    {t('Contact specialist')}
                  </h5>
                  <div className="mt-1 flex">
                    <DeviceMobileIcon
                      className="mr-2 text-white hover:text-slate-400"
                      width={20}
                      height={20}
                    />
                    <div className="border-b border-transparent text-neutral-400 transition-all duration-500 ease-in-out group-hover:border-b-white">
                      {settings.support_phone}
                    </div>
                  </div>
                </div>
              </a>
              <a
                href={settings.address_store}
                className="group mt-10 flex cursor-pointer"
                target="_blank"
              >
                <LocationMarkerIcon className="h-12 w-12 text-white lg:h-16 lg:w-16" />
                <div className=" flex flex-col justify-center pl-3">
                  <h5 className=" text-xl font-bold tracking-wide">
                    {t('Store Address')}
                  </h5>
                  <div className="mt-1 flex">
                    <div className="flex border-b border-transparent text-neutral-400 group-hover:border-b-white">
                      {t('Find store')}
                      <ArrowRightIcon className="ml-2" width={13} />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex h-[72px] items-center justify-evenly bg-[#E2E2E2]">
            <a href={settings.facebook} target="_blank" className="flex">
              <FaFacebookF className=" mt-1 mr-2" />
              <span>Facebook</span>
            </a>
            <a href={settings.telegram} target="_blank" className="flex">
              <FaTelegramPlane className=" mt-1 mr-2" />
              <span>Telegram</span>
            </a>
            <a href={settings.instagram} target="_blank" className="flex">
              <AiFillInstagram className=" mt-1 mr-2" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
