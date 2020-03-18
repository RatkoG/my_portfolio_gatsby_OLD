import React from "react"
import styled from "styled-components"
import { animated } from "react-spring"

import NavItems from "../navItems/navItems"
const BackgroundWrapper = styled(animated.div)`
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
`
const Wrapper = styled.div`
  background-image: ${props => props.theme.colors.bgGradient};
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 7rem;
  padding: 2rem 1rem;
`

const SideDrawer = ({ setMenuOpened, ...rest }) => {
  return (
    <BackgroundWrapper {...rest} menuOpened={true}>
      <Wrapper>
        <NavItems mobile clicked={() => setMenuOpened(false)} />
      </Wrapper>
    </BackgroundWrapper>
  )
}
export default SideDrawer
