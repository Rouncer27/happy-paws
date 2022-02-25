import React, { useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { B2Black, B3Black, H1Orange, medWrapper } from "../../../styles/helpers"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Values = ({ data }) => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#values-trigger",
          markers: false,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .fromTo(
        "#values-trigger .value-item",
        {
          autoAlpha: 0,
          y: 200,
          duration: 1,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: {
            each: 0.3,
          },
        }
      )
      .fromTo(
        "#values-trigger .value-item .icon",
        {
          rotation: "30deg",
        },
        {
          rotation: "-30deg",
          duration: 1,
          stagger: {
            each: 0.15,
            yoyo: true,
            repeat: -1,
          },
        },
        "start"
      )
  }, [])

  return (
    <SectionStyled id="values-trigger">
      <div className="wrapper">
        <div className="title">
          <h2>{data.valuesTitle}</h2>
        </div>
        <div className="values">
          {data.values.map((value, index) => {
            const iconDisplay = getImage(
              value.icon.localFile.childImageSharp.gatsbyImageData
            )
            return (
              <Value className="value-item" key={index}>
                <div className="icon">
                  <GatsbyImage
                    image={iconDisplay}
                    alt={value.title}
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                  />
                </div>
                <div>
                  <h3>{value.title}</h3>
                </div>
                <div dangerouslySetInnerHTML={{ __html: value.content }} />
              </Value>
            )
          })}
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .title {
    width: 100%;
    text-align: center;

    h2 {
      ${H1Orange};
    }
  }

  .values {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`

const Value = styled.div`
  width: calc(100% - 4rem);
  margin: 2rem;

  @media (min-width: 768px) {
    width: calc(50% - 4rem);
    margin: 2rem;
  }

  @media (min-width: 1025px) {
    width: calc(33.3333% - 6rem);
    margin: 4rem 3rem;
  }

  .icon {
    width: 8rem;
    height: 8rem;
    margin: auto;
    transform: rotate("0deg");
  }

  h3 {
    ${B2Black};
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }

  p {
    ${B3Black};
    text-align: center;
  }
`

export default Values
