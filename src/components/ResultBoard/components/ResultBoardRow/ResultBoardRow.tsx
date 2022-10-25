import React, { useCallback } from 'react'
import styled from '@emotion/styled'
import { ItemKey } from 'types'

interface ResultBoardRowProps {
  label: ItemKey
  amount: number
  totalPoints: number
}

const ResultBoardRowPanel = styled.div`
  display: flex;
`

const ResultBoardRow = ({ label, amount, totalPoints }: ResultBoardRowProps) => {
  return (
    <ResultBoardRowPanel>
      {label} #{amount}
    </ResultBoardRowPanel>
  )
} 

export default ResultBoardRow
