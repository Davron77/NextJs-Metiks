import React from 'react'
import { useForm, useFieldArray, Controller, useWatch } from 'react-hook-form'

let renderCount = 0

export default function App() {
  const { register, control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      test: [{ firstName: 'Bill', lastName: 'Luo' }],
    },
  })
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: 'test',
    }
  )

  const onSubmit = (data) => console.log('data', data)

  // if you want to control your fields with watch
  // const watchResult = watch("test");
  // console.log(watchResult);

  // The following is useWatch example
  // console.log(useWatch({ name: "test", control }));

  renderCount++

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Field Array </h1>
      <p>The following demo allow you to delete, append, prepend items</p>
      <span className="counter">Render Count: {renderCount}</span>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <input
                name={`test[${index}].firstName`}
                defaultValue={`${item.firstName}`} // make sure to set up defaultValue
                ref={register()}
              />

              <input
                name={`test[${index}].lastName`}
                control={control}
                defaultValue={item.lastName} // make sure to set up defaultValue
              />
              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </li>
          )
        })}
      </ul>
      <section>
        <button
          type="button"
          onClick={() => {
            append({ firstName: 'appendBill', lastName: 'appendLuo' })
          }}
        >
          append
        </button>
        <button
          type="button"
          onClick={() =>
            prepend({
              firstName: 'prependFirstName',
              lastName: 'prependLastName',
            })
          }
        >
          prepend
        </button>
      </section>

      <input type="submit" />
    </form>
  )
}
