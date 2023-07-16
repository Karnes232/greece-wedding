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
    allContentfulSeo(filter: {title: {eq: "Services Page"}}) {
      edges {
        node {
          title
          title1
          description1 {
            description1
          }
        }
      }
    }
  }
`

export default Index

export const Head = ({data}) => {
  const { title1, description1 } = data.allContentfulSeo.edges[0].node
  return (
  <>
    <Seo
      title={title1}
      description={description1.description1}
    />
    <link rel="canonical" href="https://greeceeventspc.com/services" />
  </>
)}
