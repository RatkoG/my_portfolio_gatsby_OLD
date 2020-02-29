import React from "react"

import HamburgerToggler from "./hamburgerToggle"
import SideDrawer from "../mobileMenu/sideDrawer"

const MobileMenu = ({ noShowOnPage, menuOpened, setMenuOpened }) => {
  return noShowOnPage ? null : (
    <>
      <HamburgerToggler
        //Neznam zosto e ova ovde
        menuOpened={menuOpened}
        // onClick={classList.toggle("is-active")}
        // className={menuOpened ? "is-active" : ""}
        toggleChange={() => setMenuOpened(!menuOpened)}
      />
      {menuOpened && <SideDrawer setMenuOpened={() => setMenuOpened(false)} />}
    </>
  )
}

export default MobileMenu
