import { colors } from "./index"
import { fontSizer } from "./index"
import { css } from "styled-components"
import fonts from "./fonts"

// Body copy ONE //
export const B1Base = css`
  ${fontSizer(1.6, 2, 76.8, 150, 1.8)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
`

export const B1Black = css`
  ${B1Base};
  color: ${colors.black};
`

export const B1White = css`
  ${B1Base};
  color: ${colors.white};
`

export const B1Blue = css`
  ${B1Base};
  color: ${colors.colorSecondary};
`

// Body copy TWO //
export const B2Base = css`
  ${fontSizer(1.4, 1.9, 76.8, 150, 1.8)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
`

export const B2Black = css`
  ${B2Base};
  color: ${colors.black};
`

export const B2White = css`
  ${B2Base};
  color: ${colors.white};
`

export const B2Blue = css`
  ${B2Base};
  color: ${colors.colorSecondary};
`

// Body copy TWO //
export const B3Base = css`
  ${fontSizer(1.6, 1.8, 76.8, 150, 1.8)};
  font-family: ${fonts.fontSecondary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
`

export const B3Black = css`
  ${B3Base};
  color: ${colors.black};
`

export const B3White = css`
  ${B3Base};
  color: ${colors.white};
`

export const B3Blue = css`
  ${B3Base};
  color: ${colors.colorSecondary};
`
