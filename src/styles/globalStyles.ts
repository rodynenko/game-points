import { css } from '@emotion/react'

export const globalStyles = css`
  * { box-sizing: border-box; }

  :root {
    --text-color: #333;
    --outline-color: #45a3e5;
  }

  body {
    font-family: Arial, sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: normal;
    line-height: 1.3;
    color: var(--text-color);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }
`