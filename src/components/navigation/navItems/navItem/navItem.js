import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

const StyledLink = styled(Link)`
  font-family: inherit;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 1.5rem;
`

const NavItem = ({ link, clicked }) => {
  return (
    <StyledLink
      onClick={clicked}
      href={`#${link
        .split(" ")
        .join("-")
        .toLowerCase()}`}
      spy={true}
      smooth={true}
    >
      {link}
    </StyledLink>
  )
}

export default NavItem
