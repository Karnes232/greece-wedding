import React from "react"
import Layout from "../../components/layout"

//Carousel Photos
import photo2 from "../../images/wedding.jpg"
import photo1 from "../../images/wedding2.jpg"
import photo3 from "../../images/wedding3.jpg"
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel"
//Service Description Image
import image from "../../images/wedding.jpg"
import ServicesDescription from "../../components/ServiceDescriptionComponent/ServicesDescription"
import ServicesList from "../../components/ServiceDescriptionComponent/ServicesList"
import PreviousWork from "../../components/ServiceDescriptionComponent/PreviousWork"

//Event Images
import previousWeddings from "../../data/previousWeddings"

const weddings = () => {
  const carouselPhotos = [photo1, photo2, photo3]
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
        listTitle="Wedding Services"
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
      <PreviousWork serviceTitle="Weddings" PreviousWork={previousWeddings} />
    </Layout>
  )
}

export default weddings
