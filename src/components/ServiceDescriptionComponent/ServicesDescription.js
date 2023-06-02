import React from "react"

import TextComponent from "../TextComponent/TextComponent"
const ServicesDescription = ({ paragraph1, paragraph2, paragraph3, image }) => {
  return (
    <div className="flex flex-col md:flex-row my-6 md:my-10 mx-4 space-y-4 max-w-5xl lg:mx-auto xl:space-x-16">
      <div className="flex flex-col justify-center items-center md:w-[75vw] lg:w-[60vw] xl:w-[55vw]">
        <TextComponent
          paragraph={paragraph1}
          className="lg:mb-0"
          pClassName="lg:mt-0"
        />
        <TextComponent
          paragraph={paragraph2}
          className="lg:mb-0"
          pClassName="lg:mt-0"
        />
        <TextComponent
          paragraph={paragraph3}
          className="lg:mb-0"
          pClassName="lg:mt-0"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src={image}
          className="h-[25vh] md:h-[30vh] lg:h-[40vh] xl:h-[40vh] object-cover w-full brightness-50"
          alt="Greece Weddings"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default ServicesDescription
