import React from "react"
// import styled from "styled-components"
import Heading from "../components/UI/heading"

import {
  Contained,
  StyledSection,
  Wrapper,
} from "../components/layout/elements"

const Portfolio = () => {
  return (
    <StyledSection id="portfolio">
      <Contained>
        <Wrapper>
          <Heading
            title="Portfolio"
            subtitle="Sneak peak what I've been doing lately"
          />
        </Wrapper>
      </Contained>
    </StyledSection>
  )
}

export default Portfolio
