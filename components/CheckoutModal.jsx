/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'

export default function CheckoutModal({ open, setOpen, setCheck }) {
  return (
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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-center shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[423px]">
                <div className="bg-[#FAFAFA] py-12 px-[60px]">
                  <img
                    className="m-auto mb-9"
                    src="svg/check.svg"
                    alt="Check"
                  />
                  <h3 className="text-xl text-[#434343]">
                    Уважаемый клиент, мы <br /> приняли вашу заявку
                  </h3>
                  <p className=" my-3">
                    Наши менеджеры свяжется с вами в ближайшее время
                  </p>
                  <div className="flex flex-col">
                    <Link href="/products">
                      <button
                        className="btn rounded-sm !bg-[#016059]"
                        onClick={() => setOpen(false)}
                      >
                        Продолжить покупку
                      </button>
                    </Link>
                    <button
                      className="btn mt-2.5 rounded-sm"
                      onClick={() => setCheck(false)}
                    >
                      Вернуться назад
                    </button>
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
      document.getElementById('modal-root')
    )
  } else {
    return null
  }
}
