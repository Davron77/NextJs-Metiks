import React, { useState } from 'react'
import VideoModal from './VideoModal'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'

export default function VideoContent({ settings }) {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <div>
      <div className="mx-auto max-w-[1440px]">
        <div className="lg:flex">
          <div className="flex basis-1/2 flex-row justify-center bg-black pt-8 pb-10 text-white sm:py-28">
            <div>
              <div className="font-Bebas text-[32px] sm:text-[44px] sm:leading-[54px]">
                <span className="text-[#016059]">
                  {t('Metiks manufactures')}
                </span>
                <br />
                <span className="text-[#d6a300]">{t('Wide range')}</span>
                <br />
                <span>{t('Different types of metal')}</span>
              </div>
              <p className=" font-Inter mt-4 mb-8 text-base font-normal text-neutral-400">
                {t('Video page info 1')}
                <br />
                {t('Video page info 2')}
              </p>
              <a
                href="#"
                className="rounded-sm bg-white py-2 px-[14px] text-base font-normal text-black"
              >
                {t('Product Catalog')}
              </a>
            </div>
          </div>
          <div
            className="relative flex basis-1/2 cursor-pointer justify-center"
            onClick={() => setOpen(true)}
          >
            <img src="/video-picture.png" alt="video picture" />
            <span className=" absolute top-[50%] translate-y-[-50%]">
              <img
                className="h-14 w-14 sm:h-24 sm:w-24"
                src="/svg/play.svg"
                alt="play"
              />
            </span>
          </div>
        </div>
      </div>
      <VideoModal setOpen={setOpen} open={open} settings={settings} />
    </div>
  )
}
