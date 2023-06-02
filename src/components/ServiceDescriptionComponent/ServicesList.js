import React from "react"

const ServicesList = ({ list, listTitle, image }) => {
  return (
    <div className="bg-primary-color">
      <div className="flex flex-col md:flex-row-reverse my-6 md:my-10 mx-4 space-y-4 max-w-5xl lg:mx-auto xl:space-x-16">
        <div className="flex flex-col justify-center md:items-center md:w-[75vw] lg:w-[60vw] xl:w-[55vw]">
          <h3 className="uppercase text-xl font-semibold">{listTitle}</h3>
          <ul className="list-outside list-disc ml-7 my-5 space-y-1 font-extralight tracking-wide text-sm">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          </ul>
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
    </div>
  )
}

export default ServicesList
