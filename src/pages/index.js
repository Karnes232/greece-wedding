import * as React from "react"
import SwiperCarousel from "../components/BackgroundCarousel/SwiperCarousel"
import Layout from "../components/layout"
import Seo from "../components/seo"
import IndexInformation from "../components/IndexInformationComponent/IndexInformation"
import ServicesComponent from "../components/ServicesComponent/ServicesComponent"
import Testimonials from "../components/TestimonialsComponent/Testimonials"

//Photos for Carousel & Services
import {
  carouselPhotos,
  weddingPhoto,
  eventPhoto,
  PhotoSession,
} from "../data/pages/IndexPhotos"

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

export const Head = () => (
  <>
    <Seo title="" description='Create lasting memories with Greece Weddings, Photos & Events, your premier wedding, event, and photography specialists. From dream weddings to unforgettable celebrations, we bring your vision to life. Our talented team captures every moment with precision and artistry. Trust us to make your moments truly unforgettable.' />
    <meta
      name="google-site-verification"
      content="sN5dEuZZzj940eKwcVwd4RXMUzeZXQOqqHhjLXNFoHE"
    />
  </>
)

export default IndexPage
