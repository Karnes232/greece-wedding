import * as React from "react"
import SwiperCarousel from "../components/BackgroundCarousel/SwiperCarousel"
import Layout from "../components/layout"
import Seo from "../components/seo"
import IndexInformation from "../components/IndexInformationComponent/IndexInformation"
import ServicesComponent from "../components/ServicesComponent/ServicesComponent"

const IndexPage = () => (
  <Layout>
    <SwiperCarousel />
    <IndexInformation />
    <ServicesComponent />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
