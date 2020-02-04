import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  display: flex;
  z-index: 8;
  background-color: var(--background);
  position: relative;
  min-height: calc(100vh - 6rem);
  width: 100%;
`

const Home = () => {
  return (
    <StyledSection>
      <h1>Intro Here</h1>
    </StyledSection>
  )
}

export default Home
