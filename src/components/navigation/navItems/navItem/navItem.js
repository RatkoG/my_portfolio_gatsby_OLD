import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  font-family: inherit;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 1.5rem;
`

const NavItem = ({ link }) => {
  return (
    <StyledLink
      href={`#${link
        .split(" ")
        .join("-")
        .toLowerCase()}`}
    >
      {link}
    </StyledLink>
  )
}

export default NavItem
