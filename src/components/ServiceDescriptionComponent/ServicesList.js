import React from "react"

const ServicesList = ({ list, listTitle, image }) => {
  return (
    <div className="bg-primary-color">
      <div className="flex flex-col md:flex-row-reverse my-6 md:my-10 xl:my-14 mx-4 space-y-4 max-w-5xl xl:max-w-6xl lg:px-4 xl:px-0 lg:mx-auto xl:space-x-16">
        <div className="flex flex-col justify-center md:items-center md:w-[75%] lg:w-[60%] xl:w-[55%]">
          <h3 className="uppercase text-xl font-semibold">{listTitle}</h3>
          <ul className="list-outside list-disc ml-7 my-5 space-y-1 font-extralight tracking-wide text-sm md:max-w-xs lg:max-w-md">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
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

export default ServicesList
