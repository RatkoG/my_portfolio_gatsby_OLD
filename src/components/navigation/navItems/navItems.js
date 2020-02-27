import React from "react"
import styled from "styled-components"
import NavItem from "./navItem/navItem"

const LINKS = ["About me", "Portfolio", "Contact"]

const StyledNav = styled.nav`
  display: flex;
  overflow: hidden;
  flex: 1;
  flex-direction: ${({ mobile }) => (mobile ? "column" : "row")};
  justify-content: ${({ mobile }) => (mobile ? "center" : "flex-end")};
  align-items: center;
`

const NavItems = ({ mobile, clicked }) => {
  return (
    <StyledNav mobile={mobile}>
      {LINKS.map(link => (
        <NavItem key={link} link={link} clicked={clicked} mobile={mobile} />
      ))}
    </StyledNav>
  )
}

export default NavItems
