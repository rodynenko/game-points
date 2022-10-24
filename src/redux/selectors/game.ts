import { createSelector } from '@reduxjs/toolkit'
import { GameItemKeys } from 'config/gameConfig'
import { RootState } from 'redux/store'

const selectGame = (state: RootState) => state.game

export const selectUserItems = createSelector(
  selectGame,
  (gameState) => gameState.items
)

export const selectUserItemsList = createSelector(
  selectUserItems,
  (items) => (Object.keys(items) as GameItemKeys[]).map((key) => ({
    key,
    amount: items[key] || 0
  })).filter((t) => Boolean(t.amount))
)

export const getUserBonuses = createSelector(
  selectGame,
  (gameState) => gameState.bonuses
)

export const getUserTotalScore = createSelector(
  selectGame,
  (gameState) => gameState.totalScore
)

