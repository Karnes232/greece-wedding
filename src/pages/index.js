import * as React from "react"
import SwiperCarousel from "../components/BackgroundCarousel/SwiperCarousel"
import Layout from "../components/layout"
import Seo from "../components/seo"
import IndexInformation from "../components/IndexInformationComponent/IndexInformation"
import ServicesComponent from "../components/ServicesComponent/ServicesComponent"
import Testimonials from "../components/TestimonialsComponent/Testimonials"

//Photos for Carousel
import photo1 from "../images/wedding.jpg"
import photo2 from "../images/wedding2.jpg"
import photo3 from "../images/wedding3.jpg"

//Photos for Services Component
import image1 from "../images/wedding.jpg"
import image2 from "../images/wedding2.jpg"
import image3 from "../images/wedding3.jpg"
const carouselPhotos = [photo1, photo2, photo3]
const IndexPage = () => (
  <Layout>
    <SwiperCarousel cta={true} photoList={carouselPhotos} />
    <IndexInformation />
    <ServicesComponent image1={image1} image2={image2} image3={image3} />
    <Testimonials />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
