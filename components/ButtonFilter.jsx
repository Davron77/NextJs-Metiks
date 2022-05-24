import React, { useState } from 'react'
import Image from 'next/image'
import Category from './Category'
import { MdFilterAlt } from 'react-icons/md'

function ButtonFilter() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div
        className="btn flex w-full justify-center rounded-none border-b border-transparent !bg-[#016059] lg:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="flex items-center font-medium lg:font-semibold">
          <MdFilterAlt className="h-5 w-5" /> Фильтр
        </span>
      </div>
      {open ? <Category open={open} /> : null}
    </>
  )
}

export default ButtonFilter
