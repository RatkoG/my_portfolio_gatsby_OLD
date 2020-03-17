import React from "react"
import styled from "styled-components"
import ButtonLink from "../components/UI/buttonLink"
import Img from "gatsby-image"
import GitSvg from "../images/svg/github.svg"
import LinkSvg from "../images/svg/link.svg"
// import { createElement } from "react"
const Wrapper = styled.div`
  background: white;
  text-align: center;
  /* width: 45%; */
  border-radius: 3rem;
  position: relative;
  box-shadow: ${props => props.theme.colors.cardShadow};
  @media ${props => props.theme.mediaQueries.small} {
    /* width: 80%; */
  }
`
const Image = styled(Img)`
  border-radius: 3rem 3rem 0 0;
`
const Stack = styled.div`
  font-size: 1.5rem;
  background-color: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.heading.white};
  display: inline-block;
  padding: 1rem 2rem;
`
const Title = styled.h3`
  font-size: 2.3rem;
  color: ${props => props.theme.colors.main};
  font-weight: 400;
`
const Text = styled.p`
  text-align: left;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.text};
  font-weight: 400;
  padding: 0 3rem;
  margin-bottom: 2rem;
  line-height: 1.7;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`
const ButtonStyle = styled(ButtonLink)`
  margin-bottom: 2rem;
`

const StyledGitSvg = styled(GitSvg)`
  fill: ${props => props.theme.colors.white};
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
`
const StyledLinkSvg = styled(LinkSvg)`
  fill: ${props => props.theme.colors.white};
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
`

const PortfolioCard = ({ portfolio }) => {
  const { title, live, source, stack, image } = portfolio.frontmatter
  return (
    <Wrapper>
      <Image fluid={image.childImageSharp.fluid} />
      <Title>{title}</Title>
      <Stack className="stacks">
        <span>{stack}</span>
      </Stack>
      <Text dangerouslySetInnerHTML={{ __html: portfolio.html }}></Text>
      <ButtonWrapper>
        <ButtonStyle target="_blank" href={source} rel="noreferrer">
          <StyledGitSvg />
          Source
        </ButtonStyle>
        <ButtonStyle target="_blank" solid href={live} rel="noreferrer">
          <StyledLinkSvg />
          Visit
        </ButtonStyle>
      </ButtonWrapper>
    </Wrapper>
  )
}
export default PortfolioCard
