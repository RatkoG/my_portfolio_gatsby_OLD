import React from "react"
import styled from "styled-components"

const StyledButton = styled.a`
  cursor: pointer;
  font-size: 1.5rem;
  user-select: none;
  color: rgb(255, 255, 255);
  font-family: inherit;
  font-weight: 400;
  border-radius: 3px;
  padding: 0.7rem 2.5rem;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  background: ${props => props.theme.colors.main};
  text-transform: uppercase;
  text-decoration: none;
  margin-bottom: 7rem;
  letter-spacing: 1.5px;
  transition: all 0.2s ease-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.colors.boxShadow};
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 10px gray;
  }
  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 1rem;
    padding: 1rem 2.5rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    margin-bottom: 5rem;
  }
`

const ButtonLink = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
)
export default ButtonLink
