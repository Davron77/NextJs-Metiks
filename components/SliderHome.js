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
          delay: 100000,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper w-full"
      >
        <SwiperSlide>
          <img
            className=" h-[300px] w-full object-cover sm:h-[500px]"
            src="/home-banner.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" h-[300px] w-full object-cover sm:h-[500px]"
            src="/home-banner.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" h-[300px] w-full object-cover sm:h-[500px]"
            src="/home-banner.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" h-[300px] w-full object-cover sm:h-[500px]"
            src="/home-banner.png"
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
