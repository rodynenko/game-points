import React from 'react'
import { render } from '@testing-library/react'
import GamePlay from './index'

describe('GamePlay', () => {
  it('render normally', () => {
    render(<GamePlay />)
  })
})