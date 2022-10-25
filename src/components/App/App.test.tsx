import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { TestProvider } from 'TestProvider'

test('renders learn react link', () => {
  render(<TestProvider><App /></TestProvider>)
})
