import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import { Autoplay, EffectFade } from "swiper"
import logo from "../../images/greeceLogo-white.png"

import { Link } from "gatsby"
const SwiperCarousel = ({ cta, photoList }) => {
  return (
    <>
      <Swiper
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper h-[35vh] md:h-[45vh] lg:h-[65vh] w-full mx-0"
      >
        {photoList.map((image, index) => (
          <SwiperSlide className="relative" key={index}>
            <img
              src={image}
              className="h-[35vh] md:h-[45vh] lg:h-[65vh] object-cover w-full brightness-50"
              alt="Greece Weddings"
              loading="lazy"
            />
            <div
              className={`absolute top-1/2 left-[55%] lg:left-[52%] transform -translate-x-1/2 -translate-y-1/2 brightness-150 flex flex-col h-48 items-center ${
                cta ? "justify-center" : "justify-start"
              }`}
            >
              <img
                src={logo}
                className="w-52 md:w-80 xl:w-96 brightness-150"
                alt=""
              />
              {cta ? (
                <button className="w-28 md:w-28 lg:w-32 text-xs bg-white hover:opacity-75 text-black py-3 px-2 md:px-3 rounded-sm mt-10 md:mt-12 mr-8 md:mr-[4.5rem] uppercase font-bold">
                  <Link to="/contact">Call Now</Link>
                </button>
              ) : (
                <></>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default SwiperCarousel
