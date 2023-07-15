import React from "react"
import Layout from "../../components/layout"
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel"
import ServicesDescription from "../../components/ServiceDescriptionComponent/ServicesDescription"
import ServicesList from "../../components/ServiceDescriptionComponent/ServicesList"
import PreviousWork from "../../components/ServiceDescriptionComponent/PreviousWork"

//Event Images
import previousWeddings from "../../data/previousWeddings"

import { carouselPhotos } from "../../data/pages/weddingPhotos"
import Seo from "../../components/seo"
import { graphql } from "gatsby"

const Weddings = ({ data }) => {
  const {
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    listTitle,
    list,
    serviceDescriptionPhoto,
    serviceDescriptionPhoto2,
    serviceListPhoto,
  } = data.allContentfulWeddingPageInformation.edges[0].node
  console.log(data.allContentfulPreviousWeddings)
  return (
    <Layout>
      <SwiperCarousel cta={false} photoList={carouselPhotos} />
      <ServicesDescription
        paragraph1={paragraph1.paragraph1}
        paragraph2={paragraph2.paragraph2}
        image={serviceDescriptionPhoto}
      />
      <ServicesList
        image={serviceListPhoto}
        listTitle={listTitle}
        list={list}
      />
      <ServicesDescription
        paragraph1={paragraph3.paragraph3}
        paragraph2={paragraph4.paragraph4}
        image={serviceDescriptionPhoto2}
      />
      <PreviousWork
        serviceTitle="Weddings"
        PreviousWork={[
          {
            image: data.allContentfulPreviousWeddings.edges[0].node.image1,
            eventTitle:
              data.allContentfulPreviousWeddings.edges[0].node.weddingTitle1,
            description:
              data.allContentfulPreviousWeddings.edges[0].node.description1,
          },
          {
            image: data.allContentfulPreviousWeddings.edges[0].node.image2,
            eventTitle:
              data.allContentfulPreviousWeddings.edges[0].node.weddingTitle2,
            description:
              data.allContentfulPreviousWeddings.edges[0].node.description2,
          },
          {
            image: data.allContentfulPreviousWeddings.edges[0].node.image3,
            eventTitle:
              data.allContentfulPreviousWeddings.edges[0].node.weddingTitle3,
            description:
              data.allContentfulPreviousWeddings.edges[0].node.description3,
          },
        ]}
      />
    </Layout>
  )
}

export default Weddings

export const query = graphql`
  query MyQuery {
    allContentfulWeddingPageInformation {
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
          listTitle
          list
          serviceDescriptionPhoto
          serviceDescriptionPhoto2
          serviceListPhoto
        }
      }
    }
    allContentfulPreviousWeddings {
      edges {
        node {
          weddingTitle1
          description1
          image1
          weddingTitle2
          description2
          image2
          weddingTitle3
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
      title="Weddings"
      description="Create lasting memories with Greece Weddings, Photos & Events, your premier wedding, event, and photography specialists. From dream weddings to unforgettable celebrations, we bring your vision to life. Our talented team captures every moment with precision and artistry. Trust us to make your moments truly unforgettable."
    />
    <link rel="canonical" href="https://greeceeventspc.com/services/weddings" />
  </>
)
