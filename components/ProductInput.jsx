import React, { useState } from 'react'
import Select, { NonceProvider } from 'react-select'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { Disclosure } from '@headlessui/react'

function ProductInput({ select }) {
  const [count, setCount] = useState(1)

  const handleOnChange = (e) => {
    setCount(+e.target.value)
  }

  const colourOptions = [
    { value: '20 000mm', label: '20 000mm', color: '#00B8D9', isFixed: true },
    { value: '500mm', label: '500mm', color: '#0052CC', isDisabled: true },
    { value: '250mm', label: '250mm', color: '#5243AA' },
    { value: '100mm', label: '100mm', color: '#FF5630' },
  ]

  return (
    <div className="mt-4" id="product">
      <Disclosure as="div" className="relative rounded-lg bg-[#F0F0F0] p-6">
        {({ open }) => (
          <>
            <h3 className="grid grid-cols-2 items-center justify-between gap-5 xl:grid-cols-3 ">
              <div>
                <label className="text-base font-normal">Выберите длину:</label>
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
                <label className="text-base font-normal">Выберите длину:</label>
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
                <label className="text-base font-normal">
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
                    className="mt-0 w-20 border-0 bg-[#F0F0F0] text-center text-base font-semibold text-black outline-none focus:outline-none"
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
                        class="mt-0 h-4 w-4 accent-[#016059]"
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
                  <label className="text-base font-normal">
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
                  <label className="text-base font-normal">
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
                  <label className="text-base font-normal">
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
  )
}

export default ProductInput

{
  /* <div className="mt-4">
                <div className="absolute top-3 right-3">
                  {select ? (
                    <label>
                      <input
                        type="checkbox"
                        class="h-4 w-4 accent-[#016059]"
                        id="checkbox_id"
                        name="checkbox"
                        defaultChecked={true}
                      />
                    </label>
                  ) : (
                    <div onClick={() => setOpen((prev) => !prev)}>
                      <img
                        src="/svg/angle-top.svg"
                        className="cursor-pointer"
                        alt="Angle Top"
                      />
                    </div>
                  )}
                </div>
                <div
                  className={`accordion-card grid grid-cols-2 items-center justify-between gap-5 overflow-hidden rounded-lg bg-[#F0F0F0] p-6 xl:grid-cols-3 ${
                    open ? 'h-[125px]' : 'h-full'
                  }`}
                >
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
                    <label className="font-normal">Толщина, мм:</label>
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
                    <label className="font-normal">Количество листов:</label>
                    <div className="mt-2 flex h-11 max-w-[184px] justify-between rounded-sm border-2 border-[#434343] px-[18px]">
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
                  <div>
                    <label className="font-normal">Цвет:</label>
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
                    <label className="font-normal">Производства:</label>
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
              </div> */
}
