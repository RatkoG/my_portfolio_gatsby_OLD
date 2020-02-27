import React from "react"
import styled from "styled-components"
// import logo from "../images/backgroundPhoto.png"

import {
  StyledSection,
  Contained,
  Wrapper,
} from "../components/layout/elements"

const SmallWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`

const Title = styled.h1`
  font-weight: 600;
  margin: 0;
  margin-bottom: 2rem;
  line-height: 1.3;
  font-size: 7rem;
  color: white;
  transition: color 0.2s ease-out;

  & span {
    font-weight: 600;
    color: blue;
    transition: color 0.2s ease-out;
  }
  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 6rem;
  }
  @media ${props => props.theme.mediaQueries.small} {
    font-size: 4.5rem;
  }
  @media ${props => props.theme.mediaQueries.smaller} {
    font-size: 3.5rem;
  }
`
const SubTitle = styled.h2`
  color: white;
  font-weight: 400;
  margin: 0;
  margin-bottom: 7rem;
  font-size: 1.8rem;
  transition: color 0.2s ease-out;

  & span {
    font-weight: 600;
    width: 110px;
    position: relative;
    display: inline-block;
    text-align: center;
    font-style: italic;
    color: blue;
    transition: color 0.2s ease-out;
  }
  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 1.7rem;
  }
  @media ${props => props.theme.mediaQueries.small} {
    font-size: 1.6rem;
  }
  @media ${props => props.theme.mediaQueries.smaller} {
    font-size: 1.5rem;
  }
`

const Home = () => {
  return (
    <StyledSection fullHeight id="header">
      {/* <img src={logo} /> */}
      <Contained>
        <Wrapper>
          <SmallWrapper>
            <Title>Hi! I'm Ratko.</Title>
            <SubTitle>
              A <span>self-taught</span> Front-end developer
              <br />I create awesome modern websites trough carefully crafted
              code
            </SubTitle>
          </SmallWrapper>
        </Wrapper>
      </Contained>
    </StyledSection>
  )
}

export default Home
