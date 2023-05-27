import { Link } from "gatsby"
import React from "react"

const Copyright = () => {
  return (
    <div className="mx-8 flex flex-col justify-between py-4 md:flex-row md:items-center md:mx-auto">
      <Link to="/">
        <p className="footerSitemap">
          &copy; {new Date().getFullYear()} Greece Weddings
        </p>
      </Link>
    </div>
  )
}

export default Copyright
