import React, { useCallback } from 'react'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { addNewUserItem } from 'redux/reducers/gameReducer'
import Button from 'components/Button'
import { ItemKey } from 'types'
import { gameItems } from 'config/gameConfig'

interface GamePlayButton {
  itemKey: ItemKey
}

const GamePlayButtonBtn = styled(Button)<{ color: string }>`
  --button-size: 5rem;
  font-size: 2rem;
  background-color: ${(p) => `var(--color-${p.color})`};
  width: var(--button-size);
  height: var(--button-size);
`

const GamePlayButton = ({ itemKey }: GamePlayButton) => {
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(addNewUserItem(itemKey))
  }

  return (
    <GamePlayButtonBtn onClick={onClick} color={gameItems[itemKey].color}>
      {itemKey.toUpperCase()}
    </GamePlayButtonBtn>
  )
} 

export default GamePlayButton
