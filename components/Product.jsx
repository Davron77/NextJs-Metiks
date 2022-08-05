import { Disclosure } from '@headlessui/react'
import { useEffect, useState } from 'react'
import Bestsellers from './Bestsellers'
import ProductSelect from './ProductSelect'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper'
//Icons
import { RiCheckDoubleFill } from 'react-icons/ri'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { HiMinus, HiPlus } from 'react-icons/hi'
import { MinusSmIcon, PlusIcon } from '@heroicons/react/solid'
import { MdDeleteOutline } from 'react-icons/md'
// From
import { v4 as uuidv4 } from 'uuid'
//API
import { productAPI } from '../api'
//REACT TOASTIFY
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//REDUX
import { useDispatch, useSelector } from 'react-redux'
import { CartCount } from '../redux/cart'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'
import Cookies from 'js-cookie'

function Product({ productId }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [showDelete, setShowDelete] = useState(1)
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [counts, setCounts] = useState([
    {
      id: uuidv4(),
      count: 1,
      metr: 100,
    },
  ])

  const dispatch = useDispatch()
  const cartCount = useSelector((state) => state.cart)

  const { t } = useTranslation()

  const notifyErorr = () => toast.error(t('Error Card add'))
  const notifySuccess = () => toast.success(t('Added successfully'))
  const notifyRemove = () => toast.success(t('removed successfully'))
  const notifyAddErorr = (props) => toast.error(props)

  const getInputData = (e, index) => {
    const value = +e.target.value

    let prevCounts = [...counts]
    prevCounts[index].metr = value
    setCounts(prevCounts)
  }

  const removeInput = (id) => {
    const filterInput = counts.filter((item) => {
      return item.id !== id
    })
    setCounts(filterInput)
    setShowDelete(counts.length - 1)
  }

  const sumCount = counts.map((a) => a.count).reduce((a, b) => a + b)
  const sumMetr = counts.map((a) => a.metr).reduce((a, b) => a + b)

  let cartItems = []

  if (products?.sell_by_qty && products?.has_min_max_for_one_qty) {
    cartItems = counts.map((item) => ({
      mm_per_piece: item.metr,
      qty: item.count,
    }))
  } else if (!products?.has_min_max_for_one_qty && products?.sell_by_qty) {
    cartItems = counts.map((item) => ({
      qty: item.count,
    }))
  } else if (!products?.sell_by_qty && !products?.has_min_max_for_one_qty) {
    cartItems = counts.map((item) => ({
      mm_per_piece: item.metr,
      qty: 1,
    }))
  }

  let lre = ''

  if (products?.sell_by_qty && products?.has_min_max_for_one_qty) {
    lre = ((sumMetr / 1000) * sumCount * products?.price_for_m).toLocaleString(
      'en-ZA'
    )
  } else if (!products?.has_min_max_for_one_qty && products?.sell_by_qty) {
    lre = (sumCount * products?.price_for_qty).toLocaleString('en-ZA')
  } else if (!products?.sell_by_qty && !products?.has_min_max_for_one_qty) {
    lre = ((sumMetr / 1000) * 1 * products?.price_for_m).toLocaleString('en-ZA')
  }

  const getProductData = async () => {
    try {
      let res = []

      if (typeof window !== 'undefined' && Cookies.get('token')) {
        res = await productAPI.productPost(productId)
      } else {
        res = await productAPI.product(productId)
      }

      setProducts(res.data.data)
    } catch (e) {
      if (e.response && e.response.data && e.response.status === 401) {
        notifyErorr()
      }
    }
  }

  const onSubmit = async () => {
    setLoading(true)
    try {
      const res = await productAPI.addToCart({
        product_id: productId,
        cart_items: cartItems,
      })

      if (res.status === 200) {
        notifySuccess()
        dispatch(CartCount(cartCount + 1))
        getProductData()
        setCounts([
          {
            id: uuidv4(),
            count: 1,
            metr: 100,
          },
        ])
      }
    } catch (e) {
      console.log(e.response.data.message)
      if (e.response && e.response.data && e.response.status === 401) {
        notifyErorr()
      } else if (e.response && e.response.data && e.response.status === 422) {
        notifyAddErorr(e.response.data.message)
      }
    }
    setLoading(false)
  }

  const removeCartItem = async (id) => {
    try {
      const res = await productAPI.removeFromCart({
        product_id: productId,
        cart_item_id: id,
      })

      if (res.status === 200) {
        notifyRemove()
        getProductData()
        dispatch(CartCount(cartCount + 1))
      }
    } catch (e) {
      if (e.response && e.response.data && e.response.status === 401) {
        notifyErorr()
      }
    }
  }

  useEffect(() => {
    getProductData()
  }, [])

  return (
    <>
      <div
        id="product"
        className="mx-auto mt-5 max-w-7xl px-2 sm:mt-10 sm:px-6 lg:px-8"
      >
        <div className="grid-cols-2 gap-5 lg:grid">
          <div>
            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
                marginBottom: '20px',
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img
                  className="h-full w-full rounded-lg"
                  src={products?.media}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="h-full w-full rounded-lg"
                  src={products?.media}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="mx-auto mb-[50px] max-w-[646px] sm:mb-[100px] lg:mx-0 lg:max-w-full">
            <div className="page-title pt-5 leading-6 sm:leading-[44px] lg:pt-0">
              <h1>{products?.name}</h1>
            </div>
            <div>
              <div className="justify-between xl:flex">
                <div className="mt-6 flex flex-col">
                  <span className="font-bold text-[#434343] ">
                    <RiCheckDoubleFill className="inline h-6 w-6 text-[#016059]" />
                    <span className="text-[#016059]">{t('Product')}:</span>{' '}
                    {t('in stock')}
                  </span>
                  {products?.price_for_m > 0 ? (
                    <span className="mt-3 flex items-center text-2xl font-bold">
                      {products?.price_for_m.toLocaleString('en-ZA')} UZS{' '}
                      <span className="ml-2 text-[#016059]">{t('meter')}</span>
                    </span>
                  ) : null}
                  {products?.price_for_kg > 0 ? (
                    <span className="mt-3 flex items-center text-2xl font-bold">
                      {products?.price_for_kg.toLocaleString('en-ZA')} UZS{' '}
                      <span className="ml-2 text-[#016059]">
                        {t('kilogram')}
                      </span>
                    </span>
                  ) : null}
                  {products?.price_for_qty > 0 ? (
                    <span className="mt-3 flex items-center text-2xl font-bold">
                      {products?.price_for_qty.toLocaleString('en-ZA')} UZS{' '}
                      <span className="ml-2 text-[#016059]">{t('amount')}</span>
                    </span>
                  ) : null}
                </div>
                <div className="mt-6 flex flex-col">
                  <span className="mt-3 text-2xl font-bold">
                    {lre}
                    UZS{' '}
                    <span className="ml-2 text-[#016059]">{t('Total')}</span>
                  </span>
                </div>
              </div>
              {products?.cart_items?.length > 0 ? (
                <div className="mt-7">
                  <h3 className=" font-Bebas text-2xl font-bold">
                    {t('Cart Products')}
                  </h3>
                  {products.cart_items.map((item, index) => (
                    <div className="mt-4" id="product" key={index}>
                      <div className="relative flex max-w-[638px] gap-5 rounded-lg bg-[#F0F0F0] p-2.5 xs:p-[18px] lg:max-w-full">
                        <div>
                          <div>
                            <span className="mr-1 text-base font-normal">
                              {t('length')}:
                            </span>
                            <span>
                              {(+item?.mm_per_piece).toLocaleString('en-ZA')}
                            </span>
                          </div>
                          <div>
                            <span className="mr-1 text-base font-normal">
                              {t('amount')}:
                            </span>
                            <span>{item?.qty}</span>
                          </div>
                        </div>
                        <div>
                          <span>
                            {(+item?.amount).toLocaleString('en-ZA')} UZS
                          </span>
                        </div>
                        <button
                          className="absolute right-2 top-2"
                          type="button"
                          onClick={() => removeCartItem(item.cart_item_id)}
                        >
                          <MdDeleteOutline className="text-xl text-red-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                products?.cart_items
              )}
              <div className="mt-7">
                <form>
                  {counts.map((item, index) => (
                    <div className="mt-4" id="product" key={index}>
                      <div className="relative grid max-w-[638px] grid-cols-2 gap-5 rounded-lg bg-[#F0F0F0] p-2.5 xs:p-[18px] md:grid-cols-3 lg:max-w-full lg:grid-cols-2 xl:grid-cols-3">
                        {products?.sell_by_qty &&
                        products?.has_min_max_for_one_qty ? (
                          <>
                            <div className="basis-1/3">
                              <label className="text-base font-normal">
                                {t('Number of sheets')}
                              </label>
                              <div className="mt-2 flex h-11 w-full justify-between rounded-sm border-2 border-[#434343]">
                                <button
                                  type="button"
                                  onClick={() => {
                                    if (item.count > 1) {
                                      let prevCounts = [...counts]
                                      prevCounts[index].count =
                                        prevCounts[index].count - 1
                                      setCounts(prevCounts)
                                    }
                                  }}
                                  className="px-[18px]"
                                >
                                  <AiOutlineMinus />
                                </button>
                                <input
                                  id="myNumber"
                                  value={counts[index].count || ''}
                                  onChange={(e) => {
                                    let prevCounts = [...counts]
                                    prevCounts[index].count = e.target.value
                                    setCounts(prevCounts)
                                  }}
                                  className="mt-0 w-[60px] border-none bg-[#F0F0F0] text-center text-base text-black !outline-none"
                                />

                                <button
                                  type="button"
                                  className="px-[18px]"
                                  onClick={() => {
                                    let prevCounts = [...counts]
                                    prevCounts[index].count =
                                      prevCounts[index].count + 1
                                    setCounts(prevCounts)
                                  }}
                                >
                                  <AiOutlinePlus />
                                </button>
                              </div>
                            </div>
                            <div className="grid basis-1/3">
                              <label className="!mt-0 text-base font-normal">
                                {t('Select length')}
                              </label>
                              <input
                                type="number"
                                value={counts[index].metr || ''}
                                onChange={(e) => {
                                  getInputData(e, index)
                                }}
                                className="mt-2 h-[44px] w-full rounded-sm border-2 border-[#434343] bg-[#F0F0F0] p-1 text-center text-base text-black"
                              />
                              {products?.has_min_max_for_one_qty && (
                                <div className="text-center text-red-600">
                                  min <span>{+products.min_m * 1000}</span>, max{' '}
                                  <span>{+products.max_m * 1000}</span>
                                </div>
                              )}
                            </div>
                          </>
                        ) : (
                          ''
                        )}
                        {!products?.has_min_max_for_one_qty &&
                        products?.sell_by_qty ? (
                          <div className="basis-1/3">
                            <label className="text-base font-normal">
                              {t('Number of sheets')}
                            </label>
                            <div className="mt-2 flex h-11 w-full justify-between rounded-sm border-2 border-[#434343]">
                              <button
                                type="button"
                                onClick={() => {
                                  if (item.count > 1) {
                                    let prevCounts = [...counts]
                                    prevCounts[index].count =
                                      prevCounts[index].count - 1
                                    setCounts(prevCounts)
                                  }
                                }}
                                className="px-[18px]"
                              >
                                <AiOutlineMinus />
                              </button>
                              <input
                                id="myNumber"
                                value={counts[index].count || ''}
                                onChange={(e) => {
                                  let prevCounts = [...counts]
                                  prevCounts[index].count = e.target.value
                                  setCounts(prevCounts)
                                }}
                                className="mt-0 w-[60px] border-none bg-[#F0F0F0] text-center text-base text-black !outline-none"
                              />

                              <button
                                type="button"
                                className="px-[18px]"
                                onClick={() => {
                                  let prevCounts = [...counts]
                                  prevCounts[index].count =
                                    prevCounts[index].count + 1
                                  setCounts(prevCounts)
                                }}
                              >
                                <AiOutlinePlus />
                              </button>
                            </div>
                          </div>
                        ) : (
                          ''
                        )}
                        {!products?.sell_by_qty &&
                        !products?.has_min_max_for_one_qty ? (
                          <div className="grid basis-1/3">
                            <label className="!mt-0 text-base font-normal">
                              {t('Select length')}
                            </label>
                            <input
                              type="number"
                              value={counts[index].metr || ''}
                              onChange={(e) => {
                                getInputData(e, index)
                              }}
                              className="mt-2 h-[44px] w-full rounded-sm border-2 border-[#434343] bg-[#F0F0F0] p-1 text-center text-base text-black"
                            />
                            {products?.has_min_max_for_one_qty && (
                              <div className="text-center text-red-600">
                                min <span>{+products.min_m * 1000}</span>, max{' '}
                                <span>{+products.max_m * 1000}</span>
                              </div>
                            )}
                          </div>
                        ) : (
                          ''
                        )}
                        {showDelete != 1 ? (
                          <button
                            className="absolute right-2 top-2"
                            type="button"
                            onClick={() => removeInput(item.id)}
                          >
                            <MdDeleteOutline className="text-xl text-red-600" />
                          </button>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </form>
              </div>
              <div className="mt-4 flex flex-wrap justify-between gap-y-4 font-normal">
                <button
                  className="flex"
                  onClick={() => {
                    let prevcounts = [...counts]
                    prevcounts.push({
                      id: uuidv4(),
                      count: 1,
                      metr: 100,
                    })
                    setCounts(prevcounts)
                    setShowDelete(counts.length + 1)
                  }}
                >
                  <PlusIcon width={24} className="mr-2 text-[#D6A300]" />
                  <span className="border-b border-transparent hover:border-[#434343]">
                    {t('Add length')}
                  </span>
                </button>
              </div>
              <div className="py-4">
                <ProductSelect
                  data={products?.filter.props}
                  filterId={products?.filter.id}
                  productId={products?.id}
                />
              </div>
              <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <button
                  className="btn flex items-center justify-center rounded-sm disabled:opacity-75 "
                  onClick={() => onSubmit()}
                  disabled={loading}
                >
                  {loading ? (
                    <div className="mr-5 w-5">
                      <img src="/loading_4.svg" alt="Loading" />
                    </div>
                  ) : (
                    ''
                  )}
                  <span>{t('Add to Cart')}</span>
                </button>
                <button
                  className="btn flex !cursor-not-allowed items-center justify-center rounded-sm !bg-[#F0F0F0] !text-[#434343]"
                  disabled
                >
                  <img
                    className="mr-2 h-5 w-5"
                    src="/svg/calculator.svg"
                    alt="Calculator"
                  />
                  <span className="border-b border-transparent">
                    {t('Calculate')}
                  </span>
                </button>
              </div>
              <div className="my-7">
                <dl className=" text-base text-[#434343]">
                  {products?.properties?.map((item) => (
                    <div
                      className="flex justify-between px-4 py-3 odd:bg-white even:bg-slate-100 sm:gap-4 sm:px-6"
                      key={item.value}
                    >
                      <dt>{item.type}</dt>
                      <dd>{item.label}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="mt-7 hidden justify-between gap-5 font-normal lg:flex">
                <div>
                  <img className=" mr-2.5 inline" src="/svg/1.svg" alt="svg" />
                  <span>{t('Fast delivery')}</span>
                </div>
                <div>
                  <img className=" mr-2.5 inline" src="/svg/2.svg" alt="svg" />
                  <span>{t('Online support')}</span>
                </div>
                <div>
                  <img className=" mr-2.5 inline" src="/svg/3.svg" alt="svg" />
                  <span>{t('Flexible Payment')}</span>
                </div>
              </div>
              <div className="mt-8 border-t border-[#00000033]">
                <Disclosure
                  as="div"
                  className="border-b border-[#00000033] py-3"
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-base text-gray-400 hover:text-gray-500">
                          <span className="font-semibold uppercase text-[#016059]">
                            {t('Information delivery')}
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <HiMinus
                                className="h-5 w-5 text-[#016059]"
                                aria-hidden="true"
                              />
                            ) : (
                              <HiPlus
                                className="h-5 w-5 text-[#016059]"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <dl className=" text-base text-[#434343]">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Dolore, incidunt magni. Ea officia asperiores,
                          suscipit nulla blanditiis officiis numquam iure
                          aliquid incidunt, accusantium vero magni ab veniam
                          eaque beatae consectetur nemo reiciendis culpa saepe?
                          Odit possimus voluptatum nemo, earum natus optio
                          corrupti aperiam, voluptatem vitae minus facilis ab
                          neque repudiandae.
                        </dl>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure
                  as="div"
                  className="border-b border-[#00000033] py-3"
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-base text-gray-400 hover:text-gray-500">
                          <span className="font-semibold uppercase text-[#016059]">
                            {t('Payment Options')}
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusSmIcon
                                className="h-5 w-5 text-[#016059]"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="h-5 w-5 text-[#016059]"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <dl className=" text-base text-[#434343]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Molestias aperiam alias nisi quaerat reiciendis,
                          impedit, optio id soluta fugiat assumenda iste eaque
                          perspiciatis sequi. Exercitationem temporibus
                          accusamus dolores harum quas deleniti eveniet libero,
                          optio vitae alias nostrum nobis qui at incidunt
                          distinctio reprehenderit! Quisquam, atque voluptates!
                          Doloremque nobis alias nihil.
                        </dl>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
      {products?.recommend_products?.length > 0 && (
        <Bestsellers products={products?.recommend_products} />
      )}
    </>
  )
}

export default Product
