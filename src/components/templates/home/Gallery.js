import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { medWrapper } from "../../../styles/helpers"

import ellipse from "../../../images/ellipse.png"

const Gallery = ({ data }) => {
  console.log("gallery", data)

  const imgLeftDisplay = getImage(
    data.imageGalleryLeft.localFile.childImageSharp.gatsbyImageData
  )
  const imgLeftAlt = data.imageGalleryLeft.altText

  const imgCenterTopDisplay = getImage(
    data.imageGalleryCenterTop.localFile.childImageSharp.gatsbyImageData
  )
  const imgCenterTopAlt = data.imageGalleryCenterTop.altText

  const imgCenterBottomDisplay = getImage(
    data.imageGalleryCenterBottom.localFile.childImageSharp.gatsbyImageData
  )
  const imgCenterBottomAlt = data.imageGalleryCenterBottom.altText

  const imgRightTopOneDisplay = getImage(
    data.imageGalleryRightTopSmallOne.localFile.childImageSharp.gatsbyImageData
  )
  const imgRightTopOneAlt = data.imageGalleryRightTopSmallOne.altText

  const imgRightTopTwoDisplay = getImage(
    data.imageGalleryRightTopSmallTwo.localFile.childImageSharp.gatsbyImageData
  )
  const imgRightTopTwoAlt = data.imageGalleryRightTopSmallTwo.altText

  const imgRightTopThreeDisplay = getImage(
    data.imageGalleryRightTopSmallThree.localFile.childImageSharp
      .gatsbyImageData
  )
  const imgRightTopThreeAlt = data.imageGalleryRightTopSmallThree.altText

  const imgRightBottomDisplay = getImage(
    data.imageGalleryRightBottom.localFile.childImageSharp.gatsbyImageData
  )
  const imgRightBottomAlt = data.imageGalleryRightBottom.altText

  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="images-left">
          <div>
            <GatsbyImage
              image={imgLeftDisplay}
              alt={imgLeftAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
        <div className="images-center">
          <div className="images-center__container--top">
            <DivStyled>
              <GatsbyImage
                image={imgCenterTopDisplay}
                alt={imgCenterTopAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </DivStyled>
          </div>

          <div className="images-center__container--bottom">
            <DivStyled>
              <GatsbyImage
                image={imgCenterBottomDisplay}
                alt={imgCenterBottomAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </DivStyled>
          </div>
        </div>
        <div className="images-right">
          <div className="images-right__small images-right__small--topone">
            <DivStyled>
              <GatsbyImage
                image={imgRightTopOneDisplay}
                alt={imgRightTopOneAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </DivStyled>
          </div>

          <div className="images-right__small images-right__small--toptwo">
            <DivStyled>
              <GatsbyImage
                image={imgRightTopTwoDisplay}
                alt={imgRightTopTwoAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </DivStyled>
          </div>
          <div className="images-right__small images-right__small--topthree">
            <DivStyled>
              <GatsbyImage
                image={imgRightTopThreeDisplay}
                alt={imgRightTopThreeAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </DivStyled>
          </div>
          <div className="images-right__bottom">
            <DivStyled>
              <GatsbyImage
                image={imgRightBottomDisplay}
                alt={imgRightBottomAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </DivStyled>
          </div>
        </div>
      </div>
      <div className="ellipse-graphic">
        <img src={ellipse} alt="" />
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  position: relative;

  .wrapper {
    ${medWrapper};
  }

  .images-left {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(40%);
    }
  }

  .images-center {
    position: relative;
    width: 100%;

    @media (min-width: 768px) {
      width: calc(20% - 1.8rem);
      margin-left: 1.8rem;
    }

    &__container--top {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 23rem;
    }

    &__container--bottom {
      position: absolute;
      top: 25rem;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }

  .images-right {
    position: relative;
    width: 100%;

    @media (min-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: calc(40% - 1.8rem);
      margin-left: 1.8rem;
    }

    &__small {
      width: 33.333333%;
      height: 12.5rem;
      margin-bottom: 1.8rem;

      &--topone {
        position: absolute;
        top: 0;
        left: 0;
      }

      &--toptwo {
        position: absolute;
        top: 0;
        left: 33.333333%;
      }

      &--topthree {
        position: absolute;
        top: 0;
        left: 66.666666%;

        .gatsby-image-wrapper {
          top: 1.5rem;
          right: 1.5rem;
          bottom: 1.5rem;
          left: 1.5rem;
          width: auto;
          height: auto;
        }
      }
    }

    &__bottom {
      position: absolute;
      top: 14rem;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }

  .ellipse-graphic {
    position: absolute;
    bottom: -5rem;
    left: -5rem;
    width: 27rem;
    height: 27rem;
    z-index: -1;
  }
`

const DivStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .gatsby-image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export default Gallery
