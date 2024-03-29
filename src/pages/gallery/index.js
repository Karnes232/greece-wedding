import React, { useState } from "react"
import Layout from "../../components/layout"

import PhotoAlbum from "react-photo-album"

import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Slideshow from "yet-another-react-lightbox/plugins/slideshow"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import photoList from "../../data/pages/galleryPhotos"
import Seo from "../../components/seo"
import { graphql } from "gatsby"

const Index = () => {
  const [index, setIndex] = useState(-1)

  return (
    <Layout>
      <main className="p-2">
        <PhotoAlbum
          photos={photoList}
          layout="rows"
          targetRowHeight={containerWidth => {
            if (containerWidth < 400) return 150
            return 250
          }}
          onClick={({ index }) => setIndex(index)}
        />

        <Lightbox
          slides={photoList}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </main>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query MyQuery {
    allContentfulSeo(filter: {title: {eq: "Photo Gallery Page"}}) {
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
    <link rel="canonical" href="https://greeceeventspc.com/gallery" />
  </>
)}


