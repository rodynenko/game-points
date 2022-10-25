import React from 'react'
import { render } from '@testing-library/react'
import { TestProvider } from 'TestProvider'
import GamePlay from './index'

describe('GamePlay', () => {
  it('render normally', () => {
    render(
      <TestProvider>
        <GamePlay />
      </TestProvider>
    )
  })
})