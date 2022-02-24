import React from "react"
import styled from "styled-components"
import {
  Btn1Blue,
  colors,
  H1Orange,
  H2Black,
  standardWrapper,
} from "../../../styles/helpers"
import Facebook from "../../Icons/Facebook"
import Instagram from "../../Icons/Instagram"

const About = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="title">
          <h2>{data.aboutTitle}</h2>
        </div>
        <div className="content">
          <div dangerouslySetInnerHTML={{ __html: data.aboutContent }} />
        </div>
        <div className="links">
          <a
            className="web-link"
            target="_blank"
            rel="noreferrer"
            href={data.aboutButtonUrl}
          >
            {data.aboutButtonText}
          </a>
          <ul>
            <StyledIcon>
              <a
                title="Follow us on Facebook - Link will open in new window"
                target="_blank"
                rel="noreferrer"
                href={data.aboutFacebookUrl}
              >
                <i>
                  <Facebook />
                  <span className="visuallyhidden">Facebook</span>
                </i>
              </a>
            </StyledIcon>

            <StyledIcon>
              <a
                title="Follow us on Instagram - Link will open in new window"
                target="_blank"
                rel="noreferrer"
                href={data.aboutInstagramUrl}
              >
                <i>
                  <Instagram />
                  <span className="visuallyhidden">Instagram</span>
                </i>
              </a>
            </StyledIcon>
          </ul>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${standardWrapper};
  }

  .title {
    width: 100%;

    h2 {
      ${H1Orange};
    }
  }

  .content {
    width: 100%;

    p {
      ${H2Black};
    }
  }

  .links {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

    a.web-link {
      ${Btn1Blue};
      text-transform: uppercase;
    }

    ul {
      margin-left: 2rem;
    }
  }
`

const StyledIcon = styled.li`
  display: inline-block;
  margin-right: 1rem;
  margin-left: 1rem;

  a {
    display: block;
    position: relative;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;

    @media (min-width: 768px) {
      width: 2rem;
      height: 2rem;
    }
    @media (min-width: 1025px) {
      width: 4rem;
      height: 4rem;
    }

    &:focus {
      outline: 0.4rem solid #003b49;
      transition: outline-width 0.35s ease-in-out;
    }

    .visuallyhidden {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    svg {
      display: block;
      width: 4rem;
      height: 4rem;
      margin: auto;
      transition: all 0.3s ease-out;
      fill: ${colors.colorPrimary};

      @media (min-width: 768px) {
        width: 2rem;
        height: 2rem;
      }
      @media (min-width: 1025px) {
        width: 4rem;
        height: 4rem;
      }

      &:hover {
        fill: ${colors.colorSecondary};
      }
    }
  }
`

export default About
