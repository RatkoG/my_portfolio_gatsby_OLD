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
`
const StyledRowTwo = styled.div`
  display: flex;
  justify-content: space-around;
`
const StyledBox = styled.div`
  /* background: green; */
  text-align: center;
  width: 80px;
  height: 80px;
  &::after{
    color: white;
    font-size:1rem;
    content:'${props => props.text}';
    display: flex;
    justify-content: center;
    margin-top:0.5rem;
    transform: scale(0);
    transition: transform 0.3s ease 0s;
    text-transform: capitalize;
    padding:.5rem 1rem;
    background-color:red;

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
        <StyledBox text="webpack">
          <Webpack />
        </StyledBox>
        <StyledBox text="sass">
          <Sass />
        </StyledBox>
        <StyledBox text="react">
          <Test />
        </StyledBox>
        <StyledBox text="gatsby">
          <GatsbySvg />
        </StyledBox>
        <StyledBox text="javascript">
          <JsSvg />
        </StyledBox>
        <StyledBox text="graphql">
          <GraphSvg />
        </StyledBox>
      </StyledRowOne>
      <StyledRowTwo>
        <StyledBox text="sketch">
          <SketchSvg />
        </StyledBox>
        <StyledBox text="redux">
          <ReduxSvg />
        </StyledBox>
        <StyledBox text="css">
          <CssSvg />
        </StyledBox>
        <StyledBox text="github">
          <GitSvg />
        </StyledBox>
        <StyledBox text="html">
          <HtmlSvg />
        </StyledBox>
        <StyledBox text="css">
          <Css3Svg />
        </StyledBox>
      </StyledRowTwo>
    </StyledDiv>
  )
}
export default Svg
