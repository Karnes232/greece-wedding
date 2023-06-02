import React from "react"
import IndividualPreviousWork from "./IndividualPreviousWork"
import { Link } from "gatsby"

const PreviousWork = ({ serviceTitle, PreviousWork }) => {
  return (
    <div className="flex flex-col justify-center items-center my-6 md:my-10 xl:my-14 mx-4 space-y-4 max-w-6xl lg:px-4 xl:px-0 lg:mx-auto">
      <h2 className="text-xl xl:text-2xl font-light uppercase">Punta Cana</h2>
      <h3 className="text-2xl md:text-3xl xl:text-4xl font-semibold uppercase">
        {serviceTitle}
      </h3>
      <div className="flex flex-col md:flex-row">
        {PreviousWork.map((item, index) => (
          <IndividualPreviousWork
            image={item.image}
            eventTitle={item.eventTitle}
            description={item.description}
            key={index}
          />
        ))}
      </div>
      <button className="w-32 lg:w-36 text-xs bg-black hover:opacity-75 text-white py-4 px-3 lg:py-5 lg:px-4 rounded-sm mt-10 md:mt-12 uppercase font-bold">
        <Link to="/gallery">See More</Link>
      </button>
    </div>
  )
}

export default PreviousWork
