import React from "react"
import LinksComponent from "./LinksComponent"

const ServicesComponent = ({ image1, image2, image3 }) => {
  return (
    <div className="bg-white flex justify-center items-center">
      <div className="max-w-5xl my-10 md:my-20  flex flex-col lg:flex-row justify-center items-center">
        <LinksComponent
          name="Weddings"
          url="/services/weddings"
          description="With every last detail taken care of, we're here to ensure the day you've always dreamed of will be the day you'll never forget."
          image={image1}
          textColor="text-black"
        />
        <LinksComponent
          name="Events"
          url="/services/events"
          description="Wow your guests with a unique corporate experience that aligns with your company's mission and elevates your brand."
          image={image2}
          textColor="text-black"
        />
        <LinksComponent
          name="Photos"
          url="/services/photos"
          description="Capture cherished moments with stunning photos that immortalize love, joy, and memories that last a lifetime."
          image={image3}
          textColor="text-black"
        />
      </div>
    </div>
  )
}

export default ServicesComponent
