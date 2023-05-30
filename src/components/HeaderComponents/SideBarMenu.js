import React from "react"
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar"
import { Link } from "gatsby"
import SocialMedia from "../FooterComponent/SocialMedia"

const SideBarMenu = ({ toggled, setToggled }) => {
  return (
    <>
      <Sidebar
        backgroundColor="rgb(0, 0, 0, 0.9)"
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="all"
        
      >
      <div className="flex flex-col py-10 h-full justify-between">
        <Menu className="ml-4 overflow-hidden">
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
        <footer className="hamburger mx-4"><SocialMedia/></footer>
        </div>
      </Sidebar>
    </>
  )
}

export default SideBarMenu
