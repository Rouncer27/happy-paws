import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { B1Black, colors } from "../../../styles/helpers"
import HeroImage from "../common/HeroImage"

const HeroPage = ({ data }) => {
  const bgImg = data.heroPageImage
  const logoDisplay = getImage(
    data.heroPageLogo.localFile.childImageSharp.gatsbyImageData
  )
  const logoAlt = data.heroPageLogo.altText
  return (
    <StyledSection>
      <HeroImage bgImg={bgImg} />
      <div className="hero-content">
        <div className="hero-logo">
          <GatsbyImage
            image={logoDisplay}
            alt={logoAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div
          className="hero-content__container"
          dangerouslySetInnerHTML={{ __html: data.heroPageContent }}
        />
      </div>
      <div className="overlay" />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 5rem;
  height: 30rem;

  @media (min-width: 768px) {
    height: 45rem;
    margin-bottom: 10rem;
  }

  @media (min-width: 1025px) {
    height: 50rem;
    margin-bottom: 15rem;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(46, 46, 46, 0.85);
    z-index: 5;
  }

  .hero-logo {
  }

  .hero-content {
    position: absolute;
    top: 5rem;
    left: 5rem;
    width: 45rem;
    padding: 2rem 4rem;
    background-color: ${colors.white};
    z-index: 10;

    .hero-logo {
      max-width: 19rem;
    }

    &__container {
      width: 100%;
      padding-top: 3rem;

      p {
        ${B1Black};
      }
    }
  }
`

export default HeroPage
