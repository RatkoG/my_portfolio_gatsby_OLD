import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import {
  ContainedSkew,
  StyledSectionSkew,
  Wrapper,
} from "../components/layout/elements"

import Heading from "../components/UI/heading"

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
`
const StyledStack = styled.h2`
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin-top: 5rem;
  font-size: 2rem;
`
const StyledSvg = styled.div`
  display: block;
  &:hover {
    background: red;
    &::after {
      color: black;
      content: "javascript";
      display: flex;
      justify-content: center;
      /* transform: scale(0); */
      text-transform: capitalize;
      /* transition: transform 0.3s ease 0s; */
    }
  }
`
const About = () => {
  const { aboutMe } = useStaticQuery(graphql`
    {
      aboutMe: file(relativePath: { eq: "aboutMe.md" }) {
        name
        childMarkdownRemark {
          html
        }
      }
    }
  `)

  return (
    <StyledAbout id="about-me">
      <ContainedSkew>
        <Wrapper>
          <Heading title="About me" subtitle="A little more about my self" />
          <StyledText>
            {aboutMe.childMarkdownRemark.html}{" "}
            <StyledStack>
              This is my current stack of languages/techonogies
            </StyledStack>
          </StyledText>
          <StyledSvg>
            <svg
              width="100px"
              height="104px"
              viewBox="0 0 100 104"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#663399"
            >
              <path
                d="M50.003125,0.0290039063 C22.190625,0.0290039063 0.028125,22.884082 0.028125,51.5625 C0.028125,80.240918 22.190625,103.102441 50,103.102441 C77.809375,103.102441 99.975,80.2473633 99.975,51.5657227 C99.975,22.884082 77.815625,0.0290039063 50.003125,0.0290039063 Z M10.890625,52.0136719 L49.56875,91.9004883 C28.271875,91.9004883 10.890625,73.9728516 10.890625,52.0136719 Z M58.696875,91.0045898 L11.7625,42.6035156 C15.665625,24.6758789 31.315625,11.230957 50,11.230957 C62.971875,11.2567383 74.471875,17.7310547 81.65,27.7083984 L81.725,27.8179688 L76.078125,32.7421875 C70.253125,24.0345703 60.63125,18.4045898 49.7375,18.4045898 C49.678125,18.4045898 49.621875,18.4045898 49.5625,18.4045898 L49.571875,18.4045898 C49.5125,18.4045898 49.440625,18.4045898 49.36875,18.4045898 C35.63125,18.4045898 23.946875,27.4795898 19.65,40.1349609 L19.58125,40.3637695 L60.43125,82.4935547 C70.43125,78.9067383 78.246875,69.9477539 80.421875,59.1873047 L63.471875,59.1873047 L63.471875,51.5689453 L89.1125,51.5689453 C89.1125,70.8404297 76.075,86.9762695 58.690625,91.0045898 L58.696875,91.0045898 Z"
                id="Shape"
              ></path>
            </svg>
          </StyledSvg>
        </Wrapper>
      </ContainedSkew>
    </StyledAbout>
  )
}

export default About
