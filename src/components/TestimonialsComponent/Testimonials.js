import React from "react"
import { motion } from "framer-motion"
import TextComponent from "../TextComponent/TextComponent"
import TestimonialCarousel from "./TestimonialCarousel"

const Testimonials = ({ testimonials }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 3,
        delay: 0.3,
      }}
      className="bg-primary-color relative"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 quotation h-40 w-40"></div>
      <div className="my-20 mx-5">
        <h1 className="text-lg lg:text-xl mb-2 text-center font-extralight text-secondary-color">
          TESTIMONIALS FROM OUR
        </h1>
        <TextComponent title="HAPPY CLIENTS" className="lg:text-5xl lg:mb-0" />
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </motion.div>
  )
}

export default Testimonials
