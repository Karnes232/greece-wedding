import React from "react"
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar"
import { Link } from "gatsby"

const SideBarMenu = ({ toggled, setToggled }) => {
  return (
    <>
      <Sidebar
        backgroundColor="rgb(0, 0, 0, 0.9)"
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="all"
      >
        <Menu className="pt-10 ml-4 h-[95vh] overflow-hidden">
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
        <footer className="hamburger mx-4">Hello</footer>
      </Sidebar>
    </>
  )
}

export default SideBarMenu
