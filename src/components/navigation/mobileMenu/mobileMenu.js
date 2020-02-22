import React, { useState } from "react"
import styled from "styled-components"

import HamburgerToggler from "./hamburgerToggle"
import NavItems from "../navItems/navItems"
import SideDrawer from "./sideDrawer"

const BackgroundWrapper = styled.div`
  position: fixed;
  /* background-color: var(--background); */
  z-index: -1;
  top: 0;
  right: 0;
  width: 80%;
  height: 100%;
  display: flex;
`
const Wrapper = styled.div`
  background-color: green;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 6rem;
  padding: 2rem 1rem;
`
// if (props.show) {
//   drawerClasses = 'side-drawer open';
// }
const MobileMenu = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <>
      <HamburgerToggler
        //Neznam zosto e ova ovde
        menuOpened={menuOpened}
        // onClick={classList.toggle("is-active")}
        // className={menuOpened ? "is-active" : ""}
        toggleChange={() => setMenuOpened(!menuOpened)}
      />

      {menuOpened ? (
        <BackgroundWrapper>
          <Wrapper>
            <NavItems mobile clicked={() => setMenuOpened(false)} />
          </Wrapper>
        </BackgroundWrapper>
      ) : null}
    </>
  )
}

export default MobileMenu
