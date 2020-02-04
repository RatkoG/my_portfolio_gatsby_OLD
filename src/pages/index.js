import React from "react"

import Layout from "../components/layout/layout"
import Home from "../sections/home"
// import Image from "../components/image"
// import SEO from "../components/seo"
import Navbar from "../components/navigation/navbar"
import About from "../sections/about"
import Portfolio from "../sections/portfolio"
import Contact from "../sections/contact"
const IndexPage = () => {
  return (
    <Layout>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </Layout>
  )
}

export default IndexPage
