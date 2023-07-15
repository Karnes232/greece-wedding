import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SwiperCarousel from "../components/BackgroundCarousel/SwiperCarousel"
import Layout from "../components/layout"
import Seo from "../components/seo"
import IndexInformation from "../components/IndexInformationComponent/IndexInformation"
import ServicesComponent from "../components/ServicesComponent/ServicesComponent"
import Testimonials from "../components/TestimonialsComponent/Testimonials"
import { schema } from "../data/schema"

//Photos for Carousel & Services
import {
  carouselPhotos,
  weddingPhoto,
  eventPhoto,
  PhotoSession,
} from "../data/pages/IndexPhotos"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      indexInformation: allContentfulIndexPage {
        edges {
          node {
            title
            title2
            title3
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
  `)
  //console.log(data.serviceComponent.edges[0].node)
  return (
    <Layout>
      <SwiperCarousel cta={true} photoList={carouselPhotos} />
      <IndexInformation
        indexInformation={data.indexInformation.edges[0].node}
      />
      <ServicesComponent
        image1={weddingPhoto}
        image2={eventPhoto}
        image3={PhotoSession}
        serviceComponentData={data.serviceComponent.edges[0].node}
      />
      <Testimonials />
    </Layout>
  )
}

export const Head = () => (
  <>
    <Seo
      title=""
      description="Create lasting memories with Greece Weddings, Photos & Events, your premier wedding, event, and photography specialists. From dream weddings to unforgettable celebrations, we bring your vision to life. Our talented team captures every moment with precision and artistry. Trust us to make your moments truly unforgettable."
      schemaMarkup={schema}
    />
    <link rel="canonical" href="https://greeceeventspc.com/" />
    <meta
      name="google-site-verification"
      content="sN5dEuZZzj940eKwcVwd4RXMUzeZXQOqqHhjLXNFoHE"
    />
  </>
)

export default IndexPage
