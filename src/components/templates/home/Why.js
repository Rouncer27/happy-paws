import React, { useEffect } from "react"
import styled from "styled-components"
import { standardWrapper, H1Orange, B1Black } from "../../../styles/helpers"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Why = ({ data }) => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#why-trigger",
          markers: false,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .fromTo(
        "#why-trigger .title",
        {
          autoAlpha: 0,
          x: 150,
          duration: 1,
        },
        {
          autoAlpha: 1,
          x: 0,
          duration: 1,
        }
      )
      .fromTo(
        "#why-trigger .content",
        {
          autoAlpha: 0,
          x: -150,
          duration: 1,
        },
        {
          autoAlpha: 1,
          x: 0,
          duration: 1,
        },
        "start+=0.25"
      )
  }, [])

  return (
    <StyledSection id="why-trigger">
      <div className="wrapper">
        <div className="title">
          <h2>{data.whyTitle}</h2>
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data.whyContent }}
        />
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding-top: 5rem;

  .wrapper {
    ${standardWrapper};
  }

  .title {
    width: 100%;
    @media (min-width: 768px) {
      text-align: center;
    }

    h2 {
      ${H1Orange};
    }
  }

  .content {
    width: 100%;
    padding: 0;

    @media (min-width: 768px) {
      padding: 0 2.5rem;
    }

    @media (min-width: 1025px) {
      padding: 0 5rem;
    }

    p {
      ${B1Black};
    }
  }
`

export default Why
