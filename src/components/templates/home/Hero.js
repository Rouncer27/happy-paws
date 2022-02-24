import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { colors, H1Orange } from "../../../styles/helpers"
import HeroImage from "../common/HeroImage"

const Hero = ({ data }) => {
  const bgImg = data.heroImage
  const logoDisplay = getImage(
    data.heroLogo.localFile.childImageSharp.gatsbyImageData
  )
  const logoAlt = data.heroLogo.altText

  const circleDisplay = getImage(
    data.heroCircleImage.localFile.childImageSharp.gatsbyImageData
  )
  const circleAlt = data.heroCircleImage.altText
  return (
    <StyledSection>
      <HeroImage bgImg={bgImg} />
      <div className="hero-logo">
        <GatsbyImage
          image={logoDisplay}
          alt={logoAlt}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
        />
      </div>
      <div className="hero-content">
        <div className="hero-content__main">
          <h2 dangerouslySetInnerHTML={{ __html: data.heroContent }} />
        </div>
      </div>

      <div className="hero-circle">
        <GatsbyImage
          image={circleDisplay}
          alt={circleAlt}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
        />
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 45rem;

  @media (min-width: 768px) {
    height: 45rem;
  }

  @media (min-width: 1025px) {
    height: 65rem;
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
    position: absolute;
    top: 0;
    left: 10%;
    width: 15rem;
    height: 15rem;
    padding: 3.5rem;
    background-color: ${colors.white};
    z-index: 10;

    @media (min-width: 768px) {
      width: 15rem;
      height: 15rem;
    }

    @media (min-width: 1025px) {
      width: 25rem;
      height: 25rem;
    }
  }

  .hero-circle {
    position: absolute;
    top: 2rem;
    right: 5%;
    width: 17.5rem;
    height: 17.5rem;
    border-radius: 50%;
    box-shadow: 0.5rem 0.5rem 0.5rem 0.25rem rgba(0, 0, 0, 0.4);
    overflow: hidden;
    z-index: 10;

    @media (min-width: 768px) {
      top: 5rem;
      width: 30rem;
      height: 30rem;
    }

    @media (min-width: 1025px) {
      top: 10rem;
      width: 55rem;
      height: 55rem;
    }
  }

  .hero-content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    padding: 2.5rem;
    transform: translate(-50%, 0%);
    z-index: 100;
    text-align: center;

    @media (min-width: 768px) {
      display: block;
      top: auto;
      bottom: 12.5rem;
      left: 10%;
      width: 45rem;
      padding: 0;
      transform: translate(0, 0);
      text-align: left;
    }

    @media (min-width: 1025px) {
      bottom: 20rem;
    }

    &__main {
      h2 {
        ${H1Orange};
        margin: 0;
      }
    }
  }
`

export default Hero
