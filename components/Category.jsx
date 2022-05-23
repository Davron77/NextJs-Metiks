import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import catalog from '../data/data-catalog'

const colors = [
  {
    id: 1,
    color: '#E6D2B5',
  },
  {
    id: 2,
    color: '#861A22',
  },
  {
    id: 3,
    color: '#59191F',
  },
  {
    id: 4,
    color: '#6D342D',
  },
  {
    id: 5,
    color: '#792423',
  },
  {
    id: 6,
    color: '#27352A',
  },
  {
    id: 7,
    color: '#9B9B9B',
  },
  {
    id: 8,
    color: '#45494E',
  },
  {
    id: 9,
    color: '#442F29',
  },
  {
    id: 10,
    color: '#ECECE7',
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

function Category({ open }) {
  return (
    <div className={`hidden lg:flex `}>
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
                    className="mt-0 mr-2 h-[18px] w-[18px] outline-2"
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
                <div
                  key={item.id}
                  className="h-[50px] w-[50px] cursor-pointer rounded-full"
                  style={{ backgroundColor: `${item.color}` }}
                ></div>
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
    </div>
  )
}

export default Category
