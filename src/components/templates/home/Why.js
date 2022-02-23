import React from "react"
import styled from "styled-components"
import { standardWrapper, H1Orange, B1Black } from "../../../styles/helpers"

const Why = ({ data }) => {
  return (
    <StyledSection>
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
    text-align: center;

    h2 {
      ${H1Orange};
    }
  }

  .content {
    width: 100%;
    padding: 0 5rem;

    p {
      ${B1Black};
    }
  }
`

export default Why
