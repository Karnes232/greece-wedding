import React from "react"
import Layout from "../../components/layout"
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel"

import ServicesDescription from "../../components/ServiceDescriptionComponent/ServicesDescription"
import ServicesList from "../../components/ServiceDescriptionComponent/ServicesList"
import PreviousWork from "../../components/ServiceDescriptionComponent/PreviousWork"
import previousEvents from "../../data/previousEvents"

import {
  carouselPhotos,
  serviceDescriptionPhoto,
  serviceListPhoto,
} from "../../data/pages/eventsPhotos"
import Seo from "../../components/seo"

const events = () => {
  return (
    <Layout>
      <SwiperCarousel cta={false} photoList={carouselPhotos} />
      <ServicesDescription
        paragraph1="We believe that every special occasion deserves to be celebrated in style. Whether you're hosting a milestone birthday party, an anniversary celebration, a family reunion, or any other social event, we are here to bring your vision to life in the enchanting destination of Punta Cana."
        paragraph2="Punta Cana offers the perfect backdrop for your social event, with its stunning natural beauty, warm tropical climate, and luxurious venues. From intimate gatherings to extravagant soirées, our team of experienced event planners will work closely with you to understand your unique preferences, desires, and expectations. We will transform your vision into a reality, creating an unforgettable celebration that surpasses your wildest dreams."
        paragraph3=""
        image={serviceDescriptionPhoto}
      />
      <ServicesList
        image={serviceListPhoto}
        listTitle="Types of Events"
        list={[
          "Conferences, Workshops, Presentations, Educational Sessions",
          "Corporate Announcements, Product Unveilings, Milestone Festivities",
          "Collaborative Workshops, Leadership Getaways",
          "Industry Gatherings, Business Expositions, Professional Networking",
          "Fundraisers, Auctions, Charity events",
          "Festive Gatherings, Yearly Celebrations, Staff Recognition",
          "Your Additional Requirements, We're Here!",
        ]}
      />
      <PreviousWork
        serviceTitle="Events Planning"
        PreviousWork={previousEvents}
      />
    </Layout>
  )
}

export default events

export const Head = () => (
  <>
    <Seo
      title="Social Events"
      description="Create lasting memories with Greece Weddings, Photos & Events, your premier wedding, event, and photography specialists. From dream weddings to unforgettable celebrations, we bring your vision to life. Our talented team captures every moment with precision and artistry. Trust us to make your moments truly unforgettable."
    />
    <link rel="canonical" href="https://greeceeventspc.com/services/events" />
  </>
)
