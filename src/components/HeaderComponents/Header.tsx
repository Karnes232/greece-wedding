import React from "react"

import Logo from "./Logo"
import LinksRight from "./LinksRight"
import LinksLeft from "./LinksLeft"
import HamburgerMenu from "./HamburgerMenu"

function Header() {
  return (
    // mb-[50vh] md:mb-[40vh] lg:mb-[50vh]
    <nav className="bg-white w-screen border-b border-gray-200">
      <div className="flex items-center justify-between bg-transparent max-w-4xl mx-5 md:mx-10 lg:mx-auto">
        <HamburgerMenu />
        <LinksLeft />

        <Logo />

        <LinksRight />
      </div>
    </nav>
  )
}

export default Header
