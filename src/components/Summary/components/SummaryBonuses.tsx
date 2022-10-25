import React, { memo } from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { getUserBonuses } from 'redux/selectors/game'
import { commonSummaryBox } from '../styles'

const SummaryBonusesWrapper = styled.div`
  ${commonSummaryBox}
  width: 100%;
  border-top: 1px solid var(--text-color);
  font-size: 1.5rem;

  span + span {
    margin-left: 1rem;
  }
`

const id = 'summary-bonus-points'

const SummaryBonuses = memo(() => {
  const bonuses = useSelector(getUserBonuses)
  return (
    <SummaryBonusesWrapper>
      <span id={id}>Bonuses</span>
      <span aria-labelledby={id}>{bonuses}</span>
    </SummaryBonusesWrapper>
  )
})

export default SummaryBonuses
