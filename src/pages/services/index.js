import React from "react"
import Layout from "../../components/layout"
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel"
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent"
import ServiceInformation from "../../components/ServiceInformation/ServiceInformation"

import {
  carouselPhotos,
  weddingPhoto,
  eventPhoto,
  PhotoSession,
} from "../../data/pages/servicePhotos"
import Seo from "../../components/seo"
import { graphql } from "gatsby"

const Index = ({ data }) => {
  return (
    <Layout>
      <SwiperCarousel cta={false} photoList={carouselPhotos} />
      <ServicesComponent
        image1={weddingPhoto}
        image2={eventPhoto}
        image3={PhotoSession}
        serviceComponentData={data.serviceComponent.edges[0].node}
      />
      <ServiceInformation data={data.allContentfulServicePage.edges[0].node} />
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allContentfulServicePage {
      edges {
        node {
          title
          title1
          title2
          paragraph1 {
            paragraph1
          }
          paragraph2 {
            paragraph2
          }
          paragraph3 {
            paragraph3
          }
          button
        }
      }
    }
    serviceComponent: allContentfulIndexPageServiceComponent {
      edges {
        node {
          title
          title1
          paragraph1 {
            paragraph1
          }
          title2
          paragraph2 {
            paragraph2
          }
          title3
          paragraph3 {
            paragraph3
          }
        }
      }
    }
  }
`

export default Index

export const Head = () => (
  <>
    <Seo description="Create lasting memories with Greece Weddings, Photos & Events, your premier wedding, event, and photography specialists. From dream weddings to unforgettable celebrations, we bring your vision to life. Our talented team captures every moment with precision and artistry. Trust us to make your moments truly unforgettable." />
    <link rel="canonical" href="https://greeceeventspc.com/services" />
  </>
)
