import React, { useState } from "react"
import styled from "styled-components"

import HamburgerToggler from "./hamburgerToggle"
import NavItems from "../navItems/navItems"

const BackgroundWrapper = styled.div`
  background-color: red;
  position: fixed;
  /* background-color: var(--background); */
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
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
const MobileMenu = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <>
      <HamburgerToggler
        menuOpened={menuOpened}
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
