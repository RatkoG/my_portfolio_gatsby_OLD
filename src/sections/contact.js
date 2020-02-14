import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import {
  Contained,
  StyledSection,
  Wrapper,
} from "../components/layout/elements"
import Heading from "../components/UI/heading"
import ButtonLink from "../components/UI/buttonLink"
import Social from "../components/UI/social"
// TODO:Remove or fix it or rename it
const WhiteSection = styled(StyledSection)`
  background: white;
`
const CopyRight = styled.p`
  font-weight: 700;
  margin: 0;
  font-size: 1rem;
  color: black;
  text-transform: uppercase;
`

const Contact = () => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        id
        siteMetadata {
          social {
            email
          }
        }
      }
    }
  `)
  return (
    <WhiteSection id="contact">
      <Contained>
        <Wrapper>
          <Heading
            title="Contact me"
            subtitle="Have a question or want to work together ?"
          />
          <ButtonLink href={`mailto:${site.siteMetadata.social.email}`}>
            Send me a message
          </ButtonLink>
          <Social />
          <CopyRight>
            Copyright &copy; {new Date().getFullYear}, Ratko Gjurichanin
          </CopyRight>
        </Wrapper>
      </Contained>
    </WhiteSection>
  )
}

export default Contact
