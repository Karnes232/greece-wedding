import React from "react"

const IndividualPreviousWork = ({ eventTitle, image, description }) => {
  return (
    <div className="flex flex-col my-4 md:w-[30%] xl:w-3/12 md:mx-auto">
      <h3 className="font-semibold uppercase tracking-wider xl:font-bold">
        {eventTitle}
      </h3>
      <div className="overflow-hidden my-4">
        <img
          src={image}
          alt="Wedding"
          className="brightness-50 hover:scale-125 hover:brightness-100 focus:brightness-100 transition-all duration-300"
        />
      </div>
      <p className="text-sm text-secondary-color font-extralight leading-6 font-serif">
        {description}
      </p>
    </div>
  )
}

export default IndividualPreviousWork
