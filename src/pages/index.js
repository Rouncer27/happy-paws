import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/templates/home/Hero"

const IndexPage = props => {
  const { hero, seoInfo } = props.data
  const heroData = hero.template.HomePage

  return (
    <Layout>
      <Seo title="Home" />
      <Hero data={heroData} />
    </Layout>
  )
}

export const homeQuery = graphql`
  {
    # seoInfo: wpPage(slug: { eq: "home" }) {
    #   seoFields {
    #     swbThemeDescription
    #     swbThemeMetaTitle
    #     swbThemeImage {
    #       localFile {
    #         relativePath
    #       }
    #     }
    #   }
    # }
    hero: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          HomePage {
            heroContent
            heroLogo {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1250)
                }
              }
            }
            heroCircleImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1250)
                }
              }
            }
            heroImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
