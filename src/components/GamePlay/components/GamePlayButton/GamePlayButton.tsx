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
  --button-size: 5rem;
  width: var(--button-size);
  height: var(--button-size);
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
