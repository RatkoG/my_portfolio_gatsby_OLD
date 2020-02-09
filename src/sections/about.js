import React from "react"
import styled from "styled-components"
import {
  ContainedSkew,
  StyledSectionSkew,
  Wrapper,
} from "../components/layout/elements"

const StyledAbout = styled(StyledSectionSkew)`
  background: white;
`

const About = () => {
  return (
    <StyledAbout id="about-me">
      <ContainedSkew>
        <Wrapper></Wrapper>
      </ContainedSkew>
    </StyledAbout>
  )
}

export default About
