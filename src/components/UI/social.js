import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
// TODO: IMPORT THEM TOGETHER
import GitHub from "../../images/svg/github.svg"
import Instagram from "../../images/svg/instagram.svg"
import LinkedIn from "../../images/svg/linkedin.svg"
import Codepen from "../../images/svg/codepen.svg"
import Twitter from "../../images/svg/twitter.svg"

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7rem;
`
const StyledSvg = styled.a`
  border: 0.2rem solid ${props => props.theme.colors.main};
  fill: ${props => props.theme.colors.main};
  border-radius: 50%;
  margin: 0 1.5rem;
  width: 7rem;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease-out;
  & > svg {
    width: 2.5rem;
  }
  &:hover {
    fill: white;
    background: ${props => props.theme.colors.main};
    transform: scale(1.2);
  }
`

const Social = () => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          social {
            twitter
            instagram
            linkedin
            github
          }
        }
      }
    }
  `)

  return (
    <StyledWrapper>
      <StyledSvg
        target="_blank"
        aria-label="Github"
        href={site.siteMetadata.social.github}
      >
        <GitHub />
      </StyledSvg>
      <StyledSvg
        target="_blank"
        aria-label="Linkedin"
        href={site.siteMetadata.social.linkedin}
      >
        <LinkedIn />
      </StyledSvg>
      <StyledSvg
        target="_blank"
        aria-label="Instagram"
        href={site.siteMetadata.social.instagram}
      >
        <Instagram />
      </StyledSvg>
      <StyledSvg
        target="_blank"
        aria-label="Twitter"
        href={site.siteMetadata.social.twitter}
      >
        <Twitter />
      </StyledSvg>
      <StyledSvg
        target="_blank"
        aria-label="Codepen"
        href={site.siteMetadata.social.github}
      >
        <Codepen />
      </StyledSvg>
    </StyledWrapper>
  )
}
export default Social
