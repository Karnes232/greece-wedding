import React from "react"
import LinksComponent from "./LinksComponent"

const ServicesComponent = ({ image1, image2, image3 }) => {
  return (
    <div className="bg-white flex justify-center items-center">
      <div className="max-w-5xl my-10 md:my-20  flex flex-col lg:flex-row justify-center items-center">
        <LinksComponent
          name="Weddings"
          url="/services/weddings"
          description="Create your perfect wedding in paradise. From intimate ceremonies to grand celebrations, We will craft a unforgettable moment tailored to your love story."
          image={image1}
          textColor="text-black"
        />
        <LinksComponent
          name="Events"
          url="/services/events"
          description="Celebrate life's special moments with elegance and style. Our dedicated team designs and coordinates social events that exceed expectations, creating unforgettable experiences for you and your guests."
          image={image2}
          textColor="text-black"
        />
        <LinksComponent
          name="Photos"
          url="/services/photos"
          description="Capture cherished memories in breathtaking frames. Our professional photographers skillfully curate photo sessions, transforming moments into timeless art that beautifully reflects your unique story."
          image={image3}
          textColor="text-black"
        />
      </div>
    </div>
  )
}

export default ServicesComponent
