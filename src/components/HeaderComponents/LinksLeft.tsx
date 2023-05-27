import React from "react"

import { Link } from "gatsby"

const LinksLeft = () => {
  return (
    <div className="hidden lg:flex lg:w-60 lg:justify-between">
      <Link to="/about" className="no-underline">
        <button className="navLinks">About</button>
      </Link>
      <Link to="/services" className="no-underline">
        <button className="navLinks">Services</button>
      </Link>
    </div>
  )
}

export default LinksLeft
