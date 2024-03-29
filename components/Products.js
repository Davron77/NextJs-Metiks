import { ChevronRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'
//REDUX
import { useDispatch } from 'react-redux'
import { CatalogId } from '../redux/catalogId'

export default function Products({ category }) {
  const { t } = useTranslation()

  const dispatch = useDispatch()

  const getCatalogId = (id) => {
    dispatch(CatalogId(id))
  }

  return (
    <div>
      <div className="mx-auto max-w-7xl py-6 px-4 sm:py-12 sm:px-8">
        <div className="page-title mb-9">
          <h1>
            {t('products')} <span>{t('by category')}</span>
          </h1>
          <Link href="/category">
            <a>
              {t('view all')} <ChevronRightIcon className=" h-5 w-5" />
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-y-5 gap-x-6 transition-all delay-150 ease-in-out sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3 xl:gap-x-8">
          {category.map((item) => (
            <Link key={item.id} href="/products">
              <a
                className={`group h-60 w-full rounded bg-[#F0F0F0] bg-cover p-6 hover:drop-shadow-[0_2px_12px_rgba(0,0,0,0.14)]`}
                style={{
                  backgroundImage: `url(${item.media})`,
                  filter: `brightness(80%)`,
                }}
                onClick={() => getCatalogId(item.id)}
              >
                {item.is_new ? (
                  <div className="mb-2 w-[72px] rounded bg-[#016059] px-[10px] py-[3px] text-sm font-semibold text-white">
                    новинка
                  </div>
                ) : (
                  ''
                )}
                <h3 className="flex text-xl text-[#434343] group-hover:text-[#1D1D1D]">
                  {item.name}
                </h3>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
