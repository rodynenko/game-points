import React from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { resetAction } from 'redux/reducers/gameReducer'
import Button from 'components/Button'
import SummaryTotalScore from './components/SummaryTotalScore'
import SummaryBonuses from './components/SummaryBonuses'
import SummaryNewGame from './components/SummaryNewGame'

const SummaryWrapper = styled.div`
  margin-top: auto;
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
`

const Summary = () => {
  return (
    <SummaryWrapper>
      <SummaryBonuses />
      <SummaryTotalScore />
      <SummaryNewGame />
    </SummaryWrapper>
  )
}

export default Summary