import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiCheck } from 'react-icons/fi'
import { MdOutlineHelp } from 'react-icons/md'
import { authAPI } from '../api'
import Cookies from 'js-cookie'
//REDUX
import { useDispatch } from 'react-redux'
import { userData } from '../redux/userData'

function Registration() {
  const [sentSms, setSentSms] = useState(false)

  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm()

  const onSubmit = async (data) => {
    // try {
    //   const res = await authAPI.sendVerificationCode({
    //     phone: data.phone,
    //   })
    //   console.log('res', res)
    //   if (res.status === 200 && res.data.data.token) {
    //     Cookies.set('token', res.data.data.token)
    //     //localStorage.setItem('token', res.data.data.token)
    //     getMe()
    //   }
    // } catch (err) {
    //   console.log(err)
    // }
    dispatch(userData(data))
    setSentSms(true)
    reset()
  }

  const onSubmitSms = async (data) => {
    console.log(data)
    reset()
  }

  return (
    <>
      <div className="form-title">
        {sentSms ? 'Верификация' : 'Регистрация'}
      </div>
      {sentSms ? (
        <div className="font-Bebas text-center text-lg font-light">
          <span>Ведите отправленный СМС пароль</span>
        </div>
      ) : null}
      {sentSms ? (
        <form onSubmit={handleSubmit(onSubmitSms)} className="m-auto grid">
          <label>Ведите пароль</label>
          <input
            type="text"
            placeholder="12345"
            className={`form-control ${errors.sms && 'invalid text-red-600'}`}
            {...register('sms', { required: 'Sms is Required' })}
            onKeyUp={() => {
              trigger('sms')
            }}
          />
          {errors.sms && (
            <small className="mt-1 text-red-600">{errors.sms.message}</small>
          )}

          <button className="btn font-Inter mt-8 rounded-sm">
            Подтвердить
          </button>
          <div className="mx-[69px] mt-6 text-center text-sm text-[#016059]">
            Отправить новый пароль
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="m-auto grid">
          <label>Имя</label>
          <input
            type="text"
            placeholder="Имя"
            className={`form-control ${errors.name && 'invalid text-red-600'}`}
            {...register('name', { required: 'Name is Required' })}
            onKeyUp={() => {
              trigger('name')
            }}
          />
          {errors.name && (
            <small className="mt-1 text-red-600">{errors.name.message}</small>
          )}
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
          <button className="btn font-Inter mt-8 rounded-sm">
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

export default Registration
