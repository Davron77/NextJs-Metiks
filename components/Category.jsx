import { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
//import catalog from '../data/data-catalog'
import { IoMdClose } from 'react-icons/io'
import { FiChevronDown } from 'react-icons/fi'
// Components
import FilterDetail from './FilterDetail'
import FilterColor from './FilterColor'
//REDUX
import { useSelector } from 'react-redux'
import category from '../data/data-catalog'

function Category({ open, setOpen }) {
  const [idRadio, setIdRadio] = useState(2)

  const catalog = useSelector((state) => state.dataCatalog)

  const getIdRadio = (e) => {
    setIdRadio(+e.target.value)
  }

  const sobmitFilter = () => {
    
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
                    id={item.id}
                    name="radio"
                    onChange={getIdRadio}
                    defaultChecked={!index}
                    value={item.id}
                    className="mt-0 mr-2 h-[18px] w-[18px] accent-[#016059]"
                  />
                  <label
                    className="m-0 w-[270px] text-[#434343]"
                    htmlFor={item.id}
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
          .props.map((item) => (
            <details open key={item.id}>
              <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-black">
                <span className="text-xl">{item.label}</span>
                <FiChevronDown className="text-2xl text-black" />
              </summary>
              <div className="mb-10">
                {item.type === 'color' && (
                  <FilterColor props={item.properties} />
                )}
                {item.type === 'number' && (
                  <FilterDetail props={item.properties} />
                )}
                {item.type === 'text' && (
                  <FilterDetail props={item.properties} />
                )}
              </div>
            </details>
          ))}
        <button className="btn w-full !bg-[#016059]">Преминить</button>
      </div>
      <div className="fixed bottom-[2%] w-screen pr-16 text-center lg:hidden">
        <button className="btn w-[323px] !bg-[#016059]">Преминить</button>
      </div>
    </div>
  )
}

export default Category
