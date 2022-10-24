import { render, screen } from '@testing-library/react'
import React from 'react'
import PageTitle from './index'

describe('PageTitle', () => {
  it('render normally', () => {
    const title = 'Title'
    render(<PageTitle>{title}</PageTitle>)

    const header = screen.getByRole('heading')
    expect(header.textContent).toBe(title)
  })
})
