import { Disclosure } from '@headlessui/react'
import { MinusSmIcon, PlusIcon } from '@heroicons/react/solid'
import { MdDeleteOutline, MdDelete } from 'react-icons/md'
import React, { useEffect, useState } from 'react'
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
// SELECT
import ProductInput from './ProductInput'
import { useForm, useFieldArray } from 'react-hook-form'

const filters = [
  {
    id: 'color',
    name: 'Информация о доставке',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Варианты оплаты',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Общее информация',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
]

function Product({ products }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [select, setSelect] = useState(false)

  const { register, control, handleSubmit } = useForm()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  })

  console.log('wadawawd', products)

  return (
    <div
      id="product"
      className="mx-auto mt-5 max-w-7xl px-2 sm:mt-10 sm:px-6 lg:px-8"
    >
      <div className="grid-cols-2 gap-5 md:grid">
        <div>
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
              'margin-bottom': '20px',
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
        <div>
          <div className="page-title leading-6 sm:leading-[44px]">
            <h1>products.name</h1>
          </div>
          <div>
            <div className="justify-between lg:flex">
              <div className="mt-6 flex flex-col">
                <span className="font-bold text-[#434343] ">
                  <RiCheckDoubleFill className="inline h-6 w-6 text-[#016059]" />
                  <span className="text-[#016059]">Товар:</span> В наличии
                </span>
                <span className="mt-3 flex items-center text-2xl font-bold">
                  75 000 UZS{' '}
                  <span className="ml-3 text-lg font-normal text-[#434343] line-through">
                    90 000 uzs
                  </span>
                </span>
              </div>
              <div className="mt-6 flex flex-col">
                <div>
                  <span className=" mr-1 font-normal">Итого:</span>{' '}
                  <span className=" rounded-sm bg-[#016059] py-1 px-2.5 text-white">
                    За 20.000 мм
                  </span>
                </div>
                <span className="mt-3 text-2xl font-bold">
                  152 000 000 0.95 UZS
                </span>
              </div>
            </div>
            <div className="mt-7">
              <ProductInput select={select} />

              <form onSubmit={handleSubmit(console.log)}>
                {fields.map(({ id }, index) => {
                  return (
                    <div key={id}>
                      <ProductInput select={select} />
                    </div>
                  )
                })}
              </form>
            </div>
            <div className="mt-4 flex flex-wrap justify-between gap-y-4 font-normal">
              <button className="flex" onClick={() => append({})}>
                <PlusIcon width={24} className="mr-2 text-[#D6A300]" />
                <span className="border-b border-transparent hover:border-[#434343]">
                  Добавить лист другой длины
                </span>
              </button>
              <div>
                <label className="flex h-5 cursor-pointer items-center">
                  <input
                    id="checkbox_id"
                    name="checkbox"
                    type="checkbox"
                    onChange={(e) => setSelect((prev) => !prev)}
                    value={select}
                    className="mr-2 h-4 w-4 cursor-pointer accent-[#016059]"
                  />
                  Выбрать все
                </label>
              </div>
              <div className="group flex cursor-pointer">
                <div>
                  <MdDeleteOutline className="text-2xl text-[#C92A2A] group-hover:hidden" />
                  <MdDelete className="hidden text-2xl text-[#C92A2A] group-hover:block" />
                </div>
                <span className="ml-2 border-b border-transparent hover:border-[#434343]">
                  Удалить(10)
                </span>
              </div>
            </div>
            <div className="mt-9 grid grid-cols-1 gap-5 xl:grid-cols-2">
              <button className="btn rounded-sm">Добавить в корзину</button>
              <button className="btn flex items-center justify-center rounded-sm !bg-[#F0F0F0] !text-[#434343]">
                <img
                  className="mr-2 h-5 w-5"
                  src="/svg/calculator.svg"
                  alt="Calculator"
                />
                <span className="border-b border-transparent hover:border-[#434343]">
                  Рассчитать в калькуляторе
                </span>
              </button>
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
              {filters.map((section) => (
                <Disclosure
                  as="div"
                  key={section.id}
                  className="border-b border-[#00000033] py-3"
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-base text-gray-400 hover:text-gray-500">
                          <span className="font-semibold uppercase text-[#016059]">
                            {section.name}
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
