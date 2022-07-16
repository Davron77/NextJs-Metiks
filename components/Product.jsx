import { Disclosure } from '@headlessui/react'
import { useState, useRef } from 'react'
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
import { MinusSmIcon, PlusIcon } from '@heroicons/react/solid'
import { MdDeleteOutline } from 'react-icons/md'
// From
import { v4 as uuidv4 } from 'uuid'

function Product({ products }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [showDelete, SetShowDelete] = useState(1)
  const [counts, setCounts] = useState([
    {
      id: uuidv4(),
      count: 1,
      metr: 1,
    },
  ])

  const getInputData = (e, index) => {
    let prevCounts = [...counts]
    prevCounts[index].metr = +e?.target?.value
    setCounts(prevCounts)
  }

  const removeInput = (id) => {
    const filterInput = counts.filter((item) => {
      return item.id !== id
    })
    setCounts(filterInput)
    SetShowDelete(counts.length - 1)
    console.log(counts.length - 1)
  }

  const sum = counts.map((a) => a.count + a.metr).reduce((a, b) => a + b)

  console.log(sum)

  return (
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
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img className="rounded-lg" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg" src="/product-slider/1.png" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={20}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper hidden lg:flex"
          >
            <SwiperSlide>
              <img className="rounded-lg" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg" src="/product-slider/1.png" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mx-auto max-w-[646px] lg:mx-0 lg:max-w-full">
          <div className="page-title pt-5 leading-6 sm:leading-[44px] lg:pt-0">
            <h1>{products?.name}</h1>
          </div>
          <div>
            <div className="justify-between xl:flex">
              <div className="mt-6 flex flex-col">
                <span className="font-bold text-[#434343] ">
                  <RiCheckDoubleFill className="inline h-6 w-6 text-[#016059]" />
                  <span className="text-[#016059]">Товар:</span> В наличии
                </span>
                {products?.price_for_m > 0 ? (
                  <span className="mt-3 flex items-center text-2xl font-bold">
                    {products?.price_for_m.toLocaleString('en-ZA')} UZS{' '}
                    <span className="ml-2 text-[#016059]">метр</span>
                  </span>
                ) : null}
                {products?.price_for_kg > 0 ? (
                  <span className="mt-3 flex items-center text-2xl font-bold">
                    {products?.price_for_kg.toLocaleString('en-ZA')} UZS{' '}
                    <span className="ml-2 text-[#016059]">килограмм</span>
                  </span>
                ) : null}
                {products?.price_for_qty > 0 ? (
                  <span className="mt-3 flex items-center text-2xl font-bold">
                    {products?.price_for_qty.toLocaleString('en-ZA')} UZS{' '}
                    <span className="ml-2 text-[#016059]">количество</span>
                  </span>
                ) : null}
              </div>
              <div className="mt-6 flex flex-col">
                <span className="mt-3 text-2xl font-bold">
                  {(sum * products?.price_for_m).toLocaleString('en-ZA')} UZS
                </span>
              </div>
            </div>
            <div className="mt-7">
              <form>
                {counts.map((item, index) => (
                  <div className="mt-4" id="product" key={index}>
                    <div className="relative grid max-w-[638px] grid-cols-2 gap-5 rounded-lg bg-[#F0F0F0] p-[18px] lg:max-w-full xl:flex">
                      <div className="mt-6 flex flex-col">
                        <span className="mt-3 text-2xl font-bold">
                          {(
                            (item.count + item.metr) *
                            products?.price_for_m
                          ).toLocaleString('en-ZA')}{' '}
                          UZS
                        </span>
                      </div>
                      <div className="grid">
                        <label className="!mt-0 text-base font-normal">
                          Выберите длину:
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="5"
                          defaultValue={1}
                          onChange={(e) => {
                            getInputData(e, index)
                          }}
                          className="mt-0 w-[168px] rounded-sm border-2 border-[#434343] bg-[#F0F0F0] p-1 text-center text-base text-black"
                        />
                      </div>
                      <div>
                        <label className="text-base font-normal">
                          Количество листов:
                        </label>
                        <div className="mt-2 flex h-11 max-w-[184px] justify-between rounded-sm border-2 border-[#434343]">
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
                            value={item.count}
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
                    metr: 1,
                  })
                  setCounts(prevcounts)
                  SetShowDelete(counts.length + 1)
                }}
              >
                <PlusIcon width={24} className="mr-2 text-[#D6A300]" />
                <span className="border-b border-transparent hover:border-[#434343]">
                  Добавить лист другой длины
                </span>
              </button>
            </div>
            <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <button className="btn rounded-sm">Добавить в корзину</button>
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
                  {/* hover:border-[#434343] */}
                  Рассчитать в калькуляторе
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
            <div className="mt-7 hidden justify-between font-normal lg:flex">
              <div>
                <img className=" mr-2.5 inline" src="/svg/1.svg" alt="svg" />
                <span>Быстрое доставка</span>
              </div>
              <div>
                <img className=" mr-2.5 inline" src="/svg/2.svg" alt="svg" />
                <span>Онлайн-поддержка</span>
              </div>
              <div>
                <img className=" mr-2.5 inline" src="/svg/3.svg" alt="svg" />
                <span>Гибкая Оплата</span>
              </div>
            </div>
            <div className="mt-8 border-t border-[#00000033]">
              <Disclosure as="div" className="border-b border-[#00000033] py-3">
                {({ open }) => (
                  <>
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-base text-gray-400 hover:text-gray-500">
                        <span className="font-semibold uppercase text-[#016059]">
                          Информация о доставке
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
                        <div className="flex justify-between px-4 py-3 odd:bg-white even:bg-slate-100 sm:gap-4 sm:px-6">
                          <dt>Full name</dt>
                          <dd>Margot Foster</dd>
                        </div>
                        <div className="flex justify-between px-4 py-3 odd:bg-white even:bg-slate-100 sm:gap-4 sm:px-6">
                          <dt>Application for</dt>
                          <dd>Backend Developer</dd>
                        </div>
                        <div className="flex justify-between px-4 py-3 odd:bg-white even:bg-slate-100 sm:gap-4 sm:px-6">
                          <dt>Email address</dt>
                          <dd>margotfoster@example.com</dd>
                        </div>
                      </dl>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="border-b border-[#00000033] py-3">
                {({ open }) => (
                  <>
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-base text-gray-400 hover:text-gray-500">
                        <span className="font-semibold uppercase text-[#016059]">
                          Варианты оплаты
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
                        <div className="flex justify-between px-4 py-3 odd:bg-white even:bg-slate-100 sm:gap-4 sm:px-6">
                          <dt>Full name</dt>
                          <dd>Margot Foster</dd>
                        </div>
                        <div className="flex justify-between px-4 py-3 odd:bg-white even:bg-slate-100 sm:gap-4 sm:px-6">
                          <dt>Application for</dt>
                          <dd>Backend Developer</dd>
                        </div>
                        <div className="flex justify-between px-4 py-3 odd:bg-white even:bg-slate-100 sm:gap-4 sm:px-6">
                          <dt>Email address</dt>
                          <dd>margotfoster@example.com</dd>
                        </div>
                      </dl>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
