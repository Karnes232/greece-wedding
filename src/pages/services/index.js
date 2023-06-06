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
