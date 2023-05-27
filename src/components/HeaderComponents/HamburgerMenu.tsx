import React from "react"


const SideBarMenu = React.lazy(() =>
  import("./SideBarMenu")
)

const HamburgerMenu = () => {
  
 
  return (
    <>
      <div className="flex h-full lg:hidden">
        <SideBarMenu/>
        
      </div>
    </>
  )
}

export default HamburgerMenu
