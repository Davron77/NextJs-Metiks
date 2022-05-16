import products from '../data/data-products-list'
import { FaAngleRight } from 'react-icons/fa'

export default function Products() {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-12 px-2 sm:px-6">
        <div className="page-title">
          <h1>Продукции по категориям</h1>
          <a href="#">
            Посмотреть все <FaAngleRight />
          </a>
        </div>
        <div className="font-Bebas grid grid-cols-1 gap-y-10 gap-x-6 transition-all delay-150 ease-in-out sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className={`group h-60 w-full rounded bg-[#F0F0F0] bg-no-repeat p-6 hover:drop-shadow-[0_2px_12px_rgba(0,0,0,0.14)]`}
              style={{ backgroundImage: `url(${product.imageSrc})` }}
            >
              <div className=" aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg">
                {/* <img
                  src={product.imageSrc}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                /> */}
              </div>
              <h3 className="flex text-xl text-[#434343] group-hover:text-[#1D1D1D]">
                {product.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

//bg-[url('${product.imageSrc}')]
