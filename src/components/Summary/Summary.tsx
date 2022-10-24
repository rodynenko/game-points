import React, { memo } from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { getUserBonuses, getUserTotalScore } from 'redux/selectors/game'
import { resetAction } from 'redux/reducers/gameReducer'
import Button from 'components/Button'

const Summary = memo(() => {
  const bonuses = useSelector(getUserBonuses)
  const totalScore = useSelector(getUserTotalScore)
  const dispatch = useDispatch()
  const onResetClick = () => {
    dispatch(resetAction())
  }
  return (
    <>
      <div>Bonuses: {bonuses}</div>
      <div>Total Score: {totalScore}</div>
      <div>
        <Button onClick={onResetClick}>New game</Button>
      </div>
    </>
  )
})

export default Summary