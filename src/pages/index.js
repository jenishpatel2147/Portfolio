import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Projects from "../components/Projects"
import About from "../components/about"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import Background from "../components/Particles"
import Experience from "../components/Experience"
import LottieAnimation from "../components/animation.json"


const IndexPage = () => (
  <Layout>
    <SEO title="Jenish Patel" />
    <Background />
    <Header LottieAnimation={LottieAnimation}></Header>
    <About></About>
    <Experience />
    <Projects></Projects>
    <Promotion></Promotion>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
