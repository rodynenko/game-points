import React from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 1rem;
  background-color: transparent;
  border: 1px solid var(--text-color);
  border-radius: 4px;
  box-shadow: none;
  cursor: pointer;
  transition: box-shadow .1s ease-in-out;

  &:active {
    box-shadow: 0 0 5px var(--text-color);
  }
`

export default Button