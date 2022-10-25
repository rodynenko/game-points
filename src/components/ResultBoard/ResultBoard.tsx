import { gameItems } from 'config/gameConfig'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { selectUserItemsList } from 'redux/selectors/game'
import {
  ResultBoardTableWrapper,
  ResultBoardTable,
  ResultBoardCol,
  ResultBoardHead,
  ResultBoardRow,
  ItemLabel
} from './styles'

const ResultBoard = memo(() => {
  const items = useSelector(selectUserItemsList)
  return (
    <ResultBoardTableWrapper>
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
              <ResultBoardCol>
                <ItemLabel color={gameItems[item.key].color}>
                  {item.label}
                </ItemLabel>
              </ResultBoardCol>
              <ResultBoardCol>{item.amount}</ResultBoardCol>
              <ResultBoardCol>{item.totalPoints}</ResultBoardCol>
            </ResultBoardRow>
          ))}
        </tbody>
      </ResultBoardTable>
    </ResultBoardTableWrapper>
  )
})

export default ResultBoard