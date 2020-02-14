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
  margin-bottom: 2rem;
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
  &:hover {
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
        <StyledBox>
          <Webpack />
        </StyledBox>
        <StyledBox>
          <Sass />
        </StyledBox>
        <StyledBox>
          <Test />
        </StyledBox>
        <StyledBox>
          <GatsbySvg />
        </StyledBox>
        <StyledBox>
          <JsSvg />
        </StyledBox>
        <StyledBox>
          <GraphSvg />
        </StyledBox>
      </StyledRowOne>
      <StyledRowTwo>
        <StyledBox>
          <SketchSvg />
        </StyledBox>
        <StyledBox>
          <ReduxSvg />
        </StyledBox>
        <StyledBox>
          <CssSvg />
        </StyledBox>
        <StyledBox>
          <GitSvg />
        </StyledBox>
        <StyledBox>
          <HtmlSvg />
        </StyledBox>
        <StyledBox>
          <Css3Svg />
        </StyledBox>
      </StyledRowTwo>
    </StyledDiv>
  )
}
export default Svg
