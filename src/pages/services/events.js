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
          "Meetings, seminars, speakers, training",
          "Company announcements, product launches or releases, milestone celebrations",
          "Team-building days, executive retreats",
          "Conferences, trade shows, networking events",
          "Fundraisers, auctions, charity events",
          "Holiday parties, annual parties, employee appreciation",
          "Anything else you need!",
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
