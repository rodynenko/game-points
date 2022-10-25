import { createReducer, createAction } from '@reduxjs/toolkit'
import { ItemKey, GameStoreItem } from 'types'
import { addOneToItem } from 'utils/addOneToItem'
import { gameItems } from 'config/gameConfig'

export interface GameReducerState {
  items: Record<ItemKey, GameStoreItem>
}

const initialState: GameReducerState = {
  items: { }
}

export const resetAction = createAction('game/reset')
export const addNewUserItem = createAction<ItemKey>('game/add-new-user-item')

export const gameReducer = createReducer<GameReducerState>(initialState, (builder) => {
  builder.addCase(resetAction, () => initialState)
  builder.addCase(addNewUserItem, (state, { payload: itemKey }) => {
    const nextValue = addOneToItem(state.items[itemKey], gameItems[itemKey])
    if (nextValue) {
      state.items[itemKey] = nextValue
    }
  })
})
