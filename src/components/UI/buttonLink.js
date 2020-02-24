import React from "react"
import styled from "styled-components"

const StyledButton = styled.a`
  outline: none;
  background: ${props => props.theme.colors.main};
  color: white;
  margin-bottom: 7rem;
  text-transform: uppercase;
  text-decoration: none;
  font-family: inherit;
  display: flex;
  letter-spacing: 1.5px;
  align-items: center;
  font-weight: 400;
  padding: 8px 40px;
  border-radius: 1.5rem;
  font-size: 1.5rem;
  cursor: pointer;
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
  /* @media ${props => props.theme.mediaQueries.small} {
    padding: 1.2rem 3rem;
  } */
`

const ButtonLink = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
)
export default ButtonLink
