import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Heading from "../components/UI/heading"
// import SEO from "../components/seo"
import {
  Contained,
  StyledSection,
  Wrapper,
} from "../components/layout/elements"
import NotFoundSvg from "../images/PageNotFound.svg"

const StyledLink = styled(Link)`
  cursor: pointer;
  font-size: 1.5rem;
  user-select: none;
  color: ${props => props.theme.colors.main};
  font-family: inherit;
  font-weight: 400;
  border-radius: 3px;
  padding: 0.7rem 2.5rem;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  background: ${props => props.theme.colors.white};
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
const Svg = styled(NotFoundSvg)`
  max-width: 100%;
  height: 30vh;
  margin-bottom: 10rem;
`

const NotFoundPage = () => (
  <Layout noShowOnPage>
    <StyledSection fullHeight>
      <Contained>
        <Wrapper>
          {/* <SEO title="404: Not found" /> */}
          <Heading
            title="Ouch! Page not found"
            subtitle="This page doesn't exist! Please go back..."
          />
          <Svg alt="404 Page not found" />
          <StyledLink to="/">Go Home</StyledLink>
        </Wrapper>
      </Contained>
    </StyledSection>
  </Layout>
)

export default NotFoundPage
