import React from 'react'
import { useForm } from 'react-hook-form'

function ContactForm({ settings }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <div className="mx-auto mt-5 max-w-7xl px-4 sm:mt-12 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2">
        <div className="mt-8 grid gap-y-10 sm:mt-0 xl:grid-cols-2">
          <div>
            <h4 className="font-Bebas text-[32px] font-bold">
              Офис в Ташкенте
            </h4>
            <p className="text-[#00000080]">{settings.address}</p>
          </div>
          <div>
            <h4 className="font-Bebas text-[32px] font-bold">Телефон</h4>
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
            Оставьте заявку и{' '}
            <span className=" text-neutral-600">мы свяжемся с вами.</span>
          </h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="m-auto grid-cols-2 gap-x-5 sm:grid"
          >
            <div>
              <input
                type="text"
                placeholder="Имя*"
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
                placeholder="Телефон номер*"
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
                type="password"
                className={`form-control mb-2.5 w-full bg-[#F0F0F0] ${
                  errors.password && 'invalid text-red-600'
                }`}
                placeholder="E-mail"
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
            </div>
            <div>
              <input
                type="password"
                className={`form-control mb-2.5 w-full bg-[#F0F0F0] ${
                  errors.password && 'invalid text-red-600'
                }`}
                placeholder="Название Компонии"
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
            </div>
            <textarea
              rows={6}
              className="col-span-2 my-3 block w-full rounded-sm border-2 border-gray-200 bg-[#F0F0F0] px-4 py-2.5 sm:text-base"
              placeholder="Коментарии*"
              defaultValue={''}
            />

            <button className="btn font-Inter mt-2.5 w-[200px] rounded-sm !py-4">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
