import React from "react"
import Layout from "../../components/layout"
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel"
import ContactForm from "../../components/ContactFormComponents/ContactForm"

const index = () => {
  return (
    <Layout>
      <SwiperCarousel cta={false} />
      <main className="min-h-screen">
        <div className="mt-5 text-center uppercase font-light">
          Send us a Message
        </div>
        <ContactForm />
      </main>
    </Layout>
  )
}

export default index
