import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

// import required modules
import { EffectFade, Autoplay, Pagination } from 'swiper'

export default function SliderHome() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper w-full lg:w-[900px]"
      >
        <SwiperSlide>
          <img className=" w-full" src="/home-banner.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full" src="/home-banner.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full" src="/home-banner.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full" src="/home-banner.png" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
