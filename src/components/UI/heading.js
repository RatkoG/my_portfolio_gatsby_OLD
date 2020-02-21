import React from "react"
import styled from "styled-components"

const HeadingWrapper = styled.div`
  text-align: center;
  margin-bottom: 7rem;
`
const Title = styled.h1`
  font-size: 2.5rem;
  text-transform: uppercase;
  display: block;
  font-weight: 700;
  letter-spacing: 0.1rem;
  margin-bottom: 1rem;
  line-height: 1.15;
  /* color: ${props => props.theme.colors.main}; */
  /* color: ${props => props.FontColor}; */
  color:${props => (props.primary ? props.theme.colors.main : "white")}

`
const SubTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
  color: ${props => props.theme.colors.text};
  font-weight: 400;
`

const Heading = ({ title, subtitle, primary }) => {
  return (
    <HeadingWrapper>
      <Title primary={primary}>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </HeadingWrapper>
  )
}
export default Heading

// fontColor
