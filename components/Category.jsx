import { useState } from 'react'
import 'react-accessible-accordion/dist/fancy-example.css'
import { IoMdClose } from 'react-icons/io'
import { FiChevronDown } from 'react-icons/fi'
// Components
import FilterDetail from './FilterDetail'
import FilterColor from './FilterColor'
//REDUX
import { useSelector } from 'react-redux'

function Category({ open, setOpen, setGetId, idCheckbox, setIdCheckbox }) {
  const [idRadio, setIdRadio] = useState(1)

  const catalog = useSelector((state) => state.dataCatalog)

  const getIdRadio = (id, index) => {
    setIdRadio(index + 1)
    setGetId(id)
  }

  const getIdCheckbox = (e, id) => {
    if (!e.target.checked) {
      const filterInput = idCheckbox.filter((item) => {
        return item !== id
      })
      console.log(filterInput)
      setIdCheckbox(filterInput)
      console.log('if true')
    } else {
      setIdCheckbox((oldArray) => [...oldArray, id])
      console.log('if false')
    }
  }

  return (
    <div
      className={`flex overflow-hidden lg:pr-5  ${
        open
          ? 'catalogAnimation fixed top-0 left-0 right-0 z-[100] !block h-screen flex-col justify-center !overflow-auto bg-white px-8 pb-8'
          : 'hidden lg:flex'
      }`}
    >
      <div className="flex items-center justify-between border-b border-black lg:hidden">
        <h2 className="flex items-center py-7 text-lg">
          <img src="/svg/catalog-dark.svg" alt="Icon" className="mr-2" />
          Каталог продукции
        </h2>
        <div>
          <IoMdClose
            className="cursor-pointer text-2xl"
            onClick={() => setOpen(false)}
          />
        </div>
      </div>
      <div className="w-full">
        <details open>
          <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-black">
            <span className="text-xl">Категория</span>
            <FiChevronDown className="text-2xl text-black" />
          </summary>
          <div className="mb-10">
            <form action="#" className="max-h-[205px] overflow-auto">
              {catalog.map((item, index) => (
                <div key={item.id} className="flex flex-row py-2">
                  <input
                    type="radio"
                    id={item.id + 'e'}
                    name="radio"
                    onClick={() => getIdRadio(item.id, index)}
                    defaultChecked={!index}
                    value={item.id}
                    className="mt-0 mr-2 h-[18px] w-[18px] accent-[#016059]"
                  />
                  <label
                    className="m-0 w-[270px] text-[#434343]"
                    htmlFor={item.id + 'e'}
                  >
                    {item.name}
                  </label>
                  <br></br>
                </div>
              ))}
            </form>
          </div>
        </details>
        {catalog
          .filter((e) => e.id === idRadio)[0]
          ?.props.map((item, index) => (
            <details open key={index + '777'}>
              <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-black">
                <span className="text-xl">{item.label}</span>
                <FiChevronDown className="text-2xl text-black" />
              </summary>
              <div className="mb-10">
                {item.type === 'color' && (
                  <FilterColor
                    props={item.properties}
                    idCheckbox={idCheckbox}
                    getIdCheckbox={getIdCheckbox}
                  />
                )}
                {item.type === 'number' && (
                  <FilterDetail
                    props={item.properties}
                    idCheckbox={idCheckbox}
                    getIdCheckbox={getIdCheckbox}
                  />
                )}
                {item.type === 'text' && (
                  <FilterDetail
                    props={item.properties}
                    idCheckbox={idCheckbox}
                    getIdCheckbox={getIdCheckbox}
                  />
                )}
              </div>
            </details>
          ))}
      </div>
    </div>
  )
}

export default Category
