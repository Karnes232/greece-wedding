import React from "react"
import { Sidebar, menuClasses, Menu, MenuItem, SubMenu } from "react-pro-sidebar"
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
          <SubMenu 
            className="hamburger" 
            label="Services" 
            rootStyles={{
              ['& > .' + menuClasses.button]: {
                backgroundColor: 'rgb(0, 0, 0, 0.9)',
                color: '#9f0099',
                '&:hover': {
                  backgroundColor: 'rgb(0, 0, 0, 0.9)!important',
                },
              },
              ['.' + menuClasses.subMenuContent]: {
                backgroundColor: 'rgb(0, 0, 0, 0.9)',
              },
            }}
            >
            <MenuItem component={<Link to="/services/weddings" className="hamburger" />}>
              <p className="hamburger">Weddings</p>
            </MenuItem> 
            <MenuItem component={<Link to="/services/events" className="hamburger" />}>
              <p className="hamburger">Events</p>
            </MenuItem>
            <MenuItem component={<Link to="/services/photos" className="hamburger" />}>
              <p className="hamburger">Photos</p>
            </MenuItem>
          </SubMenu>
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
