import React, { useState } from 'react'
import Category from './Category'
import { MdFilterAlt } from 'react-icons/md'
//API
import { productAPI } from '../api'

function ButtonFilter({ setProducts }) {
  const [open, setOpen] = useState(false)
  const [getId, setGetId] = useState(1)
  const [idCheckbox, setIdCheckbox] = useState([])

  const getFilter = async () => {
    try {
      const res = await productAPI.filter(getId, idCheckbox)

      if (res.status === 200) {
        setProducts(res.data.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  console.log('idCheckbox', idCheckbox)
  return (
    <>
      <div
        className="btn flex w-full justify-center rounded-none border-b border-transparent !bg-[#016059] lg:hidden"
        onClick={() => setOpen(true)}
      >
        <span className="flex items-center font-medium lg:font-semibold">
          <MdFilterAlt className="h-5 w-5" /> Фильтр
        </span>
      </div>
      {open ? (
        <>
          <Category
            open={open}
            setOpen={setOpen}
            setGetId={setGetId}
            idCheckbox={idCheckbox}
            setIdCheckbox={setIdCheckbox}
          />
          <div className="fixed bottom-[2%] z-[100] w-screen text-center lg:hidden">
            <button
              className="btn w-[323px] !bg-[#016059]"
              onClick={() => {
                getFilter(), setOpen(false)
              }}
            >
              Преминить
            </button>
          </div>
        </>
      ) : null}
    </>
  )
}

export default ButtonFilter
