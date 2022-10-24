import { css } from '@emotion/react'

export const globalStyles = css`
  * { box-sizing: border-box; }

  :root {
    --text-color: #333;
  }

  body {
    font-family: Arial, sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: normal;
    line-height: 1.3;
    color: var(--text-color);
  }
`