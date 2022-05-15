import React from 'react'
import SliderHome from './SliderHome'
import { DeviceMobileIcon } from '@heroicons/react/outline'
import { LocationMarkerIcon, ArrowRightIcon } from '@heroicons/react/solid'
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

function HomeBanner() {
  return (
    <div>
      <div className="mx-auto max-w-[1440px] gap-5 lg:flex">
        <div className="flex-2">
          <SliderHome />
        </div>
        <div>
          <div className="h-full flex-1 bg-black p-7 text-white lg:h-[412px] lg:px-[50px] lg:py-11">
            <h1 className="font-Bebas text-3xl font-bold leading-[50px] lg:text-[44px]">
              Лучший{' '}
              <span className="text-neutral-400">
                способ купить товары толЬка у нас.
              </span>
            </h1>
            <div className=" mt-14">
              <div className="flex">
                <img
                  className="h-12 w-12 rounded-full lg:h-16 lg:w-16"
                  src="/user.png"
                  alt="user"
                />
                <div className=" flex flex-col justify-center pl-3">
                  <h5 className=" text-xl font-bold tracking-wide">
                    Обратитесь к специалисту
                  </h5>
                  <div className="mt-1 flex">
                    <DeviceMobileIcon
                      className="mr-2 text-white hover:text-slate-400"
                      width={20}
                      height={20}
                    />
                    <a
                      className="border-b border-transparent text-neutral-400 transition-all duration-500 ease-in-out hover:border-b-white"
                      href="tel:+998998974504"
                    >
                      Tel: +998 99 897-45-04
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex">
                <LocationMarkerIcon className="h-12 w-12 text-white hover:text-slate-400 lg:h-16 lg:w-16" />
                <div className=" flex flex-col justify-center pl-3">
                  <h5 className=" text-xl font-bold tracking-wide">
                    Адрес магазина
                  </h5>
                  <div className="mt-1 flex">
                    <a
                      className=" flex border-b border-transparent text-neutral-400 hover:border-b-white"
                      href="https://www.google.com/maps"
                      target="_blank"
                    >
                      Найти магазин{' '}
                      <ArrowRightIcon className="ml-2" width={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[72px] items-center justify-evenly bg-[#E2E2E2]">
            <div className="flex">
              <FaFacebookF className=" mt-1 mr-2" />
              <span>Facebook</span>
            </div>
            <div className="flex">
              <FaTelegramPlane className=" mt-1 mr-2" />
              <span>Telegram</span>
            </div>
            <div className="flex">
              <AiFillInstagram className=" mt-1 mr-2" />
              <span>Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
