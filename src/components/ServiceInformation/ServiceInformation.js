import React from "react"
import TextComponent from "../TextComponent/TextComponent"
import { Link } from "gatsby"

const ServiceInformation = () => {
  return (
    <div className=" bg-primary-color py-5 md:py-20 md:px-32">
      <h1 className="text-lg mb-2 text-center font-extralight uppercase">
        Unforgettable Moments
      </h1>
      <TextComponent
        title="Unleash the Beauty of Punta Cana"
        paragraph="Nestled along the pristine shores of the Dominican Republic, Punta Cana is a tropical paradise known for its breathtaking landscapes, crystal-clear turquoise waters, and sun-kissed beaches. At Greece Weddings, we are privileged to operate in this stunning destination, offering a seamless blend of luxury, natural beauty, and warm hospitality."
        className="uppercase"
      />

      <TextComponent
        paragraph="We believe that every celebration should reflect your unique style and preferences. Our dedicated team will work closely with you to understand your vision and design a tailor-made event that surpasses your expectations. From elegant decor and exquisite cuisine to personalized details, we ensure that your special day is a true reflection of your love and individuality."
        className=""
      />
      <TextComponent
        paragraph="With years of experience in the industry, We have a deep understanding of the unique requirements of destination weddings and social events. Our skilled team of planners and coordinators will guide you through the entire process, providing expert advice and personalized assistance to bring your vision to life."
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
