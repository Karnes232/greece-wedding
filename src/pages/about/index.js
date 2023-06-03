import React from "react"
import Layout from "../../components/layout"
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel"
import ServicesDescription from "../../components/ServiceDescriptionComponent/ServicesDescription"
import PreviousWork from "../../components/ServiceDescriptionComponent/PreviousWork"
import previousEvents from "../../data/previousEvents"

const ServicesDescriptionImage = "https://i.postimg.cc/QCyfQ5y5/setup8.webp"
const aboutUsPhoto = 'https://i.postimg.cc/50PgJL1G/setup13.webp'
//Photos for Carousel
const carouselPhoto1 = "https://i.postimg.cc/BvG8mqzz/wedding20.webp"
const carouselPhoto1Mobile = "https://i.postimg.cc/zf6qxp3G/wedding20.webp"
const carouselPhoto2 = "https://i.postimg.cc/9X9ZcBD5/wedding35.webp"
const carouselPhoto2Mobile = "https://i.postimg.cc/GpRvfTLw/wedding35.webp"
const carouselPhoto3 = "https://i.postimg.cc/BvwHnY5s/wedding31.webp"
const carouselPhoto3Mobile = "https://i.postimg.cc/HWv4LL2X/wedding31.webp"

const carouselPhotos = [
  {
    image: carouselPhoto1,
    mobile: carouselPhoto1Mobile,
  },
  {
    image: carouselPhoto2,
    mobile: carouselPhoto2Mobile,
  },
  {
    image: carouselPhoto3,
    mobile: carouselPhoto3Mobile,
  },
]
const index = () => {
  return (
    <Layout>
      <SwiperCarousel cta={false} photoList={carouselPhotos} />
      <ServicesDescription
        paragraph1="Founded in 2011, Infinity Hospitality was created out of a love for dynamic events and fine dining. Our goal is to provide unparalleled event services and outstanding customer service"
        paragraph2="Why Infinity? Because with us, there are infinite possibilities. Big or small, we are committed to creating one-of-a-kind events that your guests will remember for years to come. Customization is guaranteed, from your floor plan to your bar menu and signature lounge furniture."
        paragraph3="We work with the best vendors in the Nashville area to provide planning and design services at the venue of your dreams, and we also offer full services at The Bridge Building Event Spaces, The Bell Tower, and The Estate at Cherokee Dock through exclusive venue management and in-house catering."
        image={ServicesDescriptionImage}
      />
      <ServicesDescription
        paragraph1="Ease the stress of planning your big day with our team by your side. From coordinating your entire wedding weekend and bringing your design ideas to life, Infinity will help you every step of the way."
        paragraph2="Bring your brand to life through your next event with Infinity. We’ll work with your company to coordinate and manage everything you need to wow your employees and guests, from meeting planning and on-site coordination to security and transportation needs."
        paragraph3="Getting engaged? Going all out for your next birthday? Infinity can help you throw the party of your dreams, turning your vision into a reality and coordinating everything you need from the design, event rentals, and even entertainment."
        image={aboutUsPhoto}
        rowDirection="md:flex-row-reverse"
        padding="md:pr-0 md:pl-16"
        backgroundColor="bg-primary-color"
      />

      <PreviousWork
        serviceTitle="Events Planning"
        PreviousWork={previousEvents}
      />
    </Layout>
  )
}

export default index
