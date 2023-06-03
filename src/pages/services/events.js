import React from "react"
import Layout from "../../components/layout"
//Carousel Photos
import photo2 from "../../images/wedding.jpg"
import photo1 from "../../images/wedding2.jpg"
import photo3 from "../../images/wedding3.jpg"
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel"

//Service Description Image
import image from "../../images/wedding2.jpg"
import ServicesDescription from "../../components/ServiceDescriptionComponent/ServicesDescription"
import ServicesList from "../../components/ServiceDescriptionComponent/ServicesList"
import PreviousWork from "../../components/ServiceDescriptionComponent/PreviousWork"
import previousEvents from "../../data/previousEvents"
const events = () => {
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
  return (
    <Layout>
      <SwiperCarousel cta={false} photoList={carouselPhotos} photoList2={carouselPhotos2}/>
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
