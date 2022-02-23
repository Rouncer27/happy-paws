import React from "react"
import styled from "styled-components"
import { B2Black, standardWrapper } from "../../../styles/helpers"

const Video = ({ data }) => {
  console.log("Video, ", data)
  return (
    <VideoSection>
      <div className="wrapper">
        <div className="title">
          <h2>{data.videoTitle}</h2>
        </div>
        <div
          className="video-embed"
          dangerouslySetInnerHTML={{ __html: data.videoEmbed }}
        />
      </div>
    </VideoSection>
  )
}

const VideoSection = styled.section`
  margin: 5rem auto;

  .wrapper {
    ${standardWrapper};
  }

  .title {
    width: 100%;
    text-align: center;

    h2 {
      ${B2Black};
      max-width: 42.5rem;
      margin: 0 auto;
    }
  }

  .video-embed {
    width: 100%;
    margin: 4rem auto;
    text-align: center;

    p {
      text-align: center;
    }
  }
`

export default Video
