import Instagram from '../data/data-instagram'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ChevronRightIcon } from '@heroicons/react/outline'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
// import required modules
import { FreeMode } from 'swiper'

export default function SliderInstagram({ data }) {
  return (
    <>
      <div className="mx-auto mb-12 max-w-7xl py-3 px-2 sm:py-12 sm:px-6">
        <div className="page-title mb-9">
          <h1 className=" w-36 sm:w-full">Instagram</h1>
          <a href="https://www.instagram.com/metiks.ru/" target="_blank">
            Metiks <ChevronRightIcon className=" h-5 w-5" />
          </a>
        </div>
        <div className="flex">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            freeMode={true}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
              },
              542: {
                slidesPerView: 2.1,
              },
              768: {
                slidesPerView: 3.1,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            modules={[FreeMode]}
            className="mySwiper"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <figure>
                  <img
                    src={item.media}
                    className="cursor-pointer rounded-lg transition-all duration-300 ease-in-out hover:scale-125"
                    alt="img"
                  />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
