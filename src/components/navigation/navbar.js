import React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
// import { animated, useSpring, config }

import DesktopMenu from "./desktopMenu"
import LogoNavbar from "../UI/logoNavbar"

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  max-width: 100vw;
  top: 0;
  left: 0;
  z-index: 20;
  padding: 0 2%;
  background: var(--navbar);
  box-shadow: 0 0.5rem 2rem var(--shadow-color);
  transition: background 0.2s ease-out;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  justify-content: space-between;
  height: 7rem;
`

const Navbar = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <LogoNavbar />
        <DesktopMenu />
      </Wrapper>
    </StyledHeader>
  )
}

export default Navbar
