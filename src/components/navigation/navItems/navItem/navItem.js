import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

const StyledLink = styled(Link)`
  font-family: inherit;
  font-weight: 700;
  color: red;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  &:hover {
    color: green;
  }
  &.active {
    color: yellow;
  }
`

const NavItem = ({ link, clicked }) => {
  return (
    <StyledLink
      onClick={clicked}
      to={`${link
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
