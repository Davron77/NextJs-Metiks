import React, { useState } from 'react'
import CatalogIcon from '../public/svg/catalog.svg'
import Image from 'next/image'
import Catalog from './Catalog'

function ButtonCatalog() {
  const [isOpenCatalog, setIsOpenCatalog] = useState(false)
  return (
    <>
      <div>
        <div
          className={`btn flex w-full justify-center rounded-none border-b border-transparent lg:hidden ${
            isOpenCatalog ? 'border-white' : ''
          }`}
          onClick={() => setIsOpenCatalog((prev) => !prev)}
        >
          <span className="font-medium lg:font-semibold">
            <Image src={CatalogIcon} /> Каталог
            <span className="inline lg:hidden"> продукции</span>
          </span>
        </div>
      </div>
      <Catalog isOpenCatalog={isOpenCatalog} />
    </>
  )
}

export default ButtonCatalog
