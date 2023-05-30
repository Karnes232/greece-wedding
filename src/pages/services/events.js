import React from "react"
import Layout from "../../components/layout"
//Carousel Photos
import photo2 from "../../images/wedding.jpg"
import photo1 from "../../images/wedding2.jpg"
import photo3 from "../../images/wedding3.jpg"
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel"

//Service Description Image
import image from "../../images/wedding2.jpg"
import ServicesDescription from "../../components/ServiceDescriptionComponent/ServicesDescription"
const events = () => {
  const carouselPhotos = [photo1, photo2, photo3]
  return (
    <Layout>
      <SwiperCarousel cta={false} photoList={carouselPhotos} />
      <ServicesDescription
        paragraph1="The corporate world is fast-paced and full of details. When partnering with Infinity Hospitality, we take care of those details while creating a unique experience for your guests that coincides with your company’s vision. "
        paragraph2="Whether it’s attracting new customers, educating your employees, or celebrating company milestones, we’ll help you create and execute the event strategy you have in mind. Once booked, we will collaborate with you to build the foundation of your event, creating an inspiration board and floor plan based on your goals. Then from the production to design, your Infinity team will bring your brand to life through our high quality planning and management services, as well as day-of coordination."
        paragraph3=""
        image={image}
      />
      <div className="min-h-screen"></div>
    </Layout>
  )
}

export default events
