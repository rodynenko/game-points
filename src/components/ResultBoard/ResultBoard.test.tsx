import React from 'react'
import { render } from '@testing-library/react'
import { TestProvider } from 'TestProvider'
import ResultBoard from './index'

describe('ResultBoard', () => {
  it('render normally', () => {
    render(
      <TestProvider>
        <ResultBoard />
      </TestProvider>
    )
  })
})