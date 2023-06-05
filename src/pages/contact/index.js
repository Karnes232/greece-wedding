import React from "react"
import Layout from "../../components/layout"
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel"
import ContactForm from "../../components/ContactFormComponents/ContactForm"

//Photos for Carousel
import { carouselPhotos } from "../../data/pages/contactPhotos"

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
