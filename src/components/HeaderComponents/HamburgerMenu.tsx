import React from "react"
import { Bars3Icon } from "@heroicons/react/24/outline"
import loadable from '@loadable/component'
const SideBarMenu = loadable(() => import('./SideBarMenu'))


const HamburgerMenu = () => {
  const [toggled, setToggled] = React.useState(false)
 
  return (
    <>
      <div className="flex h-full lg:hidden">
        <SideBarMenu toggled={toggled} setToggled={setToggled}/>
        <main className="flex p-3">
          <div>
            <button className="sb-button" onClick={() => setToggled(!toggled)}>
              <Bars3Icon className="h-6" />
            </button>
          </div>
        </main>
      </div>
    </>
  )
}

export default HamburgerMenu
