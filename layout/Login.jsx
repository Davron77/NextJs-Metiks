import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiCheck } from 'react-icons/fi'
import { MdOutlineHelp, MdExitToApp } from 'react-icons/md'
import { authAPI } from '../api'
import Cookies from 'js-cookie'

export default function Login({ isUser, setIsUser, setOpen, setUser, user }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm()

  const [isReg, setIsReg] = useState(false)

  const getMe = async () => {
    try {
      const res = await authAPI.me()
      if (res.status === 200) {
        setUser(res.data.data)
        setIsUser(true)
      }
    } catch (err) {
      console.log(err)
    }
    console.log('user', user)
  }

  const onSubmit = async (data) => {
    try {
      if (isReg) {
        const res = await authAPI.register({
          name: data.name,
          phone: data.phone,
          password: data.password,
          password_confirmation: data.password,
        })
        console.log('res', res)
        if (res.status === 200 && res.data.data.token) {
          Cookies.set('token', res.data.data.token)
          //localStorage.setItem('token', res.data.data.token)
          getMe()
        }
      } else {
        const res = await authAPI.login({
          phone: data.phone,
          password: data.password,
        })
        console.log('res', res)
        if (res.status === 200 && res.data.data.token) {
          Cookies.set('token', res.data.data.token)
          //localStorage.setItem('token', res.data.data.token)
          getMe()
        }
      }
    } catch (err) {
      console.log(err)
    }

    console.log(data)
    reset()
  }

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
    <>
      {isUser ? (
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
          <button
            className="btn mt-[30px] flex w-full rounded-sm"
            onClick={Logout}
          >
            <MdExitToApp className=" mr-2 text-2xl" /> Выйти
          </button>
        </div>
      ) : (
        <div className=" py-[40px] px-5 sm:px-[60px]">
          <div className="form-title">{isReg ? 'Регистрация' : 'Логин'}</div>
          <form onSubmit={handleSubmit(onSubmit)} className="m-auto grid">
            {isReg ? (
              <>
                <label>Имя</label>
                <input
                  type="text"
                  placeholder="Имя"
                  className={`form-control ${
                    errors.name && 'invalid text-red-600'
                  }`}
                  {...register('name', { required: 'Name is Required' })}
                  onKeyUp={() => {
                    trigger('name')
                  }}
                />
                {errors.name && (
                  <small className="mt-1 text-red-600">
                    {errors.name.message}
                  </small>
                )}
              </>
            ) : null}

            <label>Телефон</label>
            <input
              type="text"
              className={`form-control ${
                errors.phone && 'invalid text-red-600'
              }`}
              placeholder="+998 99 (__)___-__-__"
              {...register('phone', {
                required: 'Phone is Required',
                pattern: {
                  value:
                    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: 'Invalid phone no',
                },
              })}
              onKeyUp={() => {
                trigger('phone')
              }}
            />
            {errors.phone && (
              <small className="mt-1 text-red-600">
                {errors.phone.message}
              </small>
            )}
            <label>Пароль</label>
            <input
              type="password"
              className={`form-control ${
                errors.password && 'invalid text-red-600'
              }`}
              placeholder="Пароль"
              {...register('password', {
                required: 'password is Required',
                minLength: {
                  value: 8,
                  message: 'Minimum password length is 8',
                },
              })}
              onKeyUp={() => {
                trigger('password')
              }}
            />
            {errors.password && (
              <small className="mt-1 text-red-600">
                {errors.password.message}
              </small>
            )}

            <label className="flex items-center font-normal">
              <input
                className="mt-0 mr-2 h-[18px] w-[18px] accent-[#016059]"
                type="checkbox"
                Browser
                default
              />
              Запомните меня
            </label>

            <button className="btn font-Inter mt-8 rounded-sm">
              {isReg ? 'Регистрация' : 'Логин'}
            </button>
            {isReg ? null : (
              <button
                className="btn font-Inter mt-2.5 rounded-sm !bg-white !text-black"
                onClick={() => setIsReg(true)}
              >
                Регистрация
              </button>
            )}
            <div className="mt-8 flex font-normal">
              <FiCheck className=" mr-2 text-[40px]" />
              <p className=" text-xs">
                Согласен с условиями{' '}
                <span className=" text-neutral-600">
                  Правил пользования торговой площадкой и правилами возврата
                </span>
              </p>
            </div>
            <div className="mt-6 flex">
              <MdOutlineHelp className="text-[30px]" />
              <a href="#" className=" mt-[3px] ml-2 font-normal">
                Забыли пароль?
              </a>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
