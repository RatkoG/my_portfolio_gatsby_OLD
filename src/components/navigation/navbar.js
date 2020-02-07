import React, { useState, useEffect } from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-scroll"
// import { animated, useSpring, config }

import DesktopMenu from "./desktopMenu"
import MobileMenu from "./mobileMenu/mobileMenu"
import LogoNavbar from "../UI/logoNavbar"

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  max-width: 100vw;
  top: 0;
  left: 0;
  z-index: 20;
  padding: 0 2%;
  background: ${props => props.theme.colors.navbar};
  box-shadow: ${props => props.theme.colors.shadow};
  transition: background 0.2s ease-out;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  justify-content: space-between;
  height: 7rem;
`

const StyledLink = styled(Link)`
  cursor: pointer;
  /* display: flex; */
`

const Navbar = () => {
  const [Mobile, setMobile] = useState(null)

  const changeMobile = () => {
    window.matchMedia("(max-width: 37.5em)").matches
      ? setMobile(true)
      : setMobile(false)
  }
  useEffect(() => {
    changeMobile()
    window.addEventListener("resize", changeMobile)
    return () => window.removeEventListener("resize", changeMobile)
  }, [])

  return (
    <StyledHeader>
      <Wrapper Mobile={Mobile}>
        <StyledLink to="header" smooth={true} offset={-60}>
          <LogoNavbar />
        </StyledLink>
        {Mobile ? <MobileMenu /> : <DesktopMenu />}
      </Wrapper>
    </StyledHeader>
  )
}

export default Navbar
