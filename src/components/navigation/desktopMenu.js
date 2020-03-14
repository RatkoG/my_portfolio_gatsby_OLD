import React from "react"

import NavItems from "./navItems/navItems"

const DesktopMenu = ({ noShowOnPage }) => {
  return noShowOnPage ? null : (
    <>
      <NavItems />
    </>
  )
}

export default DesktopMenu
