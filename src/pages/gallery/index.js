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
import photos from "../../data/photos"

const Index = () => {
  const [index, setIndex] = useState(-1);
  console.log(photos)
  return (
    <Layout>
      <main className="">
        <PhotoAlbum
          photos={photos}
          layout="rows"
          targetRowHeight={150}
          onClick={({ index }) => setIndex(index)}
        />

        <Lightbox
          slides={photos}
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
