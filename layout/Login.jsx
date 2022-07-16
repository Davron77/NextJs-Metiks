import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiCheck } from 'react-icons/fi'
import { MdOutlineHelp } from 'react-icons/md'
import { authAPI } from '../api'

export default function Login({ setIsUser, setIsReg }) {
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm()

  const getMe = async () => {
    try {
      const res = await authAPI.me()
      if (res.status === 200) {
        localStorage.setItem('userName', res.data.data.name)
        localStorage.setItem('userPhone', res.data.data.phone)
        setIsUser(true)
      }
    } catch (e) {
      if (e.response && e.response.data) {
        setErrorMessage(e.response.data.message) // some reason error message
      }
    }
  }

  const onSubmit = async (data) => {
    setLoading(true)
    setErrorMessage(null)
    try {
      const res = await authAPI.login({
        phone: data.phone,
        password: data.password,
      })

      if (res?.status === 200 && res?.data.data.token) {
        localStorage.setItem('token', res.data.data.token)
        getMe()
      }
      reset()
    } catch (e) {
      if (e.response && e.response.data) {
        setErrorMessage(e.response.data.message) // some reason error message
      }
    }
    setLoading(false)
  }
  return (
    <>
      <div className="form-title">Логин</div>
      {errorMessage?.length > 0 ? (
        <span className="text-red-600">{errorMessage}</span>
      ) : null}
      {loading ? (
        <div className="w-[300px]">
          <img className="mx-auto" src="/loading.svg" alt="Loading" />
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="m-auto grid">
          <label>Телефон</label>
          <input
            type="text"
            className={`form-control ${errors.phone && 'invalid text-red-600'}`}
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
            <small className="mt-1 text-red-600">{errors.phone.message}</small>
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

          {/* <label className="flex items-center font-normal">
            <input
              className="mt-0 mr-2 h-[18px] w-[18px] accent-[#016059]"
              type="checkbox"
              default
            />
            Запомните меня
          </label> */}

          <button className="btn font-Inter mt-8 rounded-sm">Логин</button>
          <button
            className="btn font-Inter mt-2.5 rounded-sm !bg-white !text-black"
            onClick={() => setIsReg(true)}
          >
            Регистрация
          </button>
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
      )}
    </>
  )
}
