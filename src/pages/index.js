import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/templates/home/Hero"
import About from "../components/templates/home/About"
import Why from "../components/templates/home/Why"
import HeroPage from "../components/templates/home/HeroPage"
import Values from "../components/templates/home/Values"
import Gallery from "../components/templates/home/Gallery"
import Positions from "../components/templates/home/Positions"

const IndexPage = props => {
  const {
    seoInfo,
    hero,
    about,
    why,
    heroPage,
    values,
    gallery,
    howToApply,
    positions,
  } = props.data
  const heroData = hero.template.HomePage
  console.log(seoInfo)

  return (
    <Layout>
      <Seo title="Home" />
      <Hero data={heroData} />
      <About data={about.template.HomePage} />
      <Why data={why.template.HomePage} />
      <HeroPage data={heroPage.template.HomePage} />
      <Values data={values.template.HomePage} />
      <Gallery data={gallery.template.HomePage} />
      <Positions
        data={howToApply.template.HomePage}
        positions={positions.edges}
      />
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

    heroPage: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          HomePage {
            heroPageContent
            heroPageLogo {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1250)
                }
              }
            }
            heroPageImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1250)
                }
              }
            }
          }
        }
      }
    }

    values: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          HomePage {
            valuesTitle
            values {
              title
              content
              icon {
                altText
                localFile {
                  url
                  childImageSharp {
                    gatsbyImageData(width: 500)
                  }
                }
              }
            }
          }
        }
      }
    }

    gallery: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          HomePage {
            imageGalleryLeft {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }

            imageGalleryCenterTop {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }

            imageGalleryCenterBottom {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }

            imageGalleryRightTopSmallOne {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }

            imageGalleryRightTopSmallTwo {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }

            imageGalleryRightTopSmallThree {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }

            imageGalleryRightBottom {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
          }
        }
      }
    }

    howToApply: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          HomePage {
            howToApplyTitle
            howToApplyContent
            howToApplyButtonText
            howToApplyEmail
          }
        }
      }
    }

    positions: allWpJobPosting {
      edges {
        node {
          title
          acfJobPostings {
            minimumQualifications
            summaryPosition
          }
        }
      }
    }
  }
`

export default IndexPage
