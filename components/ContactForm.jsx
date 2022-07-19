import { t } from 'i18next'
import React from 'react'
import { useForm } from 'react-hook-form'
//API
import { authAPI } from '../api/'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'

function ContactForm({ settings }) {
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const res = await authAPI.message({
        name: data.name,
        phone: data.phone,
        company: data.text,
        comment: data.textarea,
        email: data.email,
      })
      console.log('res', res)
      if (res.status === 200) {
        // Cookies.set('token', res.data.data.token)
        //localStorage.setItem('token', res.data.data.token)
      }
      console.log(data)
      reset()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="mx-auto mt-5 mb-10 max-w-7xl px-4 sm:mt-20 sm:px-8">
      <div className="grid lg:grid-cols-2">
        <div className="mt-8 grid gap-y-10 sm:mt-0 xl:grid-cols-2">
          <div>
            <h4 className="font-Bebas text-[32px] font-bold">
              {t('Office Tashkent')}
            </h4>
            <p className="text-[#00000080]">{settings.address}</p>
          </div>
          <div>
            <h4 className="font-Bebas text-[32px] font-bold">{t('Phone')}</h4>
            <a href="tel:+998975000099" className="block text-[#00000080]">
              {settings.first_phone}
            </a>
            <a href="tel:+998975000099" className="text-[#00000080]">
              {settings.second_phone}
            </a>
          </div>
          <div>
            <h4 className="font-Bebas text-[32px] font-bold">E-mail</h4>
            <p className="text-[#00000080]">{settings.email}</p>
          </div>
        </div>
        <div className="my-12 lg:my-0">
          <h4 className="font-Bebas text-[32px] font-bold">
            {t('Contact page info 1')}{' '}
            <span className=" text-neutral-600">
              {t('Contact page info 2')}
            </span>
          </h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="m-auto grid-cols-2 gap-x-5 sm:grid"
          >
            <div>
              <input
                type="text"
                placeholder={t('name')}
                className={`form-control mb-2.5 w-full bg-[#F0F0F0] ${
                  errors.name && 'invalid text-red-600'
                }`}
                {...register('name', { required: 'Name is Required' })}
                onKeyUp={() => {
                  trigger('name')
                }}
              />
            </div>
            <div>
              <input
                type="text"
                className={`form-control mb-2.5 w-full bg-[#F0F0F0] ${
                  errors.phone && 'invalid text-red-600'
                }`}
                placeholder={t('Phone number')}
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
            </div>
            <div>
              <input
                type="email"
                className={`form-control mb-2.5 w-full bg-[#F0F0F0] ${
                  errors.email && 'invalid text-red-600'
                }`}
                placeholder="E-mail"
                {...register('email', {
                  required: 'email is Required',
                  minLength: {
                    value: 8,
                    message: 'Minimum email length is 8',
                  },
                })}
                onKeyUp={() => {
                  trigger('email')
                }}
              />
            </div>
            <div>
              <input
                type="text"
                className={`form-control mb-2.5 w-full bg-[#F0F0F0] ${
                  errors.text && 'invalid text-red-600'
                }`}
                placeholder={t('Company name')}
                {...register('text', {
                  required: 'text is Required',
                })}
                onKeyUp={() => {
                  trigger('text')
                }}
              />
            </div>
            <textarea
              rows={6}
              className="col-span-2 my-3 block w-full rounded-sm border-2 border-gray-200 bg-[#F0F0F0] px-4 py-2.5 text-lg"
              placeholder={t('Comments')}
              {...register('textarea', {
                required: 'textarea is Required',
              })}
              onKeyUp={() => {
                trigger('textarea')
              }}
            />

            <button className="btn font-Inter mt-2.5 w-[200px] rounded-sm !py-4">
              {t('Send')}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
