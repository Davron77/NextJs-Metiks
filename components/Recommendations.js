import React from 'react'
import { IoIosStar } from 'react-icons/io'
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
//REACT - I18NEXT
import { useTranslation } from 'react-i18next'

function Recommendations({ reviews }) {
  const { t } = useTranslation()

  return (
    <div className="Recommendations">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-8">
        <div className="relative md:grid md:grid-cols-3">
          <div>
            <h1 className="font-Bebas mb-6 text-[22px] sm:mb-0 sm:text-[44px]">
              {t('Recommendations')}
            </h1>
            <p className=" hidden font-normal text-[#434343] md:block">
              All prices in USD. Payments accepted with Credit Cards and PayPal.
              VAT may apply. Message and data rates may apply. All membership
              packages come with a 30-day satisfaction guarantee.
            </p>
          </div>
          <div className="w-full md:col-span-2">
            <Swiper
              slidesPerView={'auto'}
              centeredSlides={true}
              spaceBetween={0}
              slidesPerGroup={1}
              navigation={true}
              breakpoints={{
                0: {
                  slidesPerView: 1.1,
                },
                500: {
                  slidesPerView: 1.2,
                },
                768: {
                  slidesPerView: 1.1,
                },
                1000: {
                  slidesPerView: 1.5,
                },
              }}
              modules={[Navigation]}
              className="mySwiper !static"
            >
              {reviews.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="min-w-full rounded-lg bg-black p-8 text-white">
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((e, i) => (
                          <IoIosStar
                            key={i}
                            className={` mr-3 h-7 w-7 ${
                              i + 1 <= item.rating && 'text-[#F7C435]'
                            }`}
                          />
                        ))}
                    </div>
                    <div className="mt-5 text-left text-sm sm:text-lg">
                      <span>{item.description}</span>
                    </div>
                    <div className="mt-20 flex sm:mt-28">
                      <img
                        className="h-12 w-12 rounded-full object-cover lg:h-16 lg:w-16"
                        src={item.media}
                        alt="user"
                      />
                      <div className="flex flex-col justify-center pl-3">
                        <h5 className="text-xl font-bold tracking-wide">
                          {item.name}
                        </h5>
                        <div className="mt-1 flex">
                          <a
                            className="border-b border-transparent text-neutral-400 transition-all duration-500 ease-in-out hover:border-b-white"
                            href="tel:+998998974504"
                          >
                            {item.profession}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recommendations
