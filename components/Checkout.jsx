import React, { useState } from 'react'
import { FaTag } from 'react-icons/fa'
import { BsCheck2 } from 'react-icons/bs'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { TrashIcon, ChevronLeftIcon } from '@heroicons/react/outline'

const productCounter = 19
const allPrice = 152000000000
const discount = -2000000000

function Checkout({ setCheck }) {
  const [count, setCount] = useState(1)

  const handleOnChange = (e) => {
    setCount(+e.target.value)
  }

  return (
    <div className="mx-auto mt-8 max-w-7xl py-0 lg:py-5 lg:px-4">
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 rounded px-10 py-[30px] shadow-[0_2px_12px_rgba(0,0,0,0.14)]">
          <div className="page-title flex items-center border-b-2 border-[#EDEDED] pb-4">
            <h1>Оформление заказа</h1>
            <button
              onClick={() => setCheck(false)}
              className="flex items-center text-sm font-bold text-[#434343]"
            >
              <ChevronLeftIcon width={15} height={15} className="mr-2" />
              Вернуться назад, в корзину
            </button>
          </div>
          <div>
            <div>
              <h3>Способ доставки</h3>
              <div className="flex">
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded p-[30px] shadow-[0_2px_12px_rgba(0,0,0,0.14)]">
          <div className="page-title flex items-center border-b-2 border-[#EDEDED] pb-4">
            <h1>Итого:</h1>
            <p className="font-Bebas text-[32px] text-[#434343]">
              {allPrice} UZS
            </p>
          </div>
          <div className="font-bold uppercase text-[#434343]">
            <div className="mt-5 flex justify-between">
              <p>Товары, {productCounter} шт.</p>
              <p>{allPrice} UZS</p>
            </div>
            <div className="mt-5 flex justify-between">
              <p>Скидка</p>
              <p>{discount} UZS</p>
            </div>
            <div className="mt-5 flex justify-between">
              <p>доставка</p>
              <p>2 000 000 UZS</p>
            </div>
            <div className="mt-5 flex justify-between">
              <p>оплата</p>
              <p>наличными</p>
            </div>
          </div>
          <button className="btn mt-7 w-full rounded-sm text-lg">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
