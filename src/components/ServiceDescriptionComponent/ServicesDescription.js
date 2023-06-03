import React from "react"

import TextComponent from "../TextComponent/TextComponent"
const ServicesDescription = ({
  paragraph1,
  paragraph2,
  paragraph3,
  image,
  rowDirection,
  padding,
  backgroundColor,
}) => {
  return (
    <div className={`${backgroundColor}`}>
      <div
        className={`flex flex-col md:flex-row ${rowDirection} my-6 md:my-10 xl:my-14 mx-4 space-y-4 max-w-5xl xl:max-w-6xl lg:px-4 xl:px-0 lg:mx-auto xl:space-x-16`}
      >
        <div
          className={`flex flex-col justify-center items-center md:pr-16 ${padding} md:w-[75%] lg:w-[60%] xl:w-[55%]`}
        >
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
            className="h-[12rem] md:h-[15rem] lg:h-[18rem] object-cover w-full brightness-50"
            alt="Greece Weddings"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

export default ServicesDescription
