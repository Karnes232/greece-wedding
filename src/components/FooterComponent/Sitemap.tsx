import { Link } from "gatsby"
// import { links } from "../../data/links"
import React from "react"

const Sitemap = () => {
  return (
    <div className="border-b border-gray-500">
      <div className="mx-8 flex flex-col justify-between py-4 md:mx-auto md:max-w-2xl md:flex-row">
        {/* {links.map(link => {
          return (
            <Link to={link.link} key={link.id}>
              <p className="footerSitemap">{link.name}</p>
            </Link>
          )
        })} */}
      </div>
    </div>
  )
}

export default Sitemap
