import React, { useEffect, useState } from 'react'
import { FaTag } from 'react-icons/fa'
import Empty from './Empty'
//API
import { productAPI } from '../api'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'
//REACT TOASTIFY
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//REDUX
import { useDispatch, useSelector } from 'react-redux'
import { CartCount } from '../redux/cart'

function Shopping({ setCheck, setSum }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const cartCount = useSelector((state) => state.cart)

  const notifyErorr = () => toast.error(t('Error Card add'))

  const notifyCartClear = () => toast.success(t('Cleared successfully'))

  const onSubmit = async () => {
    setLoading(true)
    try {
      const res = await productAPI.cart()

      console.log('res', res.data.data)
      setData(res?.data.data)
    } catch (e) {
      if (e.response && e.response.data && e.response.status === 401) {
        notifyErorr()
        console.log(e.response.data.message)
      }
    }
    setLoading(false)
  }

  const CardRemove = async (productId) => {
    setLoading(true)
    try {
      const res = await productAPI.removeFromCart({ product_id: productId })

      dispatch(CartCount(cartCount - 1))

      onSubmit()
    } catch (e) {
      if (e.response && e.response.data) {
        console.log(e.response.data.message) // some reason error message
      }
    }
    setLoading(false)
  }

  const CardClear = async () => {
    try {
      const res = await productAPI.clearCart()

      notifyCartClear()
      onSubmit()
      dispatch(CartCount(0))

      console.log('card clear', res.status)
      if (res.status === 200) {
      }
    } catch (e) {
      if (e.response && e.response.data) {
        console.log(e.response.data.message) // some reason error message
      }
    }
  }

  const SumAmount = data.map((a) => a.amount).reduce((a, b) => a + b, 0)

  useEffect(() => {
    onSubmit()
  }, [])

  useEffect(() => {
    setSum(SumAmount)
  })

  return (
    <div className="mx-auto mt-8 max-w-7xl py-0 lg:py-5 lg:px-4">
      <div className="grid-cols-3 gap-5 xl:grid">
        <div className="col-span-2 rounded px-4 py-4 sm:px-10 sm:py-[30px] xl:shadow-[0_2px_12px_rgba(0,0,0,0.14)]">
          <div className="page-title flex items-center border-b-2 border-[#EDEDED] pb-4">
            <h1>{t('Your shopping cart')}</h1>
            <p className="hidden items-center font-bold text-[#016059] sm:flex">
              <FaTag className="mr-2" />
              {t('Products')}:{' '}
              <span className="ml-1 !text-black">
                {data.length} {t('thing')}
              </span>
            </p>
            <button
              className="rounded bg-[#016059] px-3 py-1 text-white disabled:opacity-75 sm:px-5 sm:py-2"
              disabled={!data.length > 0}
              onClick={() => CardClear()}
            >
              Clear Cart
            </button>
          </div>
          <div>
            {loading ? (
              <div className="flex w-full">
                <img
                  className="mx-auto w-[200px]"
                  src="/loading.svg"
                  alt="Loading"
                />
              </div>
            ) : data.length > 0 ? (
              data.map((item) => (
                <div key={item?.id}>
                  <div className="m-auto mt-8 flex h-full max-w-3xl justify-between gap-5 xl:m-0 xl:mt-8 xl:h-[160px]">
                    <img
                      className="h-20 w-20 rounded object-cover sm:h-40 sm:w-40"
                      src={item?.media}
                    />
                    <div className="w-full justify-between gap-8 lg:flex">
                      <div className="flex flex-col justify-between">
                        <div className="font-bold">
                          <p className="uppercase">{item?.full_name}</p>
                        </div>
                        <div className="flex flex-col gap-y-2.5 text-xs uppercase text-[#434343]">
                          <span>Цвет: RAL 8017</span>
                          <span>Производство: ММК</span>
                          <span>Толщина: 0,5</span>
                        </div>
                      </div>
                      <div className="mt-3 flex max-w-[220px] flex-col justify-between lg:mt-0">
                        <div>
                          <p className="font-normal text-[#434343]">
                            {t('Total cost')}
                          </p>
                          <span className="font-Bebas text-[32px] ">
                            {item.amount?.toLocaleString('en-ZA')} UZS
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-end">
                      <div
                        className="mt-2.5 h-7 w-7 cursor-pointer rounded-sm bg-red-600 px-[7px] py-[6px] text-white"
                        onClick={() => CardRemove(item.id)}
                      >
                        <img className="w-4" src="/svg/trash.svg" alt="Trash" />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <Empty />
            )}
          </div>
        </div>
        <div className="m-auto mt-7 max-h-[292px] max-w-[500px] rounded p-[30px] xl:m-0 xl:shadow-[0_2px_12px_rgba(0,0,0,0.14)]">
          <div
            className="page-title pb -4 flex items-center border-t-2 border-[#EDEDED]
          pt-4 xl:border-t-0 xl:border-b-2 xl:pt-0"
          >
            <h1>{t('Total')}:</h1>
            <p className="font-Bebas text-[32px] text-[#434343]">
              {SumAmount?.toLocaleString('en-ZA')} UZS
            </p>
          </div>
          <div className="mt-5 flex justify-between font-bold uppercase text-[#434343]">
            <p>
              {t('Products')}, {data.length} {t('thing')}.
            </p>
            <p>{SumAmount?.toLocaleString('en-ZA')} UZS</p>
          </div>
          <button
            className="btn mt-7 w-full rounded-sm text-lg disabled:opacity-75"
            disabled={!data.length > 0}
            onClick={() => setCheck(true)}
          >
            {t('Checkout')}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Shopping
