import Category from './Category'
import Link from 'next/link'
import { productAPI } from '../api'
import { useEffect, useState } from 'react'
//COMPONENTS
import Empty from './Empty'

function ProductCategory({ category, products, setProducts }) {
  const [getId, setGetId] = useState(1)
  const [idCheckbox, setIdCheckbox] = useState([])
  const [loading, setLoading] = useState(false)

  const getFilter = async () => {
    setLoading(true)
    try {
      const res = await productAPI.filter(getId, idCheckbox)

      if (res.status === 200) {
        setProducts(res.data.data)
      }
    } catch (err) {
      console.log(err)
    }
    console.log('getFilter')
    setLoading(false)
  }

  useEffect(() => {
    getFilter()
    console.log('useEffect')
  }, [getId, idCheckbox])

  console.log('idCheckbox', idCheckbox)

  return (
    <div className="ProductCategory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="my-7 flex items-center justify-between">
          <h1 className="font-Bebas text-lg sm:text-3xl xl:text-[44px]">
            Рулон из оцинкованной стали с полимерным покрытием
          </h1>
          <span className="hidden font-bold text-[#00000080] lg:block">
            <span className="!text-black">Показано:</span> 1-12 из 16
            результатов
          </span>
        </div>
        <div className="grid grid-cols-3 xl:grid-cols-4">
          <div className="absolute col-span-1 opacity-0 lg:static lg:opacity-100">
            <Category
              category={category}
              setGetId={setGetId}
              idCheckbox={idCheckbox}
              setIdCheckbox={setIdCheckbox}
            />
            <button
              className="btn w-[90%] !bg-[#016059]"
              onClick={() => getFilter()}
            >
              Преминить
            </button>
          </div>
          <div className="col-span-3 lg:col-span-2 xl:col-span-3">
            {loading ? (
              <div className="mt-[100px] flex w-full">
                <img
                  className="mx-auto w-[200px]"
                  src="/loading.svg"
                  alt="Loading"
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 justify-items-center gap-2.5 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 lg:gap-5 xl:grid-cols-3">
                {products.length > 0 ? (
                  products.map((product) => (
                    <Link href={`products/${product.id}`} key={product.id}>
                      <div
                        className="relative w-full max-w-[310px] cursor-pointer rounded bg-[#F1F1F1] bg-top bg-no-repeat text-left hover:drop-shadow-[0_2px_12px_rgba(0,0,0,0.14)]"
                        style={{ backgroundImage: `url(${product.media})` }}
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
                          <h4 className=" mt-1 h-10 overflow-hidden text-lg font-normal leading-5">
                            {product.name}
                          </h4>
                          <p className=" mt-3 mb-5 text-sm text-neutral-500">
                            {product.price_for_kg.toLocaleString('en-ZA')}
                            UZS
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <Empty />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCategory
