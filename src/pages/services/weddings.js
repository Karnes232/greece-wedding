import React from "react"
import Layout from "../../components/layout"
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel"
import ServicesDescription from "../../components/ServiceDescriptionComponent/ServicesDescription"
import ServicesList from "../../components/ServiceDescriptionComponent/ServicesList"
import PreviousWork from "../../components/ServiceDescriptionComponent/PreviousWork"

//Event Images
import previousWeddings from "../../data/previousWeddings"

import {
  carouselPhotos,
  serviceDescriptionPhoto,
  serviceListPhoto,
} from "../../data/pages/weddingPhotos"

const weddings = () => {
  return (
    <Layout>
      <SwiperCarousel cta={false} photoList={carouselPhotos} />
      <ServicesDescription
        paragraph1="Congratulations on your upcoming wedding! We understand that your wedding day is a once-in-a-lifetime moment filled with love, joy, and unforgettable memories. Let us turn your dream wedding into a reality in the captivating destination of Punta Cana."
        paragraph2="Imagine exchanging your vows against the backdrop of pristine white-sand beaches, azure waters, and swaying palm trees. Punta Cana offers a magical setting for your special day, where natural beauty merges with romance, creating an idyllic atmosphere that will take your breath away. Whether you envision an intimate beach ceremony, a charming garden affair, or a grand celebration at a luxurious resort, our team of expert wedding planners will bring your vision to life with meticulous attention to detail."
        image={serviceDescriptionPhoto}
      />
      <ServicesList
        image={serviceListPhoto}
        listTitle="Wedding Services"
        list={[
          "Ceremony & Reception Coordination",
          "Rehearsal Dinner Coordination",
          "Rentals & Vendor Coordination",
          "Wedding Day Timeline",
          "Floor Plan Design",
          "Wedding Concept & Design",
          "Budget Management",
          "Security & Staffing",
          "Tenting",
          "Transportation & Parking",
        ]}
      />
      <ServicesDescription
        paragraph1="We believe that your wedding should be as unique as your love story. That's why we offer tailor-made wedding packages designed to reflect your personal style, preferences, and dreams. Our experienced planners will work closely with you to understand your vision, offer expert guidance, and curate a customized package that encompasses every aspect of your special day. From venue selection and decor to catering and entertainment, we will handle all the details, ensuring a seamless and unforgettable wedding experience."
        paragraph2="Your dream wedding awaits in Punta Cana, and Greece Weddings is here to guide you every step of the way. Explore our website to learn more about our wedding services, browse through our gallery of stunning weddings we have created, and read testimonials from our delighted couples. Contact us today to schedule a consultation with our dedicated team of wedding planners. Together, let's create a wedding day that surpasses your expectations and leaves you with beautiful memories to cherish for a lifetime."
        image={serviceDescriptionPhoto}
      />
      <PreviousWork serviceTitle="Weddings" PreviousWork={previousWeddings} />
    </Layout>
  )
}

export default weddings
