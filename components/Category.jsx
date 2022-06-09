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

  // const category = useSelector((state) => state.dataCatalog)

  // console.log(category)

  const getIdRadio = (e) => {
    setIdRadio(+e.target.value)
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
              {category.map((item, index) => (
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
        {category
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
                {item.type === 'detail' && (
                  <FilterDetail props={item.properties} />
                )}
              </div>
            </details>
          ))}
        <details open>
          <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-black">
            <span className="text-xl">Цена</span>
            <FiChevronDown className="text-2xl text-black" />
          </summary>
          <div className="mb-10">
            <form action="#" className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="text-base text-[#000000b3]">От</label>
                <input
                  placeholder="750"
                  className="w-full border-2 border-[#434343]"
                  type="text"
                />
              </div>
              <div>
                <label className="text-base text-[#000000b3]">До</label>
                <input
                  placeholder="25 000"
                  className="w-full border-2 border-[#434343]"
                  type="text"
                />
              </div>
            </form>
          </div>
        </details>
      </div>

      <div className="fixed bottom-[2%] w-screen pr-16 text-center lg:hidden">
        <button className="btn w-[323px] !bg-[#016059]">Преминить</button>
      </div>
    </div>
  )
}

export default Category

{
  /* <AccordionItem dangerouslySetExpanded={true}>
          <AccordionItemHeading>
            <AccordionItemButton>Категория</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="grid grid-cols-5 gap-3">
              {colors.map((item) => (
                <label
                  key={item.id}
                  className="checkout-radio-color w-full cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="cash"
                    className="hidden"
                    defaultChecked={item.is_correct}
                  />
                  <div
                    className="checkout-card-color relative h-[50px] w-[50px] rounded-full border-2 border-transparent bg-[#F0F0F0] text-center"
                    style={{ backgroundColor: `${item.color}` }}
                  ></div>
                </label>
              ))}
            </div>
          </AccordionItemPanel>
        </AccordionItem> */
}

{
  /* <AccordionItem dangerouslySetExpanded={true}>
          <AccordionItemHeading>
            <AccordionItemButton>Категория</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <form action="#">
              {discounts.map((item) => (
                <div key={item.id} className="flex flex-row items-center py-2">
                  <input
                    type="radio"
                    id={item.id}
                    name={item.name}
                    value={item.discount}
                    className="mt-0 h-5 w-5"
                  />
                  <label className="ml-3 mt-0 text-base" htmlFor={item.id}>
                    от {item.discount}% и выше
                  </label>
                  <br></br>
                </div>
              ))}
            </form>
          </AccordionItemPanel>
        </AccordionItem> */
}
