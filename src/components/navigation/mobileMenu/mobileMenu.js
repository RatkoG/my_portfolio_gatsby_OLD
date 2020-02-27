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
  width: 100%;
  height: 100%;
  display: flex;
`
const Wrapper = styled.div`
  background-image: ${props => props.theme.colors.bgGradient};
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 7rem;
  padding: 2rem 1rem;
  ${({ isMobile }) => (isMobile ? "6rem" : "7rem")};
  transform: ${({ menuOpened }) =>
    menuOpened ? "translateX(100%)" : "translateX(0)"};
  transition: transform 0.3s ease-out;
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
