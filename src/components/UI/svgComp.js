import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

// TODO: TESTING SVG
import JavaScript from "../../images/svg/javascript.svg"

const StyledDiv = styled.div`
  background: red;
  width: 100%;
  padding: 2rem;
`
const StyledRowOne = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`
const StyledRowTwo = styled.div`
  display: flex;
  justify-content: space-around;
`
const StyledBox = styled.div`
  background: green;
  width: 80px;
  &:hover {
    transform: scale(1.1);
  }
`

const Svg = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "svg" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              id
              original {
                src
              }
              fixed(height: 100, quality: 80) {
                width
              }
            }
            extension
            publicURL
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <StyledDiv>
      <StyledRowOne>
        {data.allFile.edges.map(edge => {
          return <StyledBox>{edge.node.publicURL}</StyledBox>
        })}
      </StyledRowOne>
      <StyledRowTwo>
        <StyledBox></StyledBox>
        <StyledBox>
          <JavaScript />
        </StyledBox>
        <StyledBox />
        <StyledBox />
        <StyledBox />
        <StyledBox />
      </StyledRowTwo>
    </StyledDiv>
  )
}
export default Svg
