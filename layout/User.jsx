import React from 'react'
import { MdExitToApp } from 'react-icons/md'
import { authAPI } from '../api/'

function User({ setIsUser, setOpen }) {
  const Logout = async () => {
    console.log('Logout')
    try {
      const res = await authAPI.logout()
      if (res.status === 200) {
        setIsUser(false)
        localStorage.removeItem('token')
        localStorage.removeItem('userName')
        localStorage.removeItem('userPhone')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="w-[320px] p-[30px]">
      <div className="flex">
        <img
          className="h-12 w-12 rounded-full ring ring-[#434343] lg:h-16 lg:w-16"
          src="/user.png"
          alt="user"
        />
        <div className=" flex flex-col justify-center pl-3">
          <h5 className=" text-xl font-bold tracking-wide">
            {localStorage.getItem('userName')}
          </h5>
          <div className="mt-1 flex">
            <a
              className="border-b border-transparent text-[#434343] outline-none transition-all duration-500 ease-in-out hover:border-b-white"
              href="tel:+998998974504"
            >
              +{localStorage.getItem('userPhone')}
            </a>
          </div>
        </div>
      </div>
      <button className="btn mt-[30px] flex w-full rounded-sm" onClick={Logout}>
        <MdExitToApp className=" mr-2 text-2xl" /> Выйти
      </button>
    </div>
  )
}

export default User
