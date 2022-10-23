import { configureStore } from '@reduxjs/toolkit'
import { gameReducer, GameReducerState } from './reducers/gameReducer'

const store = configureStore({
  reducer: {
    game: gameReducer
  }
})

export type RootState = {
  game: GameReducerState
}

export default store