import React, { useEffect, useState, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Dialog, Transition } from '@headlessui/react'
//COMPONENTS
import Login from './Login'
import Registration from './Registration'
import User from './User'

function Modal({ open, setOpen, setUser, user }) {
  const [isBrowser, setIsBrowser] = useState(false)
  const [isUser, setIsUser] = useState(false)
  const [isReg, setIsReg] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const modalContent = (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[100]"
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
          <div className="fixed inset-0 bg-[#00000066] bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className={`mx-auto flex max-w-7xl items-center px-4 text-center sm:p-0 sm:px-6 lg:px-8 ${
              isUser ? ' h-2/6 justify-end' : 'min-h-full justify-center'
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
                  {isUser ? (
                    <User />
                  ) : (
                    <div className="py-[40px] px-5 sm:px-[60px]">
                      {isReg ? (
                        <Registration />
                      ) : (
                        <Login
                          setIsReg={setIsReg}
                          isUser={isUser}
                          setIsUser={setIsUser}
                          setOpen={setOpen}
                          setUser={setUser}
                          user={user}
                        />
                      )}
                    </div>
                  )}
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
