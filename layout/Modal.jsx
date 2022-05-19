import React, { useEffect, useState, Fragment, useRef } from 'react'
import ReactDOM from 'react-dom'
import { Dialog, Transition } from '@headlessui/react'
import Login from './Login'

function Modal({ open, setOpen }) {
  const [isBrowser, setIsBrowser] = useState(false)
  const [isUser, setIsUser] = useState(false)

  const cancelButtonRef = useRef(null)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className={`mx-auto flex max-w-7xl items-end px-4 text-center sm:items-center sm:p-0 sm:px-6 lg:px-8 ${
              isUser ? 'h-5/6 justify-end' : 'min-h-full justify-center'
            }`}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative max-w-[420px] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
                <div className="bg-white">
                  <Login isUser={isUser} setIsUser={setIsUser} />
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

export default Modal
