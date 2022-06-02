import sliderProducts from '../data/data-sliderProducts'

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

export default function Bestsellers() {
  return (
    <>
      <div className="SliderProduct">
        <div className="mx-auto mt-4 max-w-7xl px-2 sm:mt-0 sm:px-6">
          <div className="relative">
            <div className="mb-4">
              <h1 className="font-Bebas text-[22px] sm:text-[44px]">
                хиты <span className=" text-neutral-600">продаж</span>
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
              {sliderProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <a
                    href={product.href}
                    className="relative h-[400px] w-[310px] rounded bg-[#F1F1F1] bg-top bg-no-repeat text-left hover:drop-shadow-[0_2px_12px_rgba(0,0,0,0.14)]"
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
                      <h4 className=" mt-1 h-10 overflow-hidden text-lg font-normal leading-5">
                        {product.name}
                      </h4>
                      <p className=" mt-3 text-sm text-neutral-500">
                        {product.price} UZS
                      </p>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}
