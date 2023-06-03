import React from "react"
import Layout from "../../components/layout"

import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel"
//Service Description Image
import image from "../../images/wedding3.jpg"
import ServicesDescription from "../../components/ServiceDescriptionComponent/ServicesDescription"
import ServicesList from "../../components/ServiceDescriptionComponent/ServicesList"
import PreviousWork from "../../components/ServiceDescriptionComponent/PreviousWork"
import previousPhoto from "../../data/previousPhoto"

//Photos for Carousel
const carouselPhoto1 = "https://i.postimg.cc/HLS47sgq/wedding26.webp"
const carouselPhoto1Mobile = "https://i.postimg.cc/tgdNRtS4/wedding26.webp"
const carouselPhoto2 = "https://i.postimg.cc/MHZVdWnw/wedding7.webp"
const carouselPhoto2Mobile = "https://i.postimg.cc/brXNwLjB/wedding7.webp"
const carouselPhoto3 = "https://i.postimg.cc/50gFHZnR/wedding4.webp"
const carouselPhoto3Mobile = "https://i.postimg.cc/bY2ZfSj5/wedding4.webp"

const carouselPhotos = [
  {
    image: carouselPhoto1,
    mobile: carouselPhoto1Mobile,
  },
  {
    image: carouselPhoto2,
    mobile: carouselPhoto2Mobile,
  },
  {
    image: carouselPhoto3,
    mobile: carouselPhoto3Mobile,
  },
]
const photos = () => {
  return (
    <Layout>
      <SwiperCarousel cta={false} photoList={carouselPhotos} />
      <ServicesDescription
        paragraph1="Our team is here to make the day you've always dreamed of, the day you'll never forget."
        paragraph2="From the very beginning, we will create a custom proposal based on your wants and needs. Once booked, your Infinity event team will collaborate with you to build the foundation of your wedding, creating an inspiration board and floor plan based on your unique vision. From unique lighting to seating charts, with us customization is guaranteed."
        paragraph3="We care about the experience of planning your wedding from start to finish. So relax and have fun. Your Infinity event team will guide you every step of the way, ensuring your big day is effortless and unforgettable."
        image={image}
      />
      <ServicesList
        image={image}
        listTitle="Photo Services"
        list={[
          "Ceremony & Reception Coordination",
          "Rehearsal Dinner Coordination",
          "Rentals & Vendor Coordination",
          "Wedding Day Timeline",
          "Floor Plan Design",
          "Wedding Concept & Design",
          "Budget Management",
          "Security & Staffing",
          "Tenting",
          "Transportation & Parking",
        ]}
      />
      <PreviousWork serviceTitle="Photoshoots" PreviousWork={previousPhoto} />
    </Layout>
  )
}

export default photos
