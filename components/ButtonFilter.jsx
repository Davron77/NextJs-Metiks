import React, { useState } from 'react'
import CatalogIcon from '../public/svg/catalog.svg'
import Image from 'next/image'
import Category from './Category'

function ButtonFilter() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div>
        <div
          className={`btn flex w-full justify-center rounded-none border-b border-transparent lg:hidden ${
            open ? 'border-white' : ''
          }`}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="font-medium lg:font-semibold h-0">
            <Image src={CatalogIcon} /> Каталог
            <span className="inline lg:hidden"> продукции</span>
          </span>
        </div>
      </div>
      <div className="hidden">
        <Category open={open} />
      </div>
    </>
  )
}

export default ButtonFilter
