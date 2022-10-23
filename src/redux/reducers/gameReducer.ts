import { createReducer, createAction } from '@reduxjs/toolkit'
import { GameItemKeys } from 'config/gameConfig'
import { calculateTotal } from 'utils/calculateTotal'

export interface GameReducerState {
  items: Partial<Record<GameItemKeys, number>>,
  bonuses: number,
  totalScore: number
}

const initialState: GameReducerState = {
  items: { },
  bonuses: 0,
  totalScore: 0
}

export const resetAction = createAction('game/reset')
export const addNewUserItem = createAction<GameItemKeys>('game/add-new-user-item')

export const gameReducer = createReducer<GameReducerState>(initialState, (builder) => {
  builder.addCase(resetAction, () => initialState)
  builder.addCase(addNewUserItem, (state, { payload: newItemKey }) => {
    state.items[newItemKey] = (state.items[newItemKey] || 0) + 1
    const { bonuses, totalScore } = calculateTotal(state.items)
    state.bonuses = bonuses
    state.totalScore = totalScore
  })
})
