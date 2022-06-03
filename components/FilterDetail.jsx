import React from 'react'

function FilterDetail({ props }) {
  console.log(props)

  return (
    <form action="#" className=" max-h-[200px] overflow-auto">
      {/* {props.map((item) => (
        <div key={item.id} className="flex flex-row py-2">
          <input
            type="checkbox"
            id={item.id}
            name={item.id}
            value="Bike"
            className="mt-0 mr-2 h-[18px] w-[18px] accent-[#016059]"
          />
          <label className="m-0 w-[270px] text-[#434343]" htmlFor={item.id}>
            {item.name}
          </label>
          <br></br>
        </div>
      ))} */}
    </form>
  )
}

export default FilterDetail
