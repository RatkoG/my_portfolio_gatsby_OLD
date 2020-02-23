import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

const StyledLink = styled(Link)`
  font-family: inherit;
  font-weight: 700;
  color: ${props => props.theme.colors.main};
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  &:hover {
    color: ${props => props.theme.colors.mainLight};
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
      smooth={true}
      offset={-50}
    >
      {link}
    </StyledLink>
  )
}

export default NavItem
