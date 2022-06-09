import { FaAngleRight } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
// REDUX
import { useSelector } from 'react-redux'

export default function Catalog({ isOpenCatalog, setIsOpenCatalog }) {
  const catalog = useSelector((state) => state)
  return (
    <div
      className={`fixed left-0 right-0 top-0 z-[100] h-screen overflow-auto bg-white lg:absolute lg:overflow-hidden ${
        isOpenCatalog
          ? 'catalogAnimation !block lg:top-[185px]'
          : 'catalogAnimationend hidden'
      }`}
    >
      <div className="mx-auto max-w-7xl px-8 pb-7 sm:px-6 lg:py-6">
        <div className="flex items-center justify-between border-b border-black lg:hidden">
          <h2 className="flex items-center py-7 text-lg">
            <img src="/svg/catalog-dark.svg" alt="Icon" className="mr-2" />
            Каталог продукции
          </h2>
          <div>
            <IoMdClose
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpenCatalog(false)}
            />
          </div>
        </div>

        <div className="font-Bebas mt-7 grid grid-cols-1 gap-y-5 gap-x-6 transition-all delay-150 ease-in-out sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {catalog.dataCatalog.map((item) => (
            <a key={item.id} href={item.href} className="group">
              <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 h-[200px] w-full overflow-hidden rounded-lg group-hover:drop-shadow-[0_2px_12px_rgba(0,0,0,0.14)]">
                <img
                  src={item.media}
                  alt={item.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 flex text-xl text-black group-hover:text-neutral-600">
                {item.name}
                <span className="ml-2.5 hidden items-center group-hover:flex">
                  <FaAngleRight />
                </span>
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
