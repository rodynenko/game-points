import React, { memo } from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { getUserTotalScore } from 'redux/selectors/game'
import { commonSummaryBox } from '../styles'

const SummaryTotalScoreWrapper = styled.div`
  ${commonSummaryBox}
  width: 50%;
  span + span {
    margin-left: 1rem;
  }
`

const SummaryTotalScore = memo(() => {
  const totalScore = useSelector(getUserTotalScore)
  return (
    <SummaryTotalScoreWrapper>
      <span>Total</span>
      <span>{totalScore}</span>
    </SummaryTotalScoreWrapper>
  )
})

export default SummaryTotalScore