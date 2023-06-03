import React from "react"
import Layout from "../../components/layout"
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel"
import ContactForm from "../../components/ContactFormComponents/ContactForm"

//Carousel Photos
import photo2 from "../../images/wedding.jpg"
import photo1 from "../../images/wedding2.jpg"
import photo3 from "../../images/wedding3.jpg"
const carouselPhotos = [photo1, photo2, photo3]
const carouselPhotos2 = [
  {
    image: photo1,
    mobile: photo2 
  },
  {
    image: photo1,
    mobile: photo2 
  },
  {
    image: photo1,
    mobile: photo1 
  },
]
const index = () => {
  return (
    <Layout>
      <SwiperCarousel cta={false} photoList={carouselPhotos} photoList2={carouselPhotos2}/>
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
