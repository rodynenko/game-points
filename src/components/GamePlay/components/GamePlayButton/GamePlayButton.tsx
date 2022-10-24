import React, { useCallback } from 'react'
import styled from '@emotion/styled'
import { GameItemKeys } from 'config/gameConfig'
import { useDispatch } from 'react-redux'
import { addNewUserItem } from 'redux/reducers/gameReducer'
import Button from 'components/Button'


interface GamePlayButton {
  itemKey: GameItemKeys
}

const GamePlayButtonBtn = styled(Button)`
  width: 4rem;
  height: 4rem;
`

const GamePlayButton = ({ itemKey }: GamePlayButton) => {
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(addNewUserItem(itemKey))
  }

  return (
    <GamePlayButtonBtn onClick={onClick}>
      {itemKey.toUpperCase()}
    </GamePlayButtonBtn>
  )
} 

export default GamePlayButton
