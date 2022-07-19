import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import Link from 'next/link'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'

function Basket({ page }) {
  const { t } = useTranslation()

  return (
    <div className="bg-[#0000000d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-center text-sm text-[#434343]">
          <AiFillHome className="mr-2 text-[22px]" />
          <Link href="/">{t('home')}</Link> /{' '}
          <span className="truncate">{page}</span>
        </div>
      </div>
    </div>
  )
}

export default Basket
