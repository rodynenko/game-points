import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'

const PageTitleHeader = styled.h1`
  border-bottom: 1px solid var(--text-color);
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
