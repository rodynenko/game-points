import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'redux/store'

const selectGame = (state: RootState) => state.game

export const selectUserItems = createSelector(
  selectGame,
  (gameState) => gameState.items
)

export const getUserBonuses = createSelector(
  selectGame,
  (gameState) => gameState.bonuses
)

export const getUserTotalScore = createSelector(
  selectGame,
  (gameState) => gameState.totalScore
)

