import React from 'react'

function FilterColor({ props, idCheckbox, getIdCheckbox }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_50px)] gap-3">
      {props.map((item) => (
        <label
          key={item.id}
          className="checkout-radio-color w-full cursor-pointer"
        >
          <input
            type="checkbox"
            name="cash"
            className="hidden"
            defaultChecked={idCheckbox.includes(item.id)}
            onChange={(e) => getIdCheckbox(e, item.id)}
          />
          <div
            className="checkout-card-color relative h-[50px] w-[50px] rounded-full border-2 border-transparent bg-[#F0F0F0] text-center"
            style={{ backgroundColor: `${item.value}` }}
          ></div>
        </label>
      ))}
    </div>
  )
}

export default FilterColor
