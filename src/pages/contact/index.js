import React from "react"
import Layout from "../../components/layout"
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel"
import ContactForm from "../../components/ContactFormComponents/ContactForm"


//Photos for Carousel
const carouselPhoto1 = "https://i.postimg.cc/BvG8mqzz/wedding20.webp"
const carouselPhoto1Mobile = 'https://i.postimg.cc/zf6qxp3G/wedding20.webp'
const carouselPhoto2 = 'https://i.postimg.cc/9X9ZcBD5/wedding35.webp'
const carouselPhoto2Mobile = 'https://i.postimg.cc/GpRvfTLw/wedding35.webp'
const carouselPhoto3 = 'https://i.postimg.cc/BvwHnY5s/wedding31.webp'
const carouselPhoto3Mobile = 'https://i.postimg.cc/HWv4LL2X/wedding31.webp'

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
      <main className="min-h-screen">
        <div className="mt-5 text-center md:text-lg lg:text-xl uppercase font-light">
          Send us a Message
        </div>
        <ContactForm />
      </main>
    </Layout>
  )
}

export default index
