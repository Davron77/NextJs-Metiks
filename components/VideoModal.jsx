import React, { useEffect, useState, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Dialog, Transition } from '@headlessui/react'
import { MdClose } from 'react-icons/md'

function Modal({ open, setOpen, settings }) {
  const [isBrowser, setIsBrowser] = useState(false)

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
          <div className="fixed inset-0 bg-[#00000081] transition-opacity" />
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
              <Dialog.Panel className=" relative min-w-[90%] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 lg:min-w-[1024px]">
                <div className="bg-neutral-800 px-4 py-3 pb-6 sm:px-6">
                  <div className="flex justify-end">
                    <span
                      className="cursor-pointer"
                      onClick={() => setOpen(false)}
                    >
                      <MdClose className="mb-4 text-3xl text-white" />
                    </span>
                  </div>
                  <video
                    className="h-[250px] w-[100%] sm:h-[350px] lg:h-[500px]"
                    controls
                  >
                    <source src={settings?.about_video} type="video/mp4" />
                  </video>
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
      document.getElementById('modal-video')
    )
  } else {
    return null
  }
}

export default Modal
