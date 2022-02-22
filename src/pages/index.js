import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { H1Orange, H2Grey, B1Black, B2Black, B3Black } from "../styles/helpers"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Typography>
        <h1>Hi people</h1>
        <h2>Hi people</h2>
        <p className="b1">Welcome to your new Gatsby site.</p>
        <p className="b2">Now go build something great.</p>
        <p className="b3">Now go build something great.</p>
      </Typography>
    </Layout>
  )
}

const Typography = styled.div`
  h1 {
    ${H1Orange};
  }

  h2 {
    ${H2Grey};
  }

  .b1 {
    ${B1Black};
  }

  .b2 {
    ${B2Black};
    font-weight: bold;
  }

  .b3 {
    ${B3Black};
  }
`

export default IndexPage
