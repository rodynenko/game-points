import styled from '@emotion/styled'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { selectUserItemsList } from 'redux/selectors/game'
import ResultBoardRow from './components/ResultBoardRow'

const ResultBoardList = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
`

const ResultBoardItem = styled.li`
  width: 100%;
`

const ResultBoard = memo(() => {
  const items = useSelector(selectUserItemsList)
  return (
    <ResultBoardList>
      {items.map((item) => (
        <ResultBoardItem key={item.key}>
          <ResultBoardRow label={item.label} amount={item.amount} totalPoints={item.totalPoints} />
        </ResultBoardItem>
      ))}
    </ResultBoardList>
  )
})

export default ResultBoard