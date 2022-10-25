import React from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 1rem;
  background-color: transparent;
  border: 1px solid currentColor;
  color: var(--text-color)
  border-radius: 4px;
  box-shadow: none;
  cursor: pointer;
  transition: box-shadow .1s ease-in-out;
  outline: 0;

  html:not([data-whatintent="touch"]) &:hover {
    box-shadow: 0 0 0 1px currentColor;
  }

  html[data-whatinput="keyboard"] &:focus {
    box-shadow: 0 0 0 2px currentColor;
  }

  &:active {
    box-shadow: 0 0 5px var(--text-color);
  }
`

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const ButtonWrap = ({ type = 'button', ...restProps }: ButtonProps) => (
  <Button type={type} {...restProps} />
)

export default ButtonWrap