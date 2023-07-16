import React from "react"
import Layout from "../../components/layout"
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel"
import ContactForm from "../../components/ContactFormComponents/ContactForm"

//Photos for Carousel
import { carouselPhotos } from "../../data/pages/contactPhotos"
import Seo from "../../components/seo"
import { graphql } from "gatsby"

const index = () => {
  return (
    <Layout>
      <SwiperCarousel cta={false} photoList={carouselPhotos} />
      <main className="min-h-screen">
        <div className="mt-5 text-center md:text-lg lg:text-xl uppercase font-light">
          Send us a Message
        </div>
        <ContactForm />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allContentfulSeo(filter: {title: {eq: "Contact Page"}}) {
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
    <link rel="canonical" href="https://greeceeventspc.com/contact" />
  </>
)}



export default index
