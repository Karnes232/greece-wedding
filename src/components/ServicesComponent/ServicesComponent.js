import React from "react"
import LinksComponent from "./LinksComponent"
import { graphql, useStaticQuery } from "gatsby"
const ServicesComponent = ({ image1, image2, image3 }) => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allContentfulIndexPageServiceComponent {
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
  
const {title1, title2, title3, paragraph1, paragraph2,paragraph3} = (data.allContentfulIndexPageServiceComponent.edges[0].node)
  return (
    <div className="bg-white flex justify-center items-center">
      <div className="max-w-5xl my-10 md:my-20  flex flex-col lg:flex-row justify-center items-center">
        <LinksComponent
          name={title1}
          url="/services/weddings"
          description={paragraph1.paragraph1}
          image={image1}
          textColor="text-black"
        />
        <LinksComponent
          name={title2}
          url="/services/events"
          description={paragraph2.paragraph2}
          image={image2}
          textColor="text-black"
        />
        <LinksComponent
          name={title3}
          url="/services/photos"
          description={paragraph3.paragraph3}
          image={image3}
          textColor="text-black"
        />
      </div>
    </div>
  )
}

export default ServicesComponent
