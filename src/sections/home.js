import React from "react"
import styled, { keyframes } from "styled-components"
import Pattern from "../images/svg/pattern.svg"

import {
  StyledSection,
  Contained,
  Wrapper,
} from "../components/layout/elements"

const float = keyframes`
 0% {
      transform: translateY(0);
    }

    65% {
       transform: translateY(2.5rem);
    }

    to {
      transform: translateY(0);
    }
`
const float1 = keyframes`
 0% {
      transform: translateY(0);
    }

    65% {
       transform: translateY(-2.5rem);
    }

    to {
      transform: translateY(0);
    }
`

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

const StyledDiv = styled.div`
  position: absolute;
  height: 50rem;
  width: 50rem;
  z-index: -1;
`
const StyledDivOne = styled(StyledDiv)`
  animation: ${float} 3s ease-in-out infinite;
  right: 1rem;
  top: 3rem;
`
const StyledDivTwo = styled(StyledDiv)`
  animation: ${float1} 3s ease-in-out infinite;
  right: 30rem;
  bottom: 0;
`
const StyledPattern = styled(Pattern)`
  height: 100%;
  width: 100%;
`
const StyledPatternTwo = styled(StyledPattern)`
  transform: rotateY(180deg);
`

const Home = () => {
  return (
    <StyledSection fullHeight id="header">
      <StyledDivOne>
        <StyledPattern />
      </StyledDivOne>
      <StyledDivTwo>
        <StyledPatternTwo />
      </StyledDivTwo>
      <Contained>
        <Wrapper>
          <SmallWrapper>
            <Title>Hi! I'm Ratko.</Title>
            <SubTitle>
              A Front-end developer
              <br />I use code to create things that benefit others
            </SubTitle>
          </SmallWrapper>
        </Wrapper>
      </Contained>
    </StyledSection>
  )
}

export default Home
