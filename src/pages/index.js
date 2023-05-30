import * as React from "react"
import SwiperCarousel from "../components/BackgroundCarousel/SwiperCarousel"
import Layout from "../components/layout"
import Seo from "../components/seo"
import IndexInformation from "../components/IndexInformationComponent/IndexInformation"
import ServicesComponent from "../components/ServicesComponent/ServicesComponent"
import Testimonials from "../components/TestimonialsComponent/Testimonials"

import photo1 from "../images/wedding.jpg"
import photo2 from "../images/wedding2.jpg"
import photo3 from "../images/wedding3.jpg"
const carouselPhotos = [photo1, photo2, photo3]

const IndexPage = () => (
  <Layout>
    <SwiperCarousel cta={true} photoList={carouselPhotos} />
    <IndexInformation />
    <ServicesComponent />
    <Testimonials />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
