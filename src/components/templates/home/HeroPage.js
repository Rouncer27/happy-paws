import React, { useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { B1Black, colors } from "../../../styles/helpers"
import HeroImage from "../common/HeroImage"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const HeroPage = ({ data }) => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#page-hero-trigger",
          markers: false,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .fromTo(
        "#page-hero-trigger .hero-page-content",
        {
          autoAlpha: 0,
          y: 200,
          duration: 1,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
        }
      )
  }, [])

  const bgImg = data.heroPageImage
  const logoDisplay = getImage(
    data.heroPageLogo.localFile.childImageSharp.gatsbyImageData
  )
  const logoAlt = data.heroPageLogo.altText
  return (
    <StyledSection id="page-hero-trigger">
      <HeroImage bgImg={bgImg} />
      <div className="hero-content hero-page-content">
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
  height: 55rem;

  @media (min-width: 768px) {
    height: 45rem;
    margin-bottom: 10rem;
  }

  @media (min-width: 1025px) {
    height: 50rem;
    margin-bottom: 10rem;
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

  .hero-content {
    position: absolute;
    top: 5rem;
    right: 2rem;
    left: 2rem;
    padding: 2rem 4rem;
    background-color: ${colors.white};
    z-index: 10;

    @media (min-width: 768px) {
      top: 5rem;
      left: 5rem;
      width: 45rem;
      box-shadow: 0.5rem 0.5rem 0.75rem 0.25rem rgba(0, 0, 0, 0.25);
    }

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
