import React from "react"
import { graphql } from "gatsby"
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

const Index = ({ data }) => {
  const { paragraph1, paragraph2, paragraph3, paragraph4 } =
    data.allContentfulAboutPage.edges[0].node
  return (
    <Layout>
      <SwiperCarousel cta={false} photoList={carouselPhotos} />
      <ServicesDescription
        paragraph1={paragraph1.paragraph1}
        paragraph2={paragraph2.paragraph2}
        paragraph3=""
        image={ServicesDescriptionImage}
      />
      <ServicesDescription
        paragraph1={paragraph3.paragraph3}
        paragraph2={paragraph4.paragraph4}
        paragraph3=""
        image={aboutUsPhoto}
        rowDirection="md:flex-row-reverse"
        padding="md:pr-0 md:pl-16"
        backgroundColor="bg-primary-color"
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

export default Index

export const query = graphql`
  query MyQuery {
    allContentfulAboutPage {
      edges {
        node {
          paragraph1 {
            paragraph1
          }
          paragraph2 {
            paragraph2
          }
          paragraph3 {
            paragraph3
          }
          paragraph4 {
            paragraph4
          }
        }
      }
    }
    allContentfulPreviousEvents {
      edges {
        node {
          eventTitle1
          description1
          image1
          eventTitle2
          description2
          image2
          eventTitle3
          description3
          image3
        }
      }
    }
  }
`

export const Head = () => (
  <>
    <Seo
      title="About Us"
      description="Create lasting memories with Greece Weddings, Photos & Events, your premier wedding, event, and photography specialists. From dream weddings to unforgettable celebrations, we bring your vision to life. Our talented team captures every moment with precision and artistry. Trust us to make your moments truly unforgettable."
    />
    <link rel="canonical" href="https://greeceeventspc.com/about" />
  </>
)
