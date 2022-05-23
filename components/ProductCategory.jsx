import sliderProducts from '../data/data-sliderProducts'
import Category from './Category'

function ProductCategory() {
  return (
    <div className="ProductCategory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="my-7 flex items-center justify-between">
          <h1 className="font-Bebas text-lg sm:text-3xl xl:text-[44px]">
            Рулон из оцинкованной стали с полимерным покрытием
          </h1>
          <span className=" hidden lg:block">
            <span className="!text-black">Показано:</span> 1-12 из 16
            результатов
          </span>
        </div>
        <div className="grid grid-cols-3 gap-5 xl:grid-cols-4">
          <div className="absolute col-span-1 opacity-0 lg:static lg:opacity-100">
            <Category />
          </div>
          <div className="col-span-3 lg:col-span-2 xl:col-span-3">
            <div className="grid grid-cols-1 justify-items-center gap-2.5 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 lg:gap-5 xl:grid-cols-3">
              {sliderProducts.map((product) => (
                <>
                  <a
                    key={product.id}
                    href={product.href}
                    className="relative max-w-[310px] rounded bg-[#F1F1F1] bg-top bg-no-repeat text-left hover:drop-shadow-[0_2px_12px_rgba(0,0,0,0.14)]"
                    style={{ backgroundImage: `url(${product.imageSrc})` }}
                  >
                    {product.isNew ? (
                      <div className="absolute left-5 top-5 mb-2 w-[72px] rounded bg-[#016059] px-[10px] py-[3px] text-sm font-semibold text-white">
                        новинка
                      </div>
                    ) : (
                      ''
                    )}
                    {product.discount ? (
                      <div className="absolute left-5 top-5 mb-2 rounded bg-[#D6A300] px-[10px] py-[3px] text-sm font-semibold text-white">
                        {product.discount}%
                      </div>
                    ) : (
                      ''
                    )}
                    <div className=" mt-[285px] px-5">
                      <p className="text-sm text-[#016059]">
                        {product.category}
                      </p>
                      <h4 className=" mt-1 text-lg font-normal leading-5">
                        {product.name}
                      </h4>
                      <p className=" mt-3 mb-5 text-sm text-neutral-500">
                        {product.price} UZS
                      </p>
                    </div>
                  </a>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCategory