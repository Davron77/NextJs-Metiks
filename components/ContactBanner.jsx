import React from 'react'
import { DeviceMobileIcon } from '@heroicons/react/outline'
import { LocationMarkerIcon, ArrowRightIcon } from '@heroicons/react/solid'
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

function ContactBanner() {
  return (
    <div>
      <div className="mx-auto max-w-[1440px] grid-cols-4 gap-5 lg:grid xl:grid-cols-5">
        <div className=" col-span-2 xl:col-span-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.8208057813765!2d69.26599089956898!3d41.32295658775837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3f8e3c9dcf%3A0x9d6664d2b41328d1!2zQWJkdWxsYSBRb2Rpcml5IGtvJ2NoYXNpLCDQotC-0YjQutC10L3RgiwgT2B6YmVraXN0b24!5e0!3m2!1suz!2s!4v1653635039879!5m2!1suz!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="h-[370px] w-full lg:h-full"
          ></iframe>
        </div>
        <div className=" col-span-2">
          <div className="h-full flex-1 bg-black p-7 text-white lg:h-[428px] lg:px-[50px] lg:py-11">
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

export default ContactBanner
