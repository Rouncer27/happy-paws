import React, { useState } from "react"

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

const Positions = ({ data, positions }) => {
  console.log("positions", positions)

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
                  <button type="button" onClick={() => setActiveIndex(index)}>
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
          <div className="position-display__current">
            <div className="position-display__current--title">
              <h3>{positions[activeIndex].node.title}</h3>
            </div>
            <div className="position-display__current--summary">
              <h4>Summary of Position</h4>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    positions[activeIndex].node.acfJobPostings.summaryPosition,
                }}
              />
            </div>
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
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${standardWrapper};
  }

  .title {
    width: 100%;

    @media (min-width: 1025px) {
      width: calc(65%);
      margin: 2rem 17.5%;
    }

    h2 {
      ${H1Orange};
      margin: 0;
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
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    &__how-to {
      width: 30%;
      padding: 2rem;
      background-color: ${colors.colorPrimary};

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
      width: 70%;
      padding: 0 6rem;

      &--title {
        h3 {
          ${H1Orange};
        }
      }

      &--summary,
      &--qualifications {
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
    color: ${props =>
      props.activeposition ? colors.colorPrimary : colors.black};

    &:hover {
      color: ${colors.colorPrimary};
    }
  }
`

export default Positions
