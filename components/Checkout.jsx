import { ChevronLeftIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import Modall from './CheckoutModal'
//API
import { productAPI } from '../api'
//REDUX
import { useDispatch, useSelector } from 'react-redux'
import { CartCount } from '../redux/cart'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'

const productCounter = 19

function Checkout({ setCheck, sum }) {
  const [open, setOpen] = useState(false)
  const [delivery_type, setDelivery_type] = useState(1)
  const [payment_type, setPayment_type] = useState(1)
  const [comment, setComment] = useState(null)
  const dispatch = useDispatch()

  const { t } = useTranslation()

  const onSubmitCheckout = async () => {
    try {
      const res = await productAPI.cartCheckout({
        delivery_type: delivery_type,
        payment_type: payment_type,
        comment: comment,
      })

      if (res.data.status && res.status === 200) {
        setOpen(true)
        dispatch(CartCount(0))
      }
    } catch (e) {
      if (e.response && e.response.data) {
        console.log(e.response.data.message) // some reason error message
      }
    }
  }

  return (
    <div className="mx-auto mt-8 max-w-7xl py-0 lg:py-5 lg:px-4">
      <div className="grid-cols-3 gap-5 xl:grid">
        <div className="col-span-2 rounded px-4 py-4 sm:px-10 sm:py-[30px] xl:shadow-[0_2px_12px_rgba(0,0,0,0.14)]">
          <div className="page-title flex items-center border-b-2 border-[#EDEDED] pb-4">
            <h1>{t('Checkout')}</h1>
            <button
              onClick={() => setCheck(false)}
              className="flex items-center text-sm font-bold text-[#434343]"
            >
              <ChevronLeftIcon width={15} height={15} className="mr-2" />
              {t('Go back')}
            </button>
          </div>
          <div>
            <div>
              <h3 className="mt-8 font-bold uppercase">
                {t('Delivery method')}
              </h3>
              <div className="grid-cols-2 gap-5 sm:grid">
                <label className="checkout-radio w-full cursor-pointer">
                  <input
                    type="radio"
                    name="radio"
                    value="1"
                    className="hidden"
                    onChange={(e) => setDelivery_type(+e.target.value)}
                    defaultChecked
                  />
                  <div className="checkout-card my-5 w-full rounded border-2 border-transparent bg-[#F0F0F0] p-[30px] text-center">
                    <h4 className="font-Inter text-xl text-[#434343]">
                      {t('Transport services')}
                    </h4>
                    <p className="mt-3 text-[#00000066]">
                      {t('checkout cart_1 text_1')} <br />{' '}
                      {t('checkout cart_1 text_2')}
                    </p>
                  </div>
                </label>
                <label className="checkout-radio w-full cursor-pointer">
                  <input
                    type="radio"
                    name="radio"
                    value="2"
                    onChange={(e) => setDelivery_type(+e.target.value)}
                    className="hidden"
                  />
                  <div className="checkout-card my-5 w-full rounded border-2 border-transparent bg-[#F0F0F0] p-[30px] text-center">
                    <h4 className="font-Inter text-xl text-[#434343]">
                      {t('Pickup from the factory')}
                    </h4>
                    <p className="mt-3 text-[#00000066]">
                      {t('checkout cart_2 text_1')} <br />{' '}
                      {t('checkout cart_2 text_2')}
                    </p>
                  </div>
                </label>
              </div>
            </div>
            <div>
              <h3 className="mt-8 font-bold uppercase">
                {t('Delivery method')}
              </h3>
              <div className="grid-cols-2 gap-5 sm:grid">
                <label className="checkout-radio w-full cursor-pointer">
                  <input
                    type="radio"
                    name="cash"
                    value="1"
                    onChange={(e) => setPayment_type(+e.target.value)}
                    className="hidden"
                    defaultChecked
                  />
                  <div className="checkout-card my-5 w-full rounded border-2 border-transparent bg-[#F0F0F0] p-[30px] text-center">
                    <h4 className="font-Inter text-xl text-[#434343]">
                      {t('Cash')}
                    </h4>
                  </div>
                </label>
                <label className="checkout-radio w-full cursor-pointer">
                  <input
                    type="radio"
                    name="cash"
                    value="2"
                    onChange={(e) => setPayment_type(+e.target.value)}
                    className="hidden"
                  />
                  <div className="checkout-card my-5 w-full rounded border-2 border-transparent bg-[#F0F0F0] p-[30px] text-center">
                    <h4 className="font-Inter text-xl text-[#434343]">
                      {t('Card')}
                    </h4>
                  </div>
                </label>
              </div>
            </div>
            <div>
              <h3 className="mt-8 font-bold uppercase">
                {t('checkout commet')}
              </h3>
              <form action="#">
                <textarea
                  rows={8}
                  onChange={(e) => setComment(e.target.value)}
                  className="my-5 block w-full rounded-sm border-2 border-gray-200 bg-[#F0F0F0] px-4 py-2.5 sm:text-base"
                  placeholder={t('Comments')}
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
            <h1>{t('Total')}:</h1>
            <p className="font-Bebas text-[32px] text-[#434343]">
              {sum.toLocaleString('en-ZA')} UZS
            </p>
          </div>
          <div className="font-bold uppercase text-[#434343]">
            <div className="mt-5 flex justify-between">
              <p>
                {t('Products')}, {productCounter} {t('thing')}.
              </p>
              <p>{sum.toLocaleString('en-ZA')} UZS</p>
            </div>
            <div className="mt-5 flex justify-between">
              <p>{t('Delivery')}</p>
              <p>200 000 UZS</p>
            </div>
            <div className="mt-5 flex justify-between">
              <p>{t('payment')}</p>
              <p>{t('Cash')}</p>
            </div>
          </div>
          <button
            className="btn mt-7 w-full rounded-sm text-lg"
            onClick={() => onSubmitCheckout()}
          >
            {t('Checkout')}
          </button>
        </div>
      </div>
      <Modall open={open} setOpen={setOpen} setCheck={setCheck} />
    </div>
  )
}

export default Checkout
