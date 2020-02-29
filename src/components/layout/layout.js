import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"

import GlobalStyles from "../../utils/global"
import theme from "../../utils/theme"

import Navbar from "../navigation/navbar"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  width: 100%;
`

const StyledMain = styled.main`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Layout = ({ noShowOnPage, children }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Navbar noShowOnPage={noShowOnPage} />
      <StyledMain>{children}</StyledMain>
      {/* <Footer /> */}
      <GlobalStyles />
    </Wrapper>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
