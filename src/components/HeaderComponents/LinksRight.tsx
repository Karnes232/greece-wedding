import React from "react"

import { Link } from "gatsby"

const LinksRight = () => {
  return (
    <div className="hidden lg:flex lg:w-60 lg:justify-between">
      <Link to="/gallery" className="no-underline">
        <button className="navLinks">Gallery</button>
      </Link>
      <Link to="/contact" className="no-underline">
        <button className="navLinks">contact</button>
      </Link>
    </div>
  )
}

export default LinksRight
