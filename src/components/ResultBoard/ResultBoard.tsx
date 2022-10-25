import styled from '@emotion/styled'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { selectUserItemsList } from 'redux/selectors/game'

const ResultBoardTable = styled.table`
  text-align: left;
  position: relative;
  border-collapse: collapse;
`

const ResultBoardRow = styled.tr`
  thead & {
    background-color: #eee;
  }

  & + & {
    border-top: 1px dashed #999;
  }
`

const ResultBoardHead = styled.th`
  position: sticky;
  top: 0;
  text-align: center;
  font-weight: 700;
  padding: 1rem 0.5rem;
`

const ResultBoardCol = styled.td`
  text-align: center;
  padding: 0.5rem;
`

const ResultBoard = memo(() => {
  const items = useSelector(selectUserItemsList)
  return (
    <ResultBoardTable>
      <caption className="sr-only">User points:</caption>
      <thead>
        <ResultBoardRow>
          <ResultBoardHead scope="col">Item</ResultBoardHead>
          <ResultBoardHead scope="col">Qty</ResultBoardHead>
          <ResultBoardHead scope="col">Score</ResultBoardHead>
        </ResultBoardRow>
      </thead>
      <tbody>
        {items.map((item) => (
          <ResultBoardRow key={item.key}>
            <ResultBoardCol>{item.label}</ResultBoardCol>
            <ResultBoardCol>{item.amount}</ResultBoardCol>
            <ResultBoardCol>{item.totalPoints}</ResultBoardCol>
          </ResultBoardRow>
        ))}
      </tbody>
    </ResultBoardTable>
  )
})

export default ResultBoard