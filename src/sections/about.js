import React from "react"
import rehypeReact from "rehype-react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import {
  ContainedSkew,
  StyledSectionSkew,
  Wrapper,
} from "../components/layout/elements"

import Heading from "../components/UI/heading"
import Svg from "../components/UI/svgComp"

const StyledAbout = styled(StyledSectionSkew)`
  background: white;
`
const StyledText = styled.div`
  color: ${props => props.theme.colors.text};
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 1.8;
  width: 85%;
  margin: 0 auto;
  text-align: center;
  @media ${props => props.theme.mediaQueries.smallest} {
    width: 100%;
    text-align: left;
  }
`
const StyledStack = styled.h2`
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin-top: 5rem;
  font-size: 2rem;
`
const renderAst = new rehypeReact({
  createElement: React.createElement,
  // components: { "my-component": MyComponent }
}).Compiler
const About = () => {
  const { aboutMe } = useStaticQuery(graphql`
    {
      aboutMe: file(relativePath: { eq: "aboutMe.md" }) {
        name
        childMarkdownRemark {
          htmlAst
        }
      }
    }
  `)

  return (
    <StyledAbout id="about-me">
      <ContainedSkew>
        <Wrapper>
          <Heading
            title="About me"
            subtitle="A little more about myself"
            primary
          />
          <StyledText>
            {renderAst(aboutMe.childMarkdownRemark.htmlAst)}
            <StyledStack>
              This is my current stack of languages/techonogies
            </StyledStack>
          </StyledText>
          <Svg />
        </Wrapper>
      </ContainedSkew>
    </StyledAbout>
  )
}

export default About
