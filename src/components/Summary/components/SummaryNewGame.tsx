import React from 'react'
import { resetAction } from 'redux/reducers/gameReducer'
import { useDispatch } from 'react-redux'
import styled from '@emotion/styled'
import Button from 'components/Button'
import { commonSummaryBox } from '../styles'

const SummaryNewGameWrapper = styled.div`
  ${commonSummaryBox}
  width: 50%;
  justify-content: flex-end;
`

const NewGameButton = styled(Button)`
  padding: 1rem;
  background-color: #ddd;
`

const SummaryNewGame = () => {
  const dispatch = useDispatch()
  const onResetClick = () => {
    dispatch(resetAction())
  }

  return (
    <SummaryNewGameWrapper>
      <NewGameButton onClick={onResetClick}>New game</NewGameButton>
    </SummaryNewGameWrapper>
  )
}

export default SummaryNewGame