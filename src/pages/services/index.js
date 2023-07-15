import React from "react"
import Layout from "../../components/layout"
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel"
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent"
import ServiceInformation from "../../components/ServiceInformation/ServiceInformation"

import {
  carouselPhotos,
  weddingPhoto,
  eventPhoto,
  PhotoSession,
} from "../../data/pages/servicePhotos"
import Seo from "../../components/seo"

const index = () => {
  return (
    <Layout>
      <SwiperCarousel cta={false} photoList={carouselPhotos} />
      <ServicesComponent
        image1={weddingPhoto}
        image2={eventPhoto}
        image3={PhotoSession}
      />
      <ServiceInformation />
    </Layout>
  )
}

export default index

export const Head = () => (
  <>
    <Seo description="Create lasting memories with Greece Weddings, Photos & Events, your premier wedding, event, and photography specialists. From dream weddings to unforgettable celebrations, we bring your vision to life. Our talented team captures every moment with precision and artistry. Trust us to make your moments truly unforgettable." />
    <link rel="canonical" href="https://greeceeventspc.com/services" />
  </>
)
