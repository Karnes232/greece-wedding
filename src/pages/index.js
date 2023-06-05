import * as React from "react"
import SwiperCarousel from "../components/BackgroundCarousel/SwiperCarousel"
import Layout from "../components/layout"
import Seo from "../components/seo"
import IndexInformation from "../components/IndexInformationComponent/IndexInformation"
import ServicesComponent from "../components/ServicesComponent/ServicesComponent"
import Testimonials from "../components/TestimonialsComponent/Testimonials"

//Photos for Carousel & Services
import {carouselPhotos, weddingPhoto, eventPhoto, PhotoSession} from "../data/pages/IndexPhotos"

const IndexPage = () => (
  <Layout>
    <SwiperCarousel cta={true} photoList={carouselPhotos} />
    <IndexInformation />
    <ServicesComponent
      image1={weddingPhoto}
      image2={eventPhoto}
      image3={PhotoSession}
    />
    <Testimonials />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
