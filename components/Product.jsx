import { Disclosure } from '@headlessui/react'
import { MinusSmIcon, PlusIcon } from '@heroicons/react/solid'
import { MdDeleteOutline, MdDelete } from 'react-icons/md'

import React, { useState } from 'react'
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
// SELECT
import Select, { NonceProvider } from 'react-select'

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

const colourOptions = [
  { value: '20 000mm', label: '20 000mm', color: '#00B8D9', isFixed: true },
  { value: '500mm', label: '500mm', color: '#0052CC', isDisabled: true },
  { value: '250mm', label: '250mm', color: '#5243AA' },
  { value: '100mm', label: '100mm', color: '#FF5630' },
]

function Product() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [count, setCount] = useState(1)
  const [select, setSelect] = useState(false)

  const handleOnChange = (e) => {
    setCount(+e.target.value)
  }

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
              <img className="rounded-md" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-md" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-md" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-md" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-md" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-md" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-md" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-md" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-md" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-md" src="/product-slider/1.png" />
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
              <img className="rounded-md" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-md" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-md" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-md" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-md" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-md" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-md" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-md" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-md" src="/product-slider/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-md" src="/product-slider/1.png" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <div className="page-title leading-6 sm:leading-[44px]">
            <h1>Рулон из оцинкованной стали с полимерным покрытием</h1>
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
              <div className="mt-4">
                <Disclosure
                  as="div"
                  className="relative rounded-lg bg-[#F0F0F0] p-6"
                >
                  {({ open }) => (
                    <>
                      <h3 className="grid grid-cols-2 items-center justify-between gap-5 xl:grid-cols-3 ">
                        <div>
                          <label className="font-normal">Выберите длину:</label>
                          <Select
                            defaultValue={colourOptions[0]}
                            options={colourOptions}
                            className="mt-2"
                            theme={(theme) => ({
                              ...theme,
                              borderRadius: 2,
                              borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
                              colors: {
                                ...theme.colors,
                                primary: 'black',
                              },
                            })}
                          />
                        </div>
                        <div>
                          <label className="font-normal">Выберите длину:</label>
                          <Select
                            defaultValue={colourOptions[0]}
                            options={colourOptions}
                            className="mt-2"
                            theme={(theme) => ({
                              ...theme,
                              borderRadius: 2,
                              borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
                              colors: {
                                ...theme.colors,
                                primary: 'black',
                              },
                            })}
                          />
                        </div>
                        <div className="hidden xl:block">
                          <label className="font-normal">
                            Количество листов:
                          </label>
                          <div className="mt-2 flex h-11 justify-between rounded-sm border-2 border-[#434343] px-[18px]">
                            <button onClick={() => setCount(count - 1)}>
                              <AiOutlineMinus />
                            </button>
                            <input
                              type="text"
                              value={count}
                              onChange={handleOnChange}
                              className="w-20 bg-[#F0F0F0] text-center font-semibold outline-none"
                            />
                            <button onClick={() => setCount(count + 1)}>
                              <AiOutlinePlus />
                            </button>
                          </div>
                        </div>
                        <div className="absolute top-3 right-3">
                          {select ? (
                            <>
                              <label>
                                <input
                                  type="checkbox"
                                  class="h-4 w-4 accent-[#016059]"
                                  id="checkbox_id"
                                  name="checkbox"
                                  defaultChecked={true}
                                />
                              </label>
                            </>
                          ) : (
                            <Disclosure.Button>
                              <img src="/svg/angle-top.svg" alt="Angle Top" />
                            </Disclosure.Button>
                          )}
                        </div>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className=" grid grid-cols-2 gap-5 xl:grid-cols-3">
                          <div className="xl:hidden">
                            <label className="font-normal">
                              Количество листов:
                            </label>
                            <div className="mt-2 flex h-11 max-w-[184px] justify-between rounded-sm border-2 border-[#434343] px-[18px]">
                              <button onClick={() => setCount(count - 1)}>
                                <AiOutlineMinus />
                              </button>
                              <input
                                type="text"
                                value={count}
                                onChange={handleOnChange}
                                className="w-20 bg-[#F0F0F0] text-center outline-none"
                              />
                              <button onClick={() => setCount(count + 1)}>
                                <AiOutlinePlus />
                              </button>
                            </div>
                          </div>
                          <div>
                            <label className="font-normal">
                              Выберите длину:
                            </label>
                            <Select
                              defaultValue={colourOptions[0]}
                              options={colourOptions}
                              className="mt-2"
                              theme={(theme) => ({
                                ...theme,
                                borderRadius: 2,
                                borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
                                colors: {
                                  ...theme.colors,
                                  primary: 'black',
                                },
                              })}
                            />
                          </div>
                          <div>
                            <label className="font-normal">
                              Выберите длину:
                            </label>
                            <Select
                              defaultValue={colourOptions[0]}
                              options={colourOptions}
                              className="mt-2"
                              theme={(theme) => ({
                                ...theme,
                                borderRadius: 2,
                                borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
                                colors: {
                                  ...theme.colors,
                                  primary: 'black',
                                },
                              })}
                            />
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="mt-4">
                <Disclosure
                  as="div"
                  className="relative rounded-lg bg-[#F0F0F0] p-6"
                >
                  {({ open }) => (
                    <>
                      <h3 className="grid grid-cols-2 items-center justify-between gap-5 xl:grid-cols-3 ">
                        <div>
                          <label className="font-normal">Выберите длину:</label>
                          <Select
                            defaultValue={colourOptions[0]}
                            options={colourOptions}
                            className="mt-2"
                            theme={(theme) => ({
                              ...theme,
                              borderRadius: 2,
                              borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
                              colors: {
                                ...theme.colors,
                                primary: 'black',
                              },
                            })}
                          />
                        </div>
                        <div>
                          <label className="font-normal">Выберите длину:</label>
                          <Select
                            defaultValue={colourOptions[0]}
                            options={colourOptions}
                            className="mt-2"
                            theme={(theme) => ({
                              ...theme,
                              borderRadius: 2,
                              borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
                              colors: {
                                ...theme.colors,
                                primary: 'black',
                              },
                            })}
                          />
                        </div>
                        <div className="hidden xl:block">
                          <label className="font-normal">
                            Количество листов:
                          </label>
                          <div className="mt-2 flex h-11 justify-between rounded-sm border-2 border-[#434343] px-[18px]">
                            <button onClick={() => setCount(count - 1)}>
                              <AiOutlineMinus />
                            </button>
                            <input
                              type="text"
                              value={count}
                              onChange={handleOnChange}
                              className="w-20 bg-[#F0F0F0] text-center font-semibold outline-none"
                            />
                            <button onClick={() => setCount(count + 1)}>
                              <AiOutlinePlus />
                            </button>
                          </div>
                        </div>
                        <div className="absolute top-3 right-3">
                          {select ? (
                            <>
                              <label>
                                <input
                                  type="checkbox"
                                  class="h-4 w-4 accent-[#016059]"
                                  id="checkbox_id"
                                  name="checkbox"
                                  defaultChecked={true}
                                />
                              </label>
                            </>
                          ) : (
                            <Disclosure.Button>
                              <img src="/svg/angle-top.svg" alt="Angle Top" />
                            </Disclosure.Button>
                          )}
                        </div>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className=" grid grid-cols-2 gap-5 xl:grid-cols-3">
                          <div className="xl:hidden">
                            <label className="font-normal">
                              Количество листов:
                            </label>
                            <div className="mt-2 flex h-11 max-w-[184px] justify-between rounded-sm border-2 border-[#434343] px-[18px]">
                              <button onClick={() => setCount(count - 1)}>
                                <AiOutlineMinus />
                              </button>
                              <input
                                type="text"
                                value={count}
                                onChange={handleOnChange}
                                className="w-20 bg-[#F0F0F0] text-center outline-none"
                              />
                              <button onClick={() => setCount(count + 1)}>
                                <AiOutlinePlus />
                              </button>
                            </div>
                          </div>
                          <div>
                            <label className="font-normal">
                              Выберите длину:
                            </label>
                            <Select
                              defaultValue={colourOptions[0]}
                              options={colourOptions}
                              className="mt-2"
                              theme={(theme) => ({
                                ...theme,
                                borderRadius: 2,
                                borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
                                colors: {
                                  ...theme.colors,
                                  primary: 'black',
                                },
                              })}
                            />
                          </div>
                          <div>
                            <label className="font-normal">
                              Выберите длину:
                            </label>
                            <Select
                              defaultValue={colourOptions[0]}
                              options={colourOptions}
                              className="mt-2"
                              theme={(theme) => ({
                                ...theme,
                                borderRadius: 2,
                                borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
                                colors: {
                                  ...theme.colors,
                                  primary: 'black',
                                },
                              })}
                            />
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="mt-4">
                <Disclosure
                  as="div"
                  className="relative rounded-lg bg-[#F0F0F0] p-6"
                >
                  {({ open }) => (
                    <>
                      <h3 className="grid grid-cols-2 items-center justify-between gap-5 xl:grid-cols-3 ">
                        <div>
                          <label className="font-normal">Выберите длину:</label>
                          <Select
                            defaultValue={colourOptions[0]}
                            options={colourOptions}
                            className="mt-2"
                            theme={(theme) => ({
                              ...theme,
                              borderRadius: 2,
                              borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
                              colors: {
                                ...theme.colors,
                                primary: 'black',
                              },
                            })}
                          />
                        </div>
                        <div>
                          <label className="font-normal">Выберите длину:</label>
                          <Select
                            defaultValue={colourOptions[0]}
                            options={colourOptions}
                            className="mt-2"
                            theme={(theme) => ({
                              ...theme,
                              borderRadius: 2,
                              borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
                              colors: {
                                ...theme.colors,
                                primary: 'black',
                              },
                            })}
                          />
                        </div>
                        <div className="hidden xl:block">
                          <label className="font-normal">
                            Количество листов:
                          </label>
                          <div className="mt-2 flex h-11 justify-between rounded-sm border-2 border-[#434343] px-[18px]">
                            <button onClick={() => setCount(count - 1)}>
                              <AiOutlineMinus />
                            </button>
                            <input
                              type="text"
                              value={count}
                              onChange={handleOnChange}
                              className="w-20 bg-[#F0F0F0] text-center font-semibold outline-none"
                            />
                            <button onClick={() => setCount(count + 1)}>
                              <AiOutlinePlus />
                            </button>
                          </div>
                        </div>
                        <div className="absolute top-3 right-3">
                          {select ? (
                            <>
                              <label>
                                <input
                                  type="checkbox"
                                  class="h-4 w-4 accent-[#016059]"
                                  id="checkbox_id"
                                  name="checkbox"
                                  defaultChecked={true}
                                />
                              </label>
                            </>
                          ) : (
                            <Disclosure.Button>
                              <img src="/svg/angle-top.svg" alt="Angle Top" />
                            </Disclosure.Button>
                          )}
                        </div>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className=" grid grid-cols-2 gap-5 xl:grid-cols-3">
                          <div className="xl:hidden">
                            <label className="font-normal">
                              Количество листов:
                            </label>
                            <div className="mt-2 flex h-11 max-w-[184px] justify-between rounded-sm border-2 border-[#434343] px-[18px]">
                              <button onClick={() => setCount(count - 1)}>
                                <AiOutlineMinus />
                              </button>
                              <input
                                type="text"
                                value={count}
                                onChange={handleOnChange}
                                className="w-20 bg-[#F0F0F0] text-center outline-none"
                              />
                              <button onClick={() => setCount(count + 1)}>
                                <AiOutlinePlus />
                              </button>
                            </div>
                          </div>
                          <div>
                            <label className="font-normal">
                              Выберите длину:
                            </label>
                            <Select
                              defaultValue={colourOptions[0]}
                              options={colourOptions}
                              className="mt-2"
                              theme={(theme) => ({
                                ...theme,
                                borderRadius: 2,
                                borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
                                colors: {
                                  ...theme.colors,
                                  primary: 'black',
                                },
                              })}
                            />
                          </div>
                          <div>
                            <label className="font-normal">
                              Выберите длину:
                            </label>
                            <Select
                              defaultValue={colourOptions[0]}
                              options={colourOptions}
                              className="mt-2"
                              theme={(theme) => ({
                                ...theme,
                                borderRadius: 2,
                                borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
                                colors: {
                                  ...theme.colors,
                                  primary: 'black',
                                },
                              })}
                            />
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap justify-between gap-y-4 font-normal">
              <button className="flex">
                <PlusIcon width={24} className="mr-2 text-[#D6A300]" />
                <span className="border-b border-transparent hover:border-[#434343]">
                  Добавить лист другой длины
                </span>
              </button>
              <div>
                <label className="flex h-5 items-center">
                  <input
                    id="checkbox_id"
                    name="checkbox"
                    type="checkbox"
                    onChange={(e) => setSelect((prev) => !prev)}
                    value={select}
                    class="mr-2 h-4 w-4 accent-[#016059]"
                  />
                  Выбрать все
                </label>
              </div>
              <div className="group flex">
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
                        <div className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type="checkbox"
                                defaultChecked={option.checked}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
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
