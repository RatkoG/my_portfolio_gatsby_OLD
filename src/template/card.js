import React from "react"
import styled from "styled-components"
import ButtonLink from "../components/UI/buttonLink"
const Wrapper = styled.div`
  background: white;
  width: 60rem;
  border-radius: 3rem;
`
const Image = styled.div`
  background: red;
  height: 30rem;
  position: relative;
  border-radius: 3rem 3rem 0 0;
`
const Stack = styled.div`
  background: green;
  position: absolute;
  bottom: 3rem;
  right: 3rem;
`
const Text = styled.p``

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const PortfolioCard = () => {
  return (
    <Wrapper>
      <Image>
        Photo
        <Stack>Stack</Stack>
      </Image>
      <Text>text</Text>
      <ButtonWrapper>
        <ButtonLink>Code</ButtonLink>
        <ButtonLink>Live</ButtonLink>
      </ButtonWrapper>
    </Wrapper>
  )
}
export default PortfolioCard
