import React from "react"
import Layout from "../../components/layout"
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel"
import ServicesDescription from "../../components/ServiceDescriptionComponent/ServicesDescription"
import ServicesList from "../../components/ServiceDescriptionComponent/ServicesList"
import PreviousWork from "../../components/ServiceDescriptionComponent/PreviousWork"

import { carouselPhotos } from "../../data/pages/photoSessionPhotos"
import Seo from "../../components/seo"
import { graphql } from "gatsby"

const Photos = ({ data }) => {
  const {
    paragraph1,
    paragraph2,
    serviceDescriptionPhoto,
    serviceListPhoto,
    listTitle,
    list,
  } = data.allContentfulPhotosPage.edges[0].node
  return (
    <Layout>
      <SwiperCarousel cta={false} photoList={carouselPhotos} />
      <ServicesDescription
        paragraph1={paragraph1.paragraph1}
        paragraph2={paragraph2.paragraph}
        paragraph3=""
        image={serviceDescriptionPhoto}
      />
      <ServicesList
        image={serviceListPhoto}
        listTitle={listTitle}
        list={list}
      />
      <PreviousWork
        serviceTitle="Photoshoots"
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

export default Photos

export const query = graphql`
  query MyQuery {
    allContentfulPhotosPage {
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
      filter: { title: { eq: "Previous Photos Sessions" } }
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
    allContentfulSeo(filter: {title: {eq: "Photos Page"}}) {
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


export const Head = ({data}) => {
  const { title1, description1 } = data.allContentfulSeo.edges[0].node
  return (
  <>
    <Seo
      title={title1}
      description={description1.description1}
    />
    <link rel="canonical" href="https://greeceeventspc.com/services/photos" />
  </>
)}