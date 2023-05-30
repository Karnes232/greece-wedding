import React from "react"
import Layout from "../../components/layout"
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel"
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent"

//Photos for Carousel
import photo2 from "../../images/wedding.jpg"
import photo1 from "../../images/wedding2.jpg"
import photo3 from "../../images/wedding3.jpg"

//Photos for Services Component
import image1 from "../../images/wedding.jpg"
import image2 from "../../images/wedding2.jpg"
import image3 from "../../images/wedding3.jpg"
import ServiceInformation from "../../components/ServiceInformation/ServiceInformation"

const carouselPhotos = [photo1, photo2, photo3]
const index = () => {
  return (
    <Layout>
      <SwiperCarousel cta={false} photoList={carouselPhotos} />
      <ServicesComponent image1={image1} image2={image2} image3={image3} />
      <ServiceInformation />
    </Layout>
  )
}

export default index
