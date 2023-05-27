import React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Logo = () => {
  return (
    <>
      <div className="flex justify-center items-center overflow-hidden">
        <Link to="/" className="no-underline" aria-label="Home">
          <div className="cursor-pointer flex items-center w-24 h-20 md:w-32 md:h-24 xl:w-64 xl:h-44">
            <StaticImage
              src="../../images/greeceLogo.png"
              loading="eager"
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
          </div>
        </Link>
      </div>
    </>
  )
}

export default Logo
