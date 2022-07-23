import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'

export default function Bestsellers({ products }) {
  const { t } = useTranslation()

  return (
    <>
      <div className="SliderProduct">
        <div className="mx-auto mt-4 max-w-7xl px-4 sm:mt-0 sm:px-8">
          <div className="relative">
            <div className="mb-4">
              <h1 className="font-Bebas text-[22px] sm:text-[44px]">
                {t('Similar products')}
              </h1>
            </div>
            <Swiper
              slidesPerView={1.7}
              spaceBetween={20}
              slidesPerGroup={1}
              cssMode={true}
              navigation={true}
              modules={[Navigation]}
              breakpoints={{
                320: {
                  slidesPerView: 1.15,
                },
                435: {
                  slidesPerView: 1.5,
                },
                500: {
                  slidesPerView: 1.8,
                },
                600: {
                  slidesPerView: 2.1,
                },
                768: {
                  slidesPerView: 2.5,
                },
                900: {
                  slidesPerView: 3,
                },
                1000: {
                  slidesPerView: 3.5,
                },
                1260: {
                  slidesPerView: 4,
                },
              }}
              className="mySwiper !static"
            >
              {products?.map((product) => (
                <SwiperSlide key={product.id}>
                  <Link href={`${product.id}`}>
                    <div
                      className="relative h-[360px] w-[310px] cursor-pointer rounded bg-[#F1F1F1] bg-top bg-no-repeat text-left hover:drop-shadow-[0_2px_12px_rgba(0,0,0,0.14)]"
                      style={{ backgroundImage: `url(${product.media})` }}
                    >
                      <div className=" mt-[285px] px-5">
                        <p className="text-sm text-[#016059]">
                          {product.category}
                        </p>
                        <h4 className=" mt-1 h-10 overflow-hidden text-lg font-normal leading-5">
                          {product.name}
                        </h4>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}
