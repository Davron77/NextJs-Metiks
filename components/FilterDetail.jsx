import React from 'react'

function FilterDetail({ props, idCheckbox, getIdCheckbox }) {
  return (
    <form action="#" className=" max-h-[200px] overflow-auto">
      {props.map((item) => (
        <div key={item.id} className="flex flex-row py-2">
          <input
            type="checkbox"
            id={item.id}
            name={item.value}
            value={item.value}
            onChange={(e) => getIdCheckbox(e, item.id)}
            defaultChecked={idCheckbox.includes(item.id)}
            className="mt-0 mr-2 h-[18px] w-[18px] cursor-pointer accent-[#016059]"
          />
          <label
            className="m-0 w-[270px] cursor-pointer text-[#434343]"
            htmlFor={item.id}
          >
            {item.label}
          </label>
          <br></br>
        </div>
      ))}
    </form>
  )
}

export default FilterDetail
