import React, { useCallback } from 'react'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { addNewUserItem } from 'redux/reducers/gameReducer'
import Button from 'components/Button'
import { ItemKey } from 'types'


interface GamePlayButton {
  itemKey: ItemKey
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
