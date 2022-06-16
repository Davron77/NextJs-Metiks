import React from 'react'

function User() {
  const Logout = async () => {
    console.log('Logout')
    try {
      const res = await authAPI.logout()
      if (res.status === 200) {
        setOpen(false)
        setIsUser(false)
        localStorage.removeItem('token')
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
          <h5 className=" text-xl font-bold tracking-wide">{user?.name}</h5>
          <div className="mt-1 flex">
            <a
              className="border-b border-transparent text-[#434343] transition-all duration-500 ease-in-out hover:border-b-white"
              href="tel:+998998974504"
            >
              {user?.phone}
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
