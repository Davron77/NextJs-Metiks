import products from '../data/data-products-list'
import { ChevronRightIcon } from '@heroicons/react/outline'

export default function Products() {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-6 px-2 sm:py-12 sm:px-6">
        <div className="page-title mb-9">
          <h1>
            продукции <span>по категориям</span>
          </h1>
          <a href="#">
            Посмотреть все <ChevronRightIcon className=" h-5 w-5" />
          </a>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 transition-all delay-150 ease-in-out sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className={`group h-60 w-full rounded bg-[#F0F0F0] bg-right bg-no-repeat p-6 hover:drop-shadow-[0_2px_12px_rgba(0,0,0,0.14)]`}
              style={{ backgroundImage: `url(${product.imageSrc})` }}
            >
              {product.isNew ? (
                <div className="mb-2 w-[72px] rounded bg-[#016059] px-[10px] py-[3px] text-sm font-semibold text-white">
                  новинка
                </div>
              ) : (
                ''
              )}
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
