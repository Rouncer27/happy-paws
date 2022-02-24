import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

import { B1White, Btn1Blue, colors, medWrapper } from "../styles/helpers"

import Facebook from "./Icons/Facebook"
import Instagram from "./Icons/Instagram"

const getData = graphql`
  {
    footerData: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          HomePage {
            footerCompanyWebsite
            footerFacebookUrl
            footerInstagramUrl
            footerLogo {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
          }
        }
      }
    }
  }
`

const Footer = () => {
  const data = useStaticQuery(getData)
  const footerData = data.footerData.template.HomePage
  console.log("FOOTER", footerData)

  const logoDisplay = getImage(
    footerData.footerLogo.localFile.childImageSharp.gatsbyImageData
  )
  const logoAlt = footerData.footerLogo.altText

  return (
    <FooterStyled>
      <div className="wrapper">
        <div className="links">
          <div className="links__website">
            <h3>Vist Our Company Website</h3>
            <a href={footerData.footerCompanyWebsite}>Visit Us</a>
          </div>
          <div className="links__social">
            <p>Social Media</p>
            <ul>
              <StyledIcon>
                <a
                  title="Follow us on Facebook - Link will open in new window"
                  target="_blank"
                  rel="noreferrer"
                  href={footerData.footerFacebookUrl}
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
                  href={footerData.footerInstagramUrl}
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

        <div className="logo">
          <div className="logo__wrappper">
            <GatsbyImage
              image={logoDisplay}
              alt={logoAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
      </div>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  background: linear-gradient(
    to right,
    ${colors.black} 0%,
    ${colors.black} 80%,
    ${colors.white} 80%,
    ${colors.white} 100%
  );

  .wrapper {
    ${medWrapper};
    width: 100%;
    max-width: 100%;
    margin: auto;
    padding: 0;

    @media (min-width: 768px) {
      margin: 0 2rem;
      padding: 0 2rem;
    }
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    padding: 4rem 2rem;
    background-color: ${colors.black};

    @media (min-width: 768px) {
      width: calc(75%);
      padding: 5rem 0;
    }

    &__website {
      width: 100%;
      margin-bottom: 5rem;
      text-align: center;

      @media (min-width: 768px) {
        width: 30%;
        margin-bottom: 0;
        text-align: left;
      }
      h3 {
        ${B1White};
        margin: 0;
        margin-bottom: 1rem;

        text-transform: uppercase;

        @media (min-width: 768px) {
          text-align: left;
        }
      }

      a {
        ${Btn1Blue};
      }
    }

    &__social {
      width: 100%;
      text-align: center;

      @media (min-width: 768px) {
        width: 65%;
        text-align: left;
      }

      p {
        ${B1White};
        margin: 0;
        margin-bottom: 1rem;
        text-transform: uppercase;
      }
    }
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 5rem 12.5rem;
    background-color: ${colors.white};

    @media (min-width: 768px) {
      width: calc(25%);
      padding: 5rem 3rem;
    }

    &__wrappper {
    }
  }
`

const StyledIcon = styled.li`
  display: inline-block;
  margin-right: 1rem;
  margin-left: 1rem;
  cursor: pointer;

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

export default Footer
