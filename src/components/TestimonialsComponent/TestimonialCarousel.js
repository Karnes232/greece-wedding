import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import { Autoplay, Pagination } from "swiper"

import testimonials from "../../data/testimonials"

const TestimonialCarousel = () => {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-full mx-0"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide className="relative" key={index}>
            <div
              className="flex flex-col justify-center items-center max-w-lg xl:max-w-xl mx-auto text-center pb-8
    "
            >
              <p className="text-secondary-color mb-5 xl:mb-8 h-60 md:h-48 flex items-center">
                {testimonial.review}
              </p>

              <h5 className="uppercase font-semibold xl:text-xl xl:mb-2">
                {testimonial.client}
              </h5>
              <p className="text-sm text-secondary-color">
                Review from{" "}
                <span className="text-orange-400">
                  {testimonial.reviewLocation}
                </span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default TestimonialCarousel
