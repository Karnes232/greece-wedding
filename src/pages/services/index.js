import React from "react"
import Layout from "../../components/layout"
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel"
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent"

//Photos for Services Component
import image1 from "../../images/wedding.jpg"
import image2 from "../../images/wedding2.jpg"
import image3 from "../../images/wedding3.jpg"
import ServiceInformation from "../../components/ServiceInformation/ServiceInformation"

//Photos for Carousel
const carouselPhoto1 = "https://i.postimg.cc/HLS47sgq/wedding26.webp"
const carouselPhoto1Mobile = 'https://i.postimg.cc/tgdNRtS4/wedding26.webp'
const carouselPhoto2 = 'https://i.postimg.cc/MHZVdWnw/wedding7.webp'
const carouselPhoto2Mobile = 'https://i.postimg.cc/brXNwLjB/wedding7.webp'
const carouselPhoto3 = 'https://i.postimg.cc/50gFHZnR/wedding4.webp'
const carouselPhoto3Mobile = 'https://i.postimg.cc/bY2ZfSj5/wedding4.webp'

const carouselPhotos = [
  {
    image: carouselPhoto1,
    mobile: carouselPhoto1Mobile
  },
  {
    image: carouselPhoto2,
    mobile: carouselPhoto2Mobile
  },
  {
    image: carouselPhoto3,
    mobile: carouselPhoto3Mobile
  },
]
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
