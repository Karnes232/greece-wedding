import React from "react"
import Layout from "../../components/layout"
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel"

import ServicesDescription from "../../components/ServiceDescriptionComponent/ServicesDescription"
import ServicesList from "../../components/ServiceDescriptionComponent/ServicesList"
import PreviousWork from "../../components/ServiceDescriptionComponent/PreviousWork"

import { carouselPhotos } from "../../data/pages/eventsPhotos"
import Seo from "../../components/seo"
import { graphql } from "gatsby"

const Events = ({ data }) => {
  const {
    paragraph1,
    paragraph2,
    serviceDescriptionPhoto,
    serviceListPhoto,
    listTitle,
    list,
  } = data.allContentfulEventsPage.edges[0].node
  console.log(data.allContentfulPreviousEvents.edges[0].node)
  return (
    <Layout>
      <SwiperCarousel cta={false} photoList={carouselPhotos} />
      <ServicesDescription
        paragraph1={paragraph1.paragraph1}
        paragraph2={paragraph2.paragraph2}
        paragraph3=""
        image={serviceDescriptionPhoto}
      />
      <ServicesList
        image={serviceListPhoto}
        listTitle={listTitle}
        list={list}
      />
      <PreviousWork
        serviceTitle="Events Planning"
        PreviousWork={[
          {
            image: data.allContentfulPreviousEvents.edges[0].node.image1,
            eventTitle:
              data.allContentfulPreviousEvents.edges[0].node.eventTitle1,
            description:
              data.allContentfulPreviousEvents.edges[0].node.description1,
          },
          {
            image: data.allContentfulPreviousEvents.edges[0].node.image2,
            eventTitle:
              data.allContentfulPreviousEvents.edges[0].node.eventTitle2,
            description:
              data.allContentfulPreviousEvents.edges[0].node.description2,
          },
          {
            image: data.allContentfulPreviousEvents.edges[0].node.image3,
            eventTitle:
              data.allContentfulPreviousEvents.edges[0].node.eventTitle3,
            description:
              data.allContentfulPreviousEvents.edges[0].node.description3,
          },
        ]}
      />
    </Layout>
  )
}

export default Events

export const query = graphql`
  query MyQuery {
    allContentfulEventsPage {
      edges {
        node {
          paragraph1 {
            paragraph1
          }
          paragraph2 {
            paragraph2
          }
          serviceDescriptionPhoto
          serviceListPhoto
          listTitle
          list
        }
      }
    }
    allContentfulPreviousEvents(
      filter: { title: { eq: "Previous Events Page" } }
    ) {
      edges {
        node {
          description1
          description2
          description3
          eventTitle1
          eventTitle2
          eventTitle3
          image1
          image2
          image3
        }
      }
    }
  }
`

export const Head = () => (
  <>
    <Seo
      title="Social Events"
      description="Create lasting memories with Greece Weddings, Photos & Events, your premier wedding, event, and photography specialists. From dream weddings to unforgettable celebrations, we bring your vision to life. Our talented team captures every moment with precision and artistry. Trust us to make your moments truly unforgettable."
    />
    <link rel="canonical" href="https://greeceeventspc.com/services/events" />
  </>
)
