import React from "react"
import styled from "styled-components"
import {
  Contained,
  StyledSection,
  Wrapper,
} from "../components/layout/elements"
import Heading from "../components/UI/heading"
// TODO:Remove or fix it or rename it
const WhiteSection = styled(StyledSection)`
  background: white;
`

const Contact = () => {
  return (
    <WhiteSection fullHeight id="contact">
      <Contained>
        <Wrapper>
          <Heading
            title="Contact me"
            subtitle="Have a question or want to work together ?"
          />
        </Wrapper>
      </Contained>
    </WhiteSection>
  )
}

export default Contact
