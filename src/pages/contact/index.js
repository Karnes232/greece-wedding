import React from "react"
import Layout from "../../components/layout"
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel"
import ContactForm from "../../components/ContactFormComponents/ContactForm"

//Photos for Carousel
import { carouselPhotos } from "../../data/pages/contactPhotos"
import Seo from "../../components/seo"

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

export const Head = () => (
  <>
    <Seo title="Contact Us" description='Create lasting memories with Greece Weddings, Photos & Events, your premier wedding, event, and photography specialists. From dream weddings to unforgettable celebrations, we bring your vision to life. Our talented team captures every moment with precision and artistry. Trust us to make your moments truly unforgettable.'/>
  </>
)

export default index
