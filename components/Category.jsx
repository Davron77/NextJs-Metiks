import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import catalog from '../data/data-catalog'
import { IoMdClose } from 'react-icons/io'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const colors = [
  {
    id: 1,
    color: '#E6D2B5',
    is_correct: true,
  },
  {
    id: 2,
    color: '#861A22',
    is_correct: false,
  },
  {
    id: 3,
    color: '#59191F',
    is_correct: false,
  },
  {
    id: 4,
    color: '#6D342D',
    is_correct: false,
  },
  {
    id: 5,
    color: '#792423',
    is_correct: false,
  },
  {
    id: 6,
    color: '#27352A',
    is_correct: false,
  },
  {
    id: 7,
    color: '#9B9B9B',
    is_correct: false,
  },
  {
    id: 8,
    color: '#45494E',
    is_correct: false,
  },
  {
    id: 9,
    color: '#442F29',
    is_correct: false,
  },
  {
    id: 10,
    color: '#ECECE7',
    is_correct: false,
  },
]

const discounts = [
  {
    id: 1,
    discount: 5,
  },
  {
    id: 2,
    discount: 15,
  },
  {
    id: 3,
    discount: 25,
  },
  {
    id: 4,
    discount: 35,
  },
  {
    id: 5,
    discount: 50,
  },
]

function Category({ open, setOpen }) {
  console.log('open', open)
  return (
    <div
      className={`flex overflow-hidden  ${
        open
          ? 'catalogAnimation fixed top-0 left-0 right-0 z-[100] !block h-screen flex-col justify-center !overflow-auto bg-white px-8 pb-4'
          : ''
      }`}
    >
      <div className="flex items-center justify-between border-b border-black lg:hidden">
        <h2 className="flex items-center py-7 text-lg">
          <img src="/svg/catalog-dark.svg" alt="Icon" className="mr-2" />
          Каталог продукции
        </h2>
        <div>
          <IoMdClose className="text-2xl" onClick={() => setOpen(false)} />
        </div>
      </div>
      <Accordion allowZeroExpanded>
        <AccordionItem dangerouslySetExpanded={true}>
          <AccordionItemHeading>
            <AccordionItemButton>Категория</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <form action="#" className=" max-h-[200px] overflow-auto">
              {catalog.map((item) => (
                <div className="flex flex-row py-2">
                  <input
                    type="checkbox"
                    id={item.id}
                    name={item.id}
                    value="Bike"
                    className="mt-0 mr-2 h-[18px] w-[18px] accent-[#016059]"
                  />
                  <label className="m-0 text-[#434343]" for={item.id}>
                    {item.name.slice(3)}
                  </label>
                  <br></br>
                </div>
              ))}
            </form>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem dangerouslySetExpanded={true}>
          <AccordionItemHeading>
            <AccordionItemButton>Категория</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <form action="#" className=" max-h-[200px] overflow-auto">
              {catalog.map((item) => (
                <div className="flex flex-row py-2">
                  <input
                    type="checkbox"
                    id={item.id}
                    name={item.id}
                    value="Bike"
                    className="mt-0 mr-2 h-[18px] w-[18px] accent-[#016059]"
                  />
                  <label className="m-0 text-[#434343]" for={item.id}>
                    {item.name.slice(3)}
                  </label>
                  <br></br>
                </div>
              ))}
            </form>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem dangerouslySetExpanded={true}>
          <AccordionItemHeading>
            <AccordionItemButton>Цена</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div>
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
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem dangerouslySetExpanded={true}>
          <AccordionItemHeading>
            <AccordionItemButton>Категория</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="grid grid-cols-5 gap-3">
              {colors.map((item) => (
                <label className="checkout-radio-color w-full cursor-pointer">
                  <input type="radio" name="cash" className="hidden" checked />
                  <div
                    className=" checkout-card-color relative h-[50px] w-[50px] rounded-full border-2 border-transparent bg-[#F0F0F0] text-center"
                    style={{ backgroundColor: `${item.color}` }}
                  ></div>
                </label>
              ))}
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem dangerouslySetExpanded={true}>
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
                    name={item.id}
                    value={item.discount}
                    className="mt-0 h-5 w-5"
                  />
                  <label className="ml-3 mt-0 text-base">
                    от {item.discount}% и выше
                  </label>
                  <br></br>
                </div>
              ))}
            </form>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
      <div className="fixed bottom-[2%] w-screen pr-16 text-center lg:hidden">
        <button className="btn w-[323px] !bg-[#016059]">Преминить</button>
      </div>
    </div>
  )
}

export default Category
