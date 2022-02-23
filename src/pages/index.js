import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/templates/home/Hero"
import About from "../components/templates/home/About"
import Why from "../components/templates/home/Why"

const IndexPage = props => {
  const { seoInfo, hero, about, why } = props.data
  const heroData = hero.template.HomePage

  return (
    <Layout>
      <Seo title="Home" />
      <Hero data={heroData} />
      <About data={about.template.HomePage} />
      <Why data={why.template.HomePage} />
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

    about: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          HomePage {
            aboutTitle
            aboutContent
            aboutButtonText
            aboutButtonUrl
            aboutFacebookUrl
            aboutInstagramUrl
          }
        }
      }
    }

    why: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          HomePage {
            whyTitle
            whyContent
          }
        }
      }
    }
  }
`

export default IndexPage
