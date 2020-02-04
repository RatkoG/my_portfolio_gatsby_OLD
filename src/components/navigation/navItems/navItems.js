import React from "react"
import styled from "styled-components"
import NavItem from "./navItem/navItem"

const LINKS = ["About me", "Portfolio", "Contact"]

const StyledNav = styled.nav``

const NavItems = () => {
  return (
    <StyledNav>
      {LINKS.map(link => (
        <NavItem link={link} />
      ))}
    </StyledNav>
  )
}

export default NavItems
