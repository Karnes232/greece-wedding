import React from 'react'
import Layout from '../../components/layout'
//Carousel Photos
import photo2 from "../../images/wedding.jpg"
import photo1 from "../../images/wedding2.jpg"
import photo3 from "../../images/wedding3.jpg"
import SwiperCarousel from '../../components/BackgroundCarousel/SwiperCarousel'
const carouselPhotos = [photo1, photo2, photo3]
const events = () => {
  return (
    <Layout>
    <SwiperCarousel cta={false} photoList={carouselPhotos} />
        Events
    </Layout>
  )
}

export default events