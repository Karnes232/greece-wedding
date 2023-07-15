import React from "react"
import LinksComponent from "./LinksComponent"
const ServicesComponent = ({
  image1,
  image2,
  image3,
  serviceComponentData,
}) => {
  return (
    <div className="bg-white flex justify-center items-center">
      <div className="max-w-5xl my-10 md:my-20  flex flex-col lg:flex-row justify-center items-center">
        {serviceComponentData && (
          <>
            <LinksComponent
              name={serviceComponentData.title1}
              url="/services/weddings"
              description={serviceComponentData.paragraph1.paragraph1}
              image={image1}
              textColor="text-black"
            />
            <LinksComponent
              name={serviceComponentData.title2}
              url="/services/events"
              description={serviceComponentData.paragraph2.paragraph2}
              image={image2}
              textColor="text-black"
            />
            <LinksComponent
              name={serviceComponentData.title3}
              url="/services/photos"
              description={serviceComponentData.paragraph3.paragraph3}
              image={image3}
              textColor="text-black"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default ServicesComponent
