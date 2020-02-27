import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LogoNavbar = ({ setMenuOpened }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logo/logoNavbar.png" }) {
        childImageSharp {
          fixed(height: 35, quality: 80) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return <Img fixed={data.file.childImageSharp.fixed} />
}

export default LogoNavbar
