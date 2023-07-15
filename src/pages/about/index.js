import React from "react"
import Layout from "../../components/layout"
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel"
import ServicesDescription from "../../components/ServiceDescriptionComponent/ServicesDescription"
import PreviousWork from "../../components/ServiceDescriptionComponent/PreviousWork"
import previousEvents from "../../data/aboutEvents"

import {
  carouselPhotos,
  ServicesDescriptionImage,
  aboutUsPhoto,
} from "../../data/pages/aboutPhotos"
import Seo from "../../components/seo"

const index = () => {
  return (
    <Layout>
      <SwiperCarousel cta={false} photoList={carouselPhotos} />
      <ServicesDescription
        paragraph1="We believe that every special occasion deserves to be celebrated in a truly extraordinary way. Nestled in the picturesque paradise of Punta Cana, we are a premier event planning and photography company dedicated to crafting unforgettable weddings, social events, and photo sessions. With a team of passionate professionals and a deep appreciation for beauty and romance, we are committed to turning your dreams into reality."
        paragraph2="Greece Weddings was founded with a vision to provide exceptional experiences and capture the magic of life's most precious moments. Drawing inspiration from the rich culture and scenic beauty of Greece, we sought to bring that same sense of enchantment and elegance to the tropical paradise of Punta Cana. With years of experience in the industry and a genuine love for creating joyous celebrations, our team has established a reputation for excellence and impeccable service."
        paragraph3=""
        image={ServicesDescriptionImage}
      />
      <ServicesDescription
        paragraph1="At Greece Weddings, we are committed to delivering excellence, personalized service, and unforgettable moments. We understand the significance of your special day and the trust you place in us to make it truly remarkable. From the moment you choose us as your partner, we will work tirelessly to ensure your experience is seamless, stress-free, and filled with joy and magic."
        paragraph2="Whether you envision a romantic beach wedding, an intimate social gathering, or a captivating photo session, Greece Weddings is here to bring your dreams to life. Contact our dedicated team today to begin the journey of creating your unforgettable celebration in Punta Cana. Let us be a part of your story and help you create memories that will be treasured for a lifetime."
        paragraph3=""
        image={aboutUsPhoto}
        rowDirection="md:flex-row-reverse"
        padding="md:pr-0 md:pl-16"
        backgroundColor="bg-primary-color"
      />

      <PreviousWork
        serviceTitle="Events Planning"
        PreviousWork={previousEvents}
      />
    </Layout>
  )
}

export default index

export const Head = () => (
  <>
    <Seo
      title="About Us"
      description="Create lasting memories with Greece Weddings, Photos & Events, your premier wedding, event, and photography specialists. From dream weddings to unforgettable celebrations, we bring your vision to life. Our talented team captures every moment with precision and artistry. Trust us to make your moments truly unforgettable."
    />
    <link rel="canonical" href="https://greeceeventspc.com/about" />
  </>
)
