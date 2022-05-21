import { ChevronLeftIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import Modall from './CheckoutModal'

const productCounter = 19
const allPrice = 152000000000
const discount = -2000000000

function Checkout({ setCheck }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mx-auto mt-8 max-w-7xl py-0 lg:py-5 lg:px-4">
      <div className="grid-cols-3 gap-5 xl:grid">
        <div className="col-span-2 rounded px-4 py-4 sm:px-10 sm:py-[30px] xl:shadow-[0_2px_12px_rgba(0,0,0,0.14)]">
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
              <h3 className="mt-8 font-bold uppercase">Способ доставки</h3>
              <div className="gap-5 sm:flex">
                <div className="group my-5 w-full rounded border-2 border-transparent bg-[#F0F0F0] p-[30px] text-center hover:border-[#016059]">
                  <h4 className="font-Inter text-xl text-[#434343] group-hover:text-[#016059]">
                    Транспортная услуги
                  </h4>
                  <p className="mt-3 text-[#00000066]">
                    Удобная доставка в любую точку Узбекистана
                  </p>
                </div>
                <div className="group my-5 w-full rounded border-2 border-transparent bg-[#F0F0F0] p-[30px] text-center hover:border-[#016059]">
                  <h4 className="font-Inter text-xl text-[#434343] group-hover:text-[#016059]">
                    Самовывоз с завода
                  </h4>
                  <p className="mt-3 text-[#00000066]">
                    Забрать товар можно со склада METIKS
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mt-8 font-bold uppercase">Способ доставки</h3>
              <div className="gap-5 sm:flex">
                <div className="group my-5 w-full rounded border-2 border-transparent bg-[#F0F0F0] p-[30px] text-center hover:border-[#016059]">
                  <h4 className="font-Inter text-xl text-[#434343] group-hover:text-[#016059]">
                    Транспортная услуги
                  </h4>
                </div>
                <div className="group my-5 w-full rounded border-2 border-transparent bg-[#F0F0F0] p-[30px] text-center hover:border-[#016059]">
                  <h4 className="font-Inter text-xl text-[#434343] group-hover:text-[#016059]">
                    Самовывоз с завода
                  </h4>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mt-8 font-bold uppercase">
                Вы можете добавить комментарий к заказу
              </h3>
              <form action="#">
                <textarea
                  rows={8}
                  className="my-5 block w-full rounded-sm border-2 border-gray-200 bg-[#F0F0F0] px-4 py-2.5 sm:text-base"
                  placeholder="Коментарии*"
                  defaultValue={''}
                />
              </form>
            </div>
          </div>
        </div>
        <div className="m-auto max-h-[380px] max-w-[500px] rounded p-[30px] xl:m-0 xl:shadow-[0_2px_12px_rgba(0,0,0,0.14)]">
          <div
            className="page-title pb -4 flex items-center border-t-2 border-[#EDEDED]
          pt-4 xl:border-t-0 xl:border-b-2 xl:pt-0"
          >
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
          <button
            className="btn mt-7 w-full rounded-sm text-lg"
            onClick={() => setOpen(true)}
          >
            Оформить заказ
          </button>
        </div>
      </div>
      <Modall open={open} setOpen={setOpen} setCheck={setCheck} />
    </div>
  )
}

export default Checkout
