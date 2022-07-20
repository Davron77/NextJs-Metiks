import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiCheck } from 'react-icons/fi'
import { MdOutlineHelp } from 'react-icons/md'
import { authAPI } from '../api'
//REDUX
import { useDispatch, useSelector } from 'react-redux'
import { userData } from '../redux/userData'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'

function Registration({ setIsReg, setIsUser }) {
  const [sentSms, setSentSms] = useState(false)
  const [errorSms, setErrorSms] = useState(false)
  const [loading, setLoading] = useState(false)
  const [againSmsButton, setAgainSmsButton] = useState(false)
  const [counter, setCounter] = useState(60)
  const [errorMessage, setErrorMessage] = useState(null)
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const catalog = useSelector((state) => state)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm()

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const res = await authAPI.sendVerificationCode({
        phone: data.phone,
      })
      console.log('res', res)
      if (res.status === 200) {
        setSentSms(true)
      }
    } catch (err) {
      console.log(err)
    }
    setSentSms(true)
    dispatch(userData(data))
    reset()
    setLoading(false)
  }

  const onSubmitReturn = async () => {
    setLoading(true)
    try {
      const res = await authAPI.sendVerificationCode({
        phone: catalog.userData.phone,
      })
      console.log('res', res)
      if (res.status === 200) {
        console.log('return')
      }
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  const onSubmitReg = async (code) => {
    setLoading(true)
    try {
      const res = await authAPI.register({
        name: catalog.userData.name,
        phone: catalog.userData.phone,
        password: catalog.userData.password,
        password_confirmation: catalog.userData.password,
        code: code,
      })
      if (res.status === 200) {
        setIsReg(false)
      }
    } catch (e) {
      if (e.response && e.response.data) {
        setErrorMessage(e.response.data.message) // some reason error message
      }
    }
    setLoading(false)
  }

  const onSubmitSms = async (data) => {
    setLoading(true)
    try {
      const res = await authAPI.checkVerificationCode({
        phone: catalog.userData.phone,
        code: data.sms,
      })
      if (res.status === 200 && res.data.status === true) {
        await onSubmitReg(data.sms)
      } else if (res.data.status === false) {
        setErrorSms(true)
      }
    } catch (e) {
      if (e.response && e.response.data) {
        console.log('errSms', e.response.data.message) // some reason error message
      }
    }
    reset()
    setLoading(false)
  }

  const handleCounter = () => {
    setAgainSmsButton(true)

    const intervalId = setInterval(() => {
      setCounter((prevCount) => prevCount - 1)
    }, 1000)

    setTimeout(() => {
      setAgainSmsButton(false)
      setCounter(60)
      clearInterval(intervalId)
    }, 60000)
  }

  return (
    <>
      <div className="form-title">
        {sentSms ? t('Verification') : t('Registration')}
      </div>
      {errorMessage?.length > 0 ? (
        <span className="text-red-600">{errorMessage}</span>
      ) : null}
      {loading ? (
        <div className="w-[300px]">
          <img className="mx-auto" src="/loading.svg" alt="Loading" />
        </div>
      ) : (
        <>
          {sentSms ? (
            <div
              className={`font-Bebas text-center text-lg font-light ${
                errorMessage ? 'pt-5' : null
              }`}
            >
              <span>{t('Enter SMS')}</span>
            </div>
          ) : null}
          {sentSms ? (
            <>
              <form
                onSubmit={handleSubmit(onSubmitSms)}
                className="m-auto grid"
              >
                <label>{t('Enter password')}</label>
                <input
                  type="text"
                  placeholder="12345"
                  className={`form-control ${
                    errors.sms && 'invalid text-red-600'
                  }`}
                  {...register('sms', { required: 'Sms is Required' })}
                  onKeyUp={() => {
                    trigger('sms')
                  }}
                />
                {errors.sms && (
                  <small className="mt-1 text-red-600">
                    {errors.sms.message}
                  </small>
                )}
                {errorSms ? (
                  <div className="mt-2 flex">
                    <img src="/svg/error.svg" alt="" />
                    <p className="pl-2 text-xs font-normal text-red-600">
                      {t('Sms Error')}
                    </p>
                  </div>
                ) : null}

                <button className="btn font-Inter mt-8 rounded-sm">
                  {t('Confirm')}
                </button>
                <button
                  className="btn font-Inter mt-2.5 rounded-sm !bg-white !text-black"
                  onClick={() => setIsReg(false)}
                >
                  {t('Login')}
                </button>
              </form>
              {againSmsButton ? (
                <div className="pt-6">
                  <span className="text-red-600 ">
                    {t('Send sms again')} {counter} {t('Seconds')}
                  </span>
                </div>
              ) : null}
              <button
                disabled={againSmsButton}
                className="mx-[69px] pt-6 text-center text-sm text-[#016059] disabled:opacity-75"
                onClick={() => {
                  handleCounter(), onSubmitReturn()
                }}
              >
                {t('Send new password')}
              </button>
            </>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="m-auto grid">
              <label>{t('name')}</label>
              <input
                type="text"
                placeholder={t('name')}
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
              <label>{t('Phone')}</label>
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
              <label>{t('Password')}</label>
              <input
                type="password"
                className={`form-control ${
                  errors.password && 'invalid text-red-600'
                }`}
                placeholder={t('Password')}
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
              <button
                type="submit"
                className="btn font-Inter mt-8 rounded-sm"
                onClick={() => handleCounter()}
              >
                {t('Registration')}
              </button>
              <button
                className="btn font-Inter mt-2.5 rounded-sm !bg-white !text-black"
                onClick={() => setIsReg(false)}
              >
                {t('Login')}
              </button>
              <div className="mt-8 flex font-normal">
                <FiCheck className=" mr-2 text-[40px]" />
                <p className=" text-xs">{t('I agree')}</p>
              </div>
              <div className="mt-6 flex">
                <MdOutlineHelp className="text-[30px]" />
                <a href="#" className=" mt-[3px] ml-2 font-normal">
                  {t('Forgot password')}
                </a>
              </div>
            </form>
          )}
        </>
      )}
    </>
  )
}

export default Registration
