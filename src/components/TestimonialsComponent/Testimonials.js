import React from "react"
import TextComponent from "../TextComponent/TextComponent"
import IndividualTestimonal from "./IndividualTestimonal"

const Testimonials = () => {
  return (
    <div className="bg-primary-color relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 quotation h-40 w-40"></div>
      <div className="my-20 mx-5">
        <h1 className="text-lg lg:text-xl mb-2 text-center font-extralight text-secondary-color">
          TESTIMONIALS FROM OUR
        </h1>
        <TextComponent title="HAPPY CLIENTS" className="lg:text-5xl" />
        <IndividualTestimonal />
      </div>
    </div>
  )
}

export default Testimonials
