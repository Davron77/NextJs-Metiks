import React, { useEffect, useState, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// IMPORT ICONS
import { SearchIcon } from '@heroicons/react/outline'
//API
import { productAPI } from '../api'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'

function Search({ open, setOpen }) {
  const [isBrowser, setIsBrowser] = useState(false)
  const [searchText, setSearchText] = useState(null)
  const [data, setData] = useState(null)

  const { t } = useTranslation()

  const onSubmit = async () => {
    try {
      const res = await productAPI.search(searchText)
      setData(res.data.data)
    } catch (e) {
      if (e.response && e.response.data) {
        console.log(e.response.data.message)
      }
    }
  }

  const router = useRouter()

  useEffect(() => {
    onSubmit()
  }, [searchText])

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const modalContent = (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                      onChange={(e) => setSearchText(e.target.value)}
                      placeholder={t('Product search')}
                      className="mt-0 w-full rounded bg-[#2c2c2cfa] pl-11 text-white focus:outline-none"
                    />
                    <span
                      className="cursor-pointer p-3 font-normal"
                      onClick={() => setOpen(false)}
                    >
                      {t('Cancel')}
                    </span>
                  </form>
                  <div className="mt-7 px-6 font-normal sm:mt-10 sm:px-10">
                    <h3 className="uppercase text-[#434343]">
                      {t('Searching results')}
                    </h3>
                    <div>
                      {data?.map((item) => (
                        <Link
                          href={`${
                            router?.query.productsId?.length > 0
                              ? ''
                              : 'products/'
                          }${item.id}`}
                          key={item.id}
                        >
                          <span
                            className="flex cursor-pointer border-b border-[#434343] py-3 text-sm sm:text-base"
                            onClick={() => setOpen(false)}
                          >
                            <SearchIcon
                              width={22}
                              height={22}
                              className="mr-2 text-[darkgrey]"
                            />
                            {item.name}
                          </span>
                        </Link>
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

// href={`${
//                             router?.query.productsId?.length > 0
//                               ? null
//                               : 'products/'
//                           }${item.id}`}
