import React, { useEffect, useState, Fragment, useRef } from 'react'
import ReactDOM from 'react-dom'
import { Dialog, Transition } from '@headlessui/react'
// IMPORT ICONS
import { SearchIcon } from '@heroicons/react/outline'
// import {} from 'react-icons'

function Search({ open, setOpen }) {
  const [isBrowser, setIsBrowser] = useState(false)

  const cancelButtonRef = useRef(null)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const data = [
    {
      id: 1,
      name: 'Профнастил и Аксессуары для кровли',
    },
    {
      id: 2,
      name: 'Профнастил и Аксессуары для кровли',
    },
    {
      id: 3,
      name: 'Профнастил и Аксессуары для кровли',
    },
    {
      id: 4,
      name: 'Профнастил и Аксессуары для кровли',
    },
    {
      id: 5,
      name: 'Профнастил и Аксессуары для кровли',
    },
  ]

  const modalContent = (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-[100] overflow-y-auto">
          <div className="flex min-h-full items-start justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative min-w-[100%] transform overflow-hidden rounded-lg text-left shadow-xl transition-all lg:min-w-[1024px]">
                <div className="mt-4 px-4 py-3 pb-6 text-white sm:px-6">
                  <form action="#" className="relative flex ">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <SearchIcon
                        width={24}
                        height={24}
                        className="text-[darkgrey]"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Поиск товаров"
                      className="mt-0 w-full rounded bg-[#2c2c2cfa] pl-11 text-white focus:outline-none"
                    />
                    <span
                      className="cursor-pointer p-3 font-normal"
                      onClick={() => setOpen(false)}
                    >
                      Отмена
                    </span>
                  </form>
                  <div className="mt-7 px-6 font-normal sm:mt-10 sm:px-10">
                    <h3 className="uppercase text-[#434343]">
                      Результаты поиска
                    </h3>
                    <div>
                      {data.map((item) => (
                        <span
                          key={item.id}
                          className="flex cursor-pointer border-b border-[#434343] py-3 text-sm sm:text-base"
                        >
                          <SearchIcon
                            width={22}
                            height={22}
                            className="mr-2 text-[darkgrey]"
                          />
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-search')
    )
  } else {
    return null
  }
}

export default Search
