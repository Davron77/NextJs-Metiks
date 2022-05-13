import React from 'react'
import SliderHome from './SliderHome'
import { DeviceMobileIcon } from '@heroicons/react/outline'
import { LocationMarkerIcon, ArrowRightIcon } from '@heroicons/react/solid'
import { FaFacebookF, FaTelegramPlane, AiFillInstagram } from 'react-icons/fa'

function HomeBanner() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-[1440px] gap-5 lg:flex lg:items-center lg:justify-between lg:rounded-sm">
        <div className="flex-2">
          <SliderHome />
        </div>
        <div>
          <div className="h-[412px] flex-1 bg-black px-[50px] py-11 text-white">
            <h1 className="font-Bebas text-[44px] font-bold leading-[50px]">
              Лучший{' '}
              <span className="text-neutral-400">
                способ купить товары толЬка у нас.
              </span>
            </h1>
            <div className=" mt-14">
              <div className="flex">
                <img
                  className="h-15 w-15 rounded-full"
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
                <LocationMarkerIcon
                  className="text-white hover:text-slate-400"
                  width={60}
                  height={60}
                />
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
          <div className=" h-[72px] bg-[#E2E2E2]">
            <FaFacebookF />
            <FaTelegramPlane />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
