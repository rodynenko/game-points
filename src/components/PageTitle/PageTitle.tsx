import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'

const PageTitleHeader = styled.h1`
  margin: 0;
  padding: 1rem 0.5rem;
  background-color: var(--color-purple-2);
  color: var(--contrast-color);
  outline: 0;
`

interface PageTitleProps {
  children: React.ReactNode
}

const PageTitle = ({ children }: PageTitleProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    // hack for SPA to notify the user that we are on the page
    titleRef.current?.focus()
  }, [])
  return (
    <PageTitleHeader ref={titleRef} tabIndex={-1}>{children}</PageTitleHeader>
  )
}

export default PageTitle
