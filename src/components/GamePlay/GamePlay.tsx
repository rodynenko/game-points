import React from 'react'
import styled from '@emotion/styled'
import { GameItemKeys, gameItems } from 'config/gameConfig'
import GamePlayButton from './components/GamePlayButton'

const GamePlayList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
  list-style: none
`

const GamePlayItem = styled.li`
  margin-top: 1rem;
  padding: 0 0.5rem;
`

const GamePlay = () => {
  const items = Object.keys(gameItems) as Array<GameItemKeys>
  return (
    <GamePlayList>
      {items.map((item) => (
        <GamePlayItem key={item}>
          <GamePlayButton  itemKey={item} />
        </GamePlayItem>
      ))}
    </GamePlayList>
  )
}

export default GamePlay
