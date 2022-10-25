import React from 'react'
import Summary from './Summary'
import { TestProvider } from 'TestProvider'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Summary', () => {
  it('should render normally', () => {
    render(
      <TestProvider>
        <Summary />
      </TestProvider>
    )

    const totalNumberElement = screen.getByLabelText('Total')
    expect(parseInt(totalNumberElement.textContent || '', 10)).toBeGreaterThan(0)
    const bonusNumberElement = screen.getByLabelText('Bonuses')
    expect(bonusNumberElement.textContent).toBe('0')
    const newGameButton = screen.getByRole('button')
  })

  it('should reset the game/state', () => {
    render(
      <TestProvider>
        <Summary />
      </TestProvider>
    )

    const newGameButton = screen.getByRole('button')
    fireEvent(newGameButton, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))
    const totalNumberElement = screen.getByLabelText('Total')
    expect(totalNumberElement.textContent).toBe('0')
  })
})