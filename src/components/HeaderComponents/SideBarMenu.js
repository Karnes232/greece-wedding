import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar"
import { Link } from "gatsby"
import { Bars3Icon } from "@heroicons/react/24/outline"
const SideBarMenu = () => {
    const isSSR = typeof window === "undefined"
    const [toggled, setToggled] = React.useState(false)

  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div />}>
        <Sidebar
          backgroundColor="rgb(0, 0, 0, 0.9)"
          onBackdropClick={() => setToggled(false)}
          toggled={toggled}
          breakPoint="all"
        >
          <Menu className="mt-10 ml-4">
            <MenuItem component={<Link to="/about" className="hamburger" />}>
              <p className="hamburger">About</p>
            </MenuItem>
            <MenuItem component={<Link to="/services" className="hamburger" />}>
              <p className="hamburger">Services</p>
            </MenuItem>
            <MenuItem component={<Link to="/gallery" className="hamburger" />}>
              <p className="hamburger">Gallery</p>
            </MenuItem>
            <MenuItem component={<Link to="/contact" className="hamburger" />}>
              <p className="hamburger">Contact</p>
            </MenuItem>
          </Menu>
        </Sidebar>
        <main className="flex p-3">
          <div>
            <button className="sb-button" onClick={() => setToggled(!toggled)}>
              <Bars3Icon className="h-6" />
            </button>
          </div>
        </main>
        </React.Suspense>
      )}
    </>
  )
}

export default SideBarMenu