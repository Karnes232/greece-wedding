import React from "react"
import TextComponent from "../TextComponent/TextComponent"
import { Link, graphql, useStaticQuery } from "gatsby"

const IndexInformation = () => {
 
  // const { title, title2, title3, paragraph1, paragraph2, paragraph3, button } = (data.allContentfulIndexPage.edges[0].node)
  return (
    <div className=" bg-primary-color py-5 md:py-20 md:px-32">
      <h1 className="text-lg mb-2 mx-2 text-center font-extralight uppercase">
        Experience Unforgettable Moments in Paradise
      </h1>
      <TextComponent
        title='Plan Your Perfect Celebration'
        paragraph='Are you dreaming of a picturesque wedding or a memorable social event in the enchanting paradise of Punta Cana, Dominican Republic? Look no further than Greece Weddings, your trusted partner in creating extraordinary experiences.'
        className="uppercase"
      />
      <TextComponent
        paragraph='We specialize in crafting exceptional weddings, social events, and photo sessions for tourists visiting Punta Cana. With our expertise and attention to detail, we ensure that every moment of your special occasion is filled with beauty, joy, and cherished memories.'
        className=""
      />
      <TextComponent
        paragraph="Begin your journey towards an extraordinary celebration by exploring our website and discovering our services. Take a look at our portfolio of stunning venues and browse through the remarkable moments we've captured for our clients. Contact us today to schedule a consultation, and let's start planning your dream wedding, social event, or photo session in beautiful Punta Cana."
        className=""
      />
      <div className="flex justify-center items-center">
        <button className="w-32 lg:w-36 text-xs bg-black hover:opacity-75 text-white py-4 px-3 lg:py-5 lg:px-4 rounded-sm mt-10 md:mt-12 uppercase font-bold">
          <Link to="/contact">Find out More</Link>
        </button>
      </div>
    </div>
  )
}

export default IndexInformation
