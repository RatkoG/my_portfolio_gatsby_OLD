import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
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
  @media ${props => props.theme.mediaQueries.small} {
    margin-bottom: 5rem;
  }
`
const StyledSvg = styled.a`
  border: 0.2rem solid ${props => props.theme.colors.main};
  border-radius: 50%;
  margin: 0 1.5rem;
  width: 7rem;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease-out;
  & svg {
    width: 2.5rem;
    fill: ${props => props.theme.colors.main};
  }
  &:hover {
    background: ${props => props.theme.colors.main};
    svg {
      fill: white;
    }
  }
  @media ${props => props.theme.mediaQueries.smallest} {
    margin: 0 0.8rem;
  }
  @media ${props => props.theme.mediaQueries.small} {
    width: 5rem;
    height: 5rem;
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
            codepen
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
        href={site.siteMetadata.social.codepen}
      >
        <Codepen />
      </StyledSvg>
    </StyledWrapper>
  )
}
export default Social
