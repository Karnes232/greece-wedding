import React from "react"
import Layout from "../../components/layout"
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel"
import ServicesDescription from "../../components/ServiceDescriptionComponent/ServicesDescription"
import ServicesList from "../../components/ServiceDescriptionComponent/ServicesList"
import PreviousWork from "../../components/ServiceDescriptionComponent/PreviousWork"
import previousPhoto from "../../data/previousPhoto"

import {
  carouselPhotos,
  serviceDescriptionPhoto,
  serviceListPhoto,
} from "../../data/pages/photoSessionPhotos"
import Seo from "../../components/seo"

const photos = () => {
  return (
    <Layout>
      <SwiperCarousel cta={false} photoList={carouselPhotos} />
      <ServicesDescription
        paragraph1="We understand the power of photography to preserve cherished moments and create timeless memories. Our expert photographers are passionate about capturing the beauty, joy, and love that surrounds special occasions. Whether you're looking for stunning engagement photos, family portraits, or vacation snapshots, our photo sessions in Punta Cana will exceed your expectations."
        paragraph2="Punta Cana offers an abundance of breathtaking locations that serve as the perfect backdrop for your photo sessions. From pristine white-sand beaches and turquoise waters to lush tropical gardens and historic landmarks, the natural beauty of Punta Cana adds an unparalleled charm to your photographs. Our photographers are intimately familiar with the region, and they will guide you to the most scenic spots, ensuring that every frame captures the magic of your surroundings."
        paragraph3=""
        image={serviceDescriptionPhoto}
      />
      <ServicesList
        image={serviceListPhoto}
        listTitle="Photo Services"
        list={[
          "Professional Photography Services",
          "High-resolution Digital Images",
          "Customized Photo Albums",
          "Photo Prints in Various Sizes",
          "Online Gallery for Image Viewing and Sharing",
          "Photo Editing and Retouching Services",
          "On-location Shoots in Unique Settings",
          "Personalized Photo Calendars",
          "Photo Booth Rental with Props and Backdrops",
          "Video Slideshows and Montages",
        ]}
      />
      <PreviousWork serviceTitle="Photoshoots" PreviousWork={previousPhoto} />
    </Layout>
  )
}

export default photos

export const Head = () => (
  <>
    <Seo
      title="Photo Services"
      description="Create lasting memories with Greece Weddings, Photos & Events, your premier wedding, event, and photography specialists. From dream weddings to unforgettable celebrations, we bring your vision to life. Our talented team captures every moment with precision and artistry. Trust us to make your moments truly unforgettable."
    />
    <link rel="canonical" href="https://greeceeventspc.com/services/photos" />
  </>
)
