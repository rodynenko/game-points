import React from 'react'
import styled from '@emotion/styled'

const PageTitleHeader = styled.h1`
  border-bottom: 1px solid var(--text-color);
`

interface PageTitleProps {
  children: React.ReactNode
}

const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <PageTitleHeader>{children}</PageTitleHeader>
  )
}

export default PageTitle
