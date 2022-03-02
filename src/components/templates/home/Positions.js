import React, { useState } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import styled from "styled-components"
import {
  B1Black,
  B1White,
  B3Black,
  Btn1Black,
  colors,
  H1Orange,
  H1White,
  H2Black,
  standardWrapper,
} from "../../../styles/helpers"

import backgroundpatteren from "../../../images/background-pattern.png"

const Positions = ({ data, positions }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h2>Current Available Positions</h2>
          <p>
            Click a position to learn more about what we are currently looking
            for.
          </p>
        </div>
        <div className="positions-list">
          <ul>
            {positions.map((position, index) => {
              console.log(position)
              return (
                <ListItem activeposition={index === activeIndex} key={index}>
                  <span>{position.node.title}</span>{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setActiveIndex(index)
                      scrollTo("#current-position")
                    }}
                  >
                    Learn More
                  </button>
                </ListItem>
              )
            })}
          </ul>
        </div>
        <div className="position-display">
          <div className="position-display__how-to">
            <h3>{data.howToApplyTitle}</h3>
            <div dangerouslySetInnerHTML={{ __html: data.howToApplyContent }} />
            <div>
              <a href={`mailto: ${data.howToApplyEmail}`}>
                {data.howToApplyButtonText}
              </a>
            </div>
          </div>
          <div id="current-position" className="position-display__current">
            <div className="position-display__current--title">
              <h3>{positions[activeIndex].node.title}</h3>
            </div>
            {positions[activeIndex].node.acfJobPostings.summaryPosition ? (
              <div className="position-display__current--summary">
                <h4>What we are looking for?</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      positions[activeIndex].node.acfJobPostings
                        .summaryPosition,
                  }}
                />
              </div>
            ) : null}

            {positions[activeIndex].node.acfJobPostings.whatWeOffer ? (
              <div className="position-display__current--qualifications">
                <h4>What do we offer you?</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      positions[activeIndex].node.acfJobPostings.whatWeOffer,
                  }}
                />
              </div>
            ) : null}

            {positions[activeIndex].node.acfJobPostings
              .minimumQualifications ? (
              <div className="position-display__current--qualifications">
                <h4>Minimum Qualifications</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      positions[activeIndex].node.acfJobPostings
                        .minimumQualifications,
                  }}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="background-patteren" />
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  position: relative;
  z-index: 5;

  .wrapper {
    ${standardWrapper};
  }

  .background-patteren {
    position: absolute;
    top: -15rem;
    right: -2rem;
    left: -2rem;
    height: 67.5rem;
    background-image: url(${backgroundpatteren});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    z-index: -1;
  }

  .title {
    width: 100%;

    @media (min-width: 1025px) {
      width: calc(65%);
      margin: 2rem 17.5%;
    }

    h2 {
      ${H1Orange};

      @media (min-width: 768px) {
        margin: 0;
      }
    }

    p {
      ${B1Black};
    }
  }

  .positions-list {
    width: 100%;

    @media (min-width: 1025px) {
      width: calc(65%);
      margin: 1rem 17.5% 5rem;
    }
  }

  .position-display {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    &__how-to {
      width: 100%;
      margin-top: 2.5rem;
      padding: 2rem;
      background-color: ${colors.colorPrimary};

      @media (min-width: 768px) {
        width: 30%;
        margin-top: 0;
      }

      @media (min-width: 1025px) {
      }

      h3 {
        ${H1White};
      }

      p {
        ${B1White};
      }

      a {
        ${Btn1Black};
      }
    }

    &__current {
      width: 100%;
      margin-top: 2.5rem;

      @media (min-width: 768px) {
        width: 70%;
        margin-top: 0;
        padding: 0 6rem;
      }

      @media (min-width: 1025px) {
      }

      &--title {
        h3 {
          ${H1Orange};
        }
      }

      &--summary,
      &--qualifications {
        margin-bottom: 5rem;

        h4 {
          ${H2Black};
        }
        p {
          ${B3Black};
        }
      }
    }
  }
`

const ListItem = styled.li`
  ${B1Black};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${props => console.log(props.activeposition)}

  button {
    text-align: right;
    display: inline-block;
    text-transform: uppercase;
    border: none;
    transition: all 0.3s ease;
    cursor: pointer;
    background-color: transparent;
    color: ${props =>
      props.activeposition ? colors.colorPrimary : colors.black};

    &:hover {
      color: ${colors.colorPrimary};
    }
  }
`

export default Positions
