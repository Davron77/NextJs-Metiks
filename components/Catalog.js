import products from '../products/products'
import { FaAngleRight } from 'react-icons/fa'

export default function Catalog() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-2 sm:px-6">
        <h2 className="sr-only">Products</h2>

        <div className="font-Bebas grid grid-cols-1 gap-y-10 gap-x-6 transition-all delay-150 ease-in-out sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg group-hover:shadow-lg">
                <img
                  src={product.imageSrc}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 flex text-xl text-black group-hover:text-neutral-600">
                {product.name}
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
