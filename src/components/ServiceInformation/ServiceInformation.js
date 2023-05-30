import React from "react"
import TextComponent from "../TextComponent/TextComponent"
import { Link } from "gatsby"

const ServiceInformation = () => {
  return (
    <div className=" bg-primary-color py-5 md:py-20 md:px-32">
      <h1 className="text-lg mb-2 text-center font-extralight">
        UNPARALLELED, STRESS-FREE
      </h1>
      <TextComponent
        title="EVENT PLANNING & DESIGN"
        paragraph="The Infinity experience is unlike any other. Our full-service event planning and design team will guide you every step of the way, ensuring a stress-free experience from start to finish."
        className=""
      />
      <TextComponent
        paragraph="With us, customization is guaranteed. From the very beginning, we will create a custom proposal tailored to your specific wants and needs. You'll be paired with an Infinity Event Team who will collaborate with you to bring your vision to life. We will team up with some of the best vendors in Nashville and take care of all the details like meeting scheduling, delivery dates, payments, day-of setup, and more."
        className=""
      />
      <TextComponent
        paragraph="When it’s showtime, our staff will work tirelessly to guarantee your event is effortless and unforgettable."
        className=""
      />
      <div className="flex justify-center items-center">
        <button className="w-32 lg:w-36 text-xs bg-black hover:opacity-75 text-white py-4 px-3 lg:py-5 lg:px-4 rounded-sm mt-10 md:mt-12 uppercase font-bold">
          <Link to="/contact">Find out More</Link>
        </button>
      </div>
    </div>
  )
}

export default ServiceInformation
