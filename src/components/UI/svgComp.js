import React from "react"
import styled from "styled-components"

// TODO: TESTING SVG
import JsSvg from "../../images/svg/javascript.svg"
import Webpack from "../../images/svg/webpack.svg"
import Sass from "../../images/svg/sass.svg"
import GatsbySvg from "../../images/svg/gatsby.svg"
import Test from "../../images/svg/reacttttt.svg"
import GraphSvg from "../../images/svg/graphql.svg"
import SketchSvg from "../../images/svg/sketch.svg"
import ReduxSvg from "../../images/svg/redux.svg"
import CssSvg from "../../images/svg/css.svg"
import GitSvg from "../../images/svg/github.svg"
import HtmlSvg from "../../images/svg/html5.svg"
import Css3Svg from "../../images/svg/css3.svg"
const StyledDiv = styled.div`
  /* background: red; */
  width: 100%;
  padding: 2rem;
  margin-bottom: 4rem;
`
const StyledRowOne = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
  @media ${props => props.theme.mediaQueries.small} {
    flex-wrap: wrap;
    margin-bottom: 0;
  }
`
const StyledRowTwo = styled.div`
  display: flex;
  justify-content: space-around;
  @media ${props => props.theme.mediaQueries.small} {
    flex-wrap: wrap;
  }
`
const StyledBox = styled.div`
  /* background: green; */
  text-align: center;
  width: 8rem;
  height: 8rem;
  @media ${props => props.theme.mediaQueries.small} {
    flex: 1 0 30%;
    margin-bottom: 4rem;
  }
  &::after{
    color: white;
    font-size:1rem;
    content:'${props => props.text}';
    display:inline-block;
    margin-top:0.5rem;
    transform: scale(0);
    transition: transform 0.3s ease 0s;
    text-transform: capitalize;
    padding:.5rem 1rem;
    background-color:${props => props.fill || "#000000"};

  }
  &:hover ::after {
    transform: scale(1.1);

    }

  & svg {
    width: 100%;
    height: 100%;
  }
`

const Svg = () => {
  return (
    <StyledDiv>
      <StyledRowOne>
        <StyledBox text="webpack" fill="#8DD6F9">
          <Webpack />
        </StyledBox>
        <StyledBox text="sass" fill="#CC6699">
          <Sass />
        </StyledBox>
        <StyledBox text="react" fill="#61DAFB">
          <Test />
        </StyledBox>
        <StyledBox text="gatsby" fill="#663399">
          <GatsbySvg />
        </StyledBox>
        <StyledBox text="javascript" fill="#F7DF1E">
          <JsSvg />
        </StyledBox>
        <StyledBox text="graphql" fill="#E10098">
          <GraphSvg />
        </StyledBox>
      </StyledRowOne>
      <StyledRowTwo>
        <StyledBox text="sketch" fill="#F7B500">
          <SketchSvg />
        </StyledBox>
        <StyledBox text="redux" fill="#764ABC">
          <ReduxSvg />
        </StyledBox>
        <StyledBox text="css">
          <CssSvg />
        </StyledBox>
        <StyledBox text="github">
          <GitSvg />
        </StyledBox>
        <StyledBox text="html" fill="#E34F26">
          <HtmlSvg />
        </StyledBox>
        <StyledBox text="css" fill="#1572B6">
          <Css3Svg />
        </StyledBox>
      </StyledRowTwo>
    </StyledDiv>
  )
}
export default Svg
