import { css } from "emotion"

export const headerContainer = css`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  padding: 0;
  align-items: start;
  justify-content: space-between;
`

export const headerSide = css`
  padding-left: 24px;

  @media (min-width: 46.25em) {
    .u-1\/2\@tablet {
      width: 50% !important;
    }
  }
`
