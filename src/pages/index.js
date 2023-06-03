import * as React from "react"
import SwiperCarousel from "../components/BackgroundCarousel/SwiperCarousel"
import Layout from "../components/layout"
import Seo from "../components/seo"
import IndexInformation from "../components/IndexInformationComponent/IndexInformation"
import ServicesComponent from "../components/ServicesComponent/ServicesComponent"
import Testimonials from "../components/TestimonialsComponent/Testimonials"

//Photos for Services Component
import image1 from "../images/wedding.jpg"
import image2 from "../images/wedding2.jpg"
import image3 from "../images/wedding3.jpg"

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

const IndexPage = () => (
  <Layout>
    <SwiperCarousel cta={true} photoList={carouselPhotos}/>
    <IndexInformation />
    <ServicesComponent image1={image1} image2={image2} image3={image3} />
    <Testimonials />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
