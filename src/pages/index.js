import * as React from "react"
import SwiperCarousel from "../components/BackgroundCarousel/SwiperCarousel"
import Layout from "../components/layout"
import Seo from "../components/seo"
import IndexInformation from "../components/IndexInformationComponent/IndexInformation"
import ServicesComponent from "../components/ServicesComponent/ServicesComponent"
import Testimonials from "../components/TestimonialsComponent/Testimonials"

//Photos for Services Component
const weddingPhoto = "https://i.postimg.cc/k42B4BRB/wedding10.webp"
const eventPhoto = "https://i.postimg.cc/x1MKg3S3/wedding34.webp"
const PhotoSession = "https://i.postimg.cc/CLSSrRMk/wedding22.webp"

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
