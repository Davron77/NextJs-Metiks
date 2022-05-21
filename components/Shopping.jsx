import React, { useState } from 'react'
import { FaTag } from 'react-icons/fa'
import { BsCheck2 } from 'react-icons/bs'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { TrashIcon } from '@heroicons/react/outline'
import SliderProducts from '../data/data-sliderProducts'

const productCounter = 19
const allPrice = 152000000000
const discount = -2000000000

function Shopping({ setCheck }) {
  const [count, setCount] = useState(1)

  const handleOnChange = (e) => {
    setCount(+e.target.value)
  }

  return (
    <div className="mx-auto mt-8 max-w-7xl py-0 lg:py-5 lg:px-4">
      <div className="grid-cols-3 gap-5 xl:grid">
        <div className="col-span-2 rounded px-4 py-4 sm:px-10 sm:py-[30px] xl:shadow-[0_2px_12px_rgba(0,0,0,0.14)]">
          <div className="page-title flex items-center border-b-2 border-[#EDEDED] pb-4">
            <h1>Ваша корзина</h1>
            <p className="flex items-center font-bold text-[#016059]">
              <FaTag className="mr-2" />
              Товары:{' '}
              <span className="ml-1 !text-black">{productCounter} шт</span>
            </p>
          </div>
          <div>
            <div className="m-auto mt-8 flex h-full max-w-3xl justify-between gap-2 xl:m-0 xl:mt-8 xl:h-[160px]">
              <img
                className="h-20 w-20 object-cover sm:h-40 sm:w-40"
                src="/product/20.png"
              />
              <div className="lg:flex">
                <div className="flex flex-col justify-between">
                  <div className="font-bold">
                    <p className="uppercase">Рулон из полимерным покрытием</p>
                    <p className="text-[#434343]">ral 8017, ММК, 0.5MM</p>
                  </div>
                  <div className="flex flex-col gap-y-2.5 text-xs uppercase text-[#434343]">
                    <span>Цвет: RAL 8017</span>
                    <span>Производство: ММК</span>
                    <span>Толщина: 0,5</span>
                  </div>
                </div>
                <div className="mt-3 flex max-w-[220px] flex-col justify-between lg:mt-0 lg:pl-8">
                  <div>
                    <p className="font-normal text-[#434343]">
                      Общая стоимость
                    </p>
                    <span className="font-Bebas text-[32px] ">
                      152 000 000 UZS
                    </span>
                  </div>
                  <div>
                    <p className="font-normal text-[#434343]">
                      Количество товара
                    </p>
                    <div className=" mt-2 flex h-11 w-32 justify-between rounded-sm border-2 border-[#434343] p-2">
                      <button onClick={() => setCount(count - 1)}>
                        <AiOutlineMinus />
                      </button>
                      <input
                        type="text"
                        value={count}
                        onChange={handleOnChange}
                        className="w-11 text-center outline-none"
                      />
                      <button onClick={() => setCount(count + 1)}>
                        <AiOutlinePlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-end sm:pl-10">
                <div className="h-7 w-7 cursor-pointer rounded-sm bg-black p-0.5 text-white">
                  <BsCheck2 className="text-2xl" />
                </div>
                <div className="mt-2.5 h-7 w-7 cursor-pointer rounded-sm bg-red-600 p-0.5 text-white">
                  <TrashIcon className="h-6" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="m-auto mt-8 flex h-full max-w-3xl justify-between gap-2 xl:m-0 xl:mt-8 xl:h-[160px]">
              <img
                className="h-20 w-20 object-cover sm:h-40 sm:w-40"
                src="/product/20.png"
              />
              <div className="lg:flex">
                <div className="flex flex-col justify-between">
                  <div className="font-bold">
                    <p className="uppercase">Рулон из полимерным покрытием</p>
                    <p className="text-[#434343]">ral 8017, ММК, 0.5MM</p>
                  </div>
                  <div className="flex flex-col gap-y-2.5 text-xs uppercase text-[#434343]">
                    <span>Цвет: RAL 8017</span>
                    <span>Производство: ММК</span>
                    <span>Толщина: 0,5</span>
                  </div>
                </div>
                <div className="mt-3 flex max-w-[220px] flex-col justify-between lg:mt-0 lg:pl-8">
                  <div>
                    <p className="font-normal text-[#434343]">
                      Общая стоимость
                    </p>
                    <span className="font-Bebas text-[32px] ">
                      152 000 000 UZS
                    </span>
                  </div>
                  <div>
                    <p className="font-normal text-[#434343]">
                      Количество товара
                    </p>
                    <div className=" mt-2 flex h-11 w-32 justify-between rounded-sm border-2 border-[#434343] p-2">
                      <button onClick={() => setCount(count - 1)}>
                        <AiOutlineMinus />
                      </button>
                      <input
                        type="text"
                        value={count}
                        onChange={handleOnChange}
                        className="w-11 text-center outline-none"
                      />
                      <button onClick={() => setCount(count + 1)}>
                        <AiOutlinePlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-end sm:pl-10">
                <div className="h-7 w-7 cursor-pointer rounded-sm bg-black p-0.5 text-white">
                  <BsCheck2 className="text-2xl" />
                </div>
                <div className="mt-2.5 h-7 w-7 cursor-pointer rounded-sm bg-red-600 p-0.5 text-white">
                  <TrashIcon className="h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-auto mt-7 max-h-[292px] max-w-[500px] rounded p-[30px] xl:m-0 xl:shadow-[0_2px_12px_rgba(0,0,0,0.14)]">
          <div
            className="page-title pb -4 flex items-center border-t-2 border-[#EDEDED]
          pt-4 xl:border-t-0 xl:border-b-2 xl:pt-0"
          >
            <h1>Итого:</h1>
            <p className="font-Bebas text-[32px] text-[#434343]">
              {allPrice} UZS
            </p>
          </div>
          <div className="mt-5 flex justify-between font-bold uppercase text-[#434343]">
            <p>Товары, {productCounter} шт.</p>
            <p>{allPrice} UZS</p>
          </div>
          <div className="mt-5 flex justify-between font-bold uppercase text-[#434343]">
            <p>Скидка</p>
            <p>{discount} UZS</p>
          </div>
          <button
            className="btn mt-7 w-full rounded-sm text-lg"
            onClick={() => setCheck(true)}
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  )
}

export default Shopping
