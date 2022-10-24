import React, { useCallback } from 'react'
import styled from '@emotion/styled'
import { GameItemKeys } from 'config/gameConfig'

interface ResultBoardRowProps {
  label: GameItemKeys
  amount: number
}

const ResultBoardRowPanel = styled.div`
  display: flex;
`

const ResultBoardRow = ({ label, amount }: ResultBoardRowProps) => {
  return (
    <ResultBoardRowPanel>
      {label} #{amount}
    </ResultBoardRowPanel>
  )
} 

export default ResultBoardRow
