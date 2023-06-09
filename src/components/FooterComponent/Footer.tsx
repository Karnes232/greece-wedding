import React from "react"
import Copyright from "./Copyright"
import Sitemap from "./Sitemap"
import SocialMedia from "./SocialMedia"

const Footer = () => {
  return (
    <footer className="border-b bg-black shadow-sm w-screen">
      <div className="mx-5 flex max-w-6xl flex-col justify-between xl:mx-auto">
        <SocialMedia classes="border-b border-gray-500 md:border-none" />
        <Sitemap />
        <div className="flex flex-col justify-between md:flex-row">
          <Copyright />
        </div>
      </div>
    </footer>
  )
}

export default Footer
