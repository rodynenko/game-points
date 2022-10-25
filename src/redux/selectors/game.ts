import { createSelector } from '@reduxjs/toolkit'
import { gameItems } from 'config/gameConfig'
import { RootState } from 'redux/store'

const selectGame = (state: RootState) => state.game

export const selectUserItems = createSelector(
  selectGame,
  (gameState) => gameState.items
)

export const selectUserItemsList = createSelector(
  selectUserItems,
  (items) => {
    const resultList = Object.keys(items)
      .map((key) => ({
        key,
        label: gameItems[key].label,
        amount: items[key].amount,
        totalPoints: items[key].totalPoints
      }))
      .filter((t) => Boolean(t.amount))
      .sort((a, b) => b.totalPoints - a.totalPoints)

    return resultList
  }
)

export const getUserBonuses = createSelector(
  selectUserItems,
  (items) => Object.keys(items).reduce((prev, currKey) => prev + items[currKey].bonuses, 0)
)

export const getUserTotalScore = createSelector(
  selectUserItems,
  (items) => Object.keys(items).reduce((prev, currKey) => prev + items[currKey].totalPoints, 0)
)

