import { createReducer, createAction } from '@reduxjs/toolkit'

interface GameState {
  items: Record<string, number>
}

const initialState = { items: {} }

const resetAction = createAction('game-reset')

export const gameReducer = createReducer<GameState>(initialState, (builder) => {
  builder.addCase(resetAction, () => initialState)
})
