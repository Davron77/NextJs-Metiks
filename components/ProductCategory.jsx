import Category from './Category'
import Link from 'next/link'
import { productAPI } from '../api'
import { useEffect, useState } from 'react'
//COMPONENTS
import Empty from './Empty'
//REDUX
import { useSelector } from 'react-redux'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'

function ProductCategory({ category, products, setProducts, title, setTitle }) {
  const [getId, setGetId] = useState(1)
  const [idCheckbox, setIdCheckbox] = useState([])
  const [loading, setLoading] = useState(false)

  const { t } = useTranslation()
  const catalogId = useSelector((state) => state.catalogId)


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
    setLoading(false)
  }

  useEffect(() => {
    if (catalogId) {
      setGetId(catalogId)
    }
  }, [])

  useEffect(() => {
    getFilter()
  }, [getId, idCheckbox])

  useEffect(() => {
    setIdCheckbox([])
    setTitle(findTitle[0]?.name)
  }, [getId])

  let findTitle = category.filter((item) => {
    return item.id === getId
  })

  return (
    <div className="ProductCategory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="my-7 flex items-center justify-between">
          <h1 className="font-Bebas text-lg sm:text-3xl xl:text-[44px]">
            {title}
          </h1>
          <span className="hidden font-bold text-[#00000080] lg:block">
            <span className="!text-black">{t('shown')}:</span> {products.length}{' '}
            {t('results')}
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
                        <div className="mt-[285px] px-5 pb-5">
                          <p className="text-sm text-[#016059]">
                            {product.category}
                          </p>
                          <h4 className=" mt-1 h-10 overflow-hidden text-lg font-normal leading-5">
                            {product.name}
                          </h4>
                          {product?.price_for_m ? (
                            <p className="mt-2 text-sm text-neutral-500">
                              {product.price_for_m?.toLocaleString('en-ZA')} UZS
                              /{' '}
                              <span className="text-[#016059]">
                                {t('meter')}
                              </span>
                            </p>
                          ) : (
                            ''
                          )}
                          {product?.price_for_kg ? (
                            <p className="mt-2 text-sm text-neutral-500">
                              {product.price_for_kg?.toLocaleString('en-ZA')}{' '}
                              UZS /{' '}
                              <span className="text-[#016059]">
                                {t('kilogram')}
                              </span>{' '}
                            </p>
                          ) : (
                            ''
                          )}
                          {product?.price_for_qty ? (
                            <p className="mt-2 text-sm text-neutral-500">
                              {product.price_for_qty?.toLocaleString('en-ZA')}{' '}
                              UZS /{' '}
                              <span className="text-[#016059]">
                                {t('amount')}
                              </span>{' '}
                            </p>
                          ) : (
                            ''
                          )}
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
