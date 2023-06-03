import React from "react"
import Layout from "../../components/layout"
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel"

//Service Description Image
import image from "../../images/wedding2.jpg"
import ServicesDescription from "../../components/ServiceDescriptionComponent/ServicesDescription"
import ServicesList from "../../components/ServiceDescriptionComponent/ServicesList"
import PreviousWork from "../../components/ServiceDescriptionComponent/PreviousWork"
import previousEvents from "../../data/previousEvents"

//Photos for Carousel
const carouselPhoto1 = "https://i.postimg.cc/HLS47sgq/wedding26.webp"
const carouselPhoto1Mobile = "https://i.postimg.cc/tgdNRtS4/wedding26.webp"
const carouselPhoto2 = "https://i.postimg.cc/MHZVdWnw/wedding7.webp"
const carouselPhoto2Mobile = "https://i.postimg.cc/brXNwLjB/wedding7.webp"
const carouselPhoto3 = "https://i.postimg.cc/50gFHZnR/wedding4.webp"
const carouselPhoto3Mobile = "https://i.postimg.cc/bY2ZfSj5/wedding4.webp"

const carouselPhotos = [
  {
    image: carouselPhoto1,
    mobile: carouselPhoto1Mobile,
  },
  {
    image: carouselPhoto2,
    mobile: carouselPhoto2Mobile,
  },
  {
    image: carouselPhoto3,
    mobile: carouselPhoto3Mobile,
  },
]
const events = () => {
  return (
    <Layout>
      <SwiperCarousel cta={false} photoList={carouselPhotos} />
      <ServicesDescription
        paragraph1="The corporate world is fast-paced and full of details. When partnering with Infinity Hospitality, we take care of those details while creating a unique experience for your guests that coincides with your company’s vision. "
        paragraph2="Whether it’s attracting new customers, educating your employees, or celebrating company milestones, we’ll help you create and execute the event strategy you have in mind. Once booked, we will collaborate with you to build the foundation of your event, creating an inspiration board and floor plan based on your goals. Then from the production to design, your Infinity team will bring your brand to life through our high quality planning and management services, as well as day-of coordination."
        paragraph3=""
        image={image}
      />
      <ServicesList
        image={image}
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
