import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Heading from "../components/UI/heading"
import PortfolioItem from "../template/card"
import {
  Contained,
  StyledSection,
  Wrapper,
} from "../components/layout/elements"

const PortfolioWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5rem;
  @media ${props => props.theme.mediaQueries.small} {
    grid-template-columns: 1fr;
  }
`

const Portfolio = () => {
  const { allFile: items } = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { eq: "md" }
          sourceInstanceName: { eq: "content" }
          relativePath: { regex: "/portfolio/" }
        }
      ) {
        edges {
          node {
            name
            childMarkdownRemark {
              frontmatter {
                title
                live
                source
                stack
                image {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 80) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
              html
            }
          }
        }
      }
    }
  `)
  return (
    <StyledSection id="portfolio">
      <Contained>
        <Wrapper>
          <Heading
            title="Portfolio"
            primary={false}
            subtitle="Sneak peak what I've been doing lately"
            main={false}
          />
          <PortfolioWrapper>
            {items.edges.map(item => (
              <PortfolioItem
                key={item.node.id}
                portfolio={item.node.childMarkdownRemark}
              />
            ))}
          </PortfolioWrapper>
        </Wrapper>
      </Contained>
    </StyledSection>
  )
}

export default Portfolio
