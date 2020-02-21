import React from "react"
import styled from "styled-components"
import ButtonLink from "../components/UI/buttonLink"
import Img from "gatsby-image"
const Wrapper = styled.div`
  background: white;
  width: 45%;
  border-radius: 3rem;
  margin-bottom: 6rem;
  position: relative;
`
const Image = styled(Img)`
  border-radius: 3rem 3rem 0 0;
`
const Stack = styled.div`
  background: green;
  position: absolute;
  right: 3rem;
  top: 28rem;
`
const Title = styled.h3`
  text-align: center;
  font-size: 2rem;
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

const PortfolioCard = ({ portfolio }) => {
  const { title, live, source, stack, image } = portfolio.frontmatter
  return (
    <Wrapper>
      <Image fluid={image.childImageSharp.fluid} />
      <Stack>
        <span>{stack}</span>
      </Stack>
      <Title>{title}</Title>
      <Text dangerouslySetInnerHTML={{ __html: portfolio.html }}></Text>
      <ButtonWrapper>
        <ButtonStyle target="_blank" href={source} rel="noreferrer">
          Code
        </ButtonStyle>
        <ButtonStyle target="_blank" solid href={live} rel="noreferrer">
          Live
        </ButtonStyle>
      </ButtonWrapper>
    </Wrapper>
  )
}
export default PortfolioCard
