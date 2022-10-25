import React from 'react'
import store from 'redux/store'
import { Provider } from 'react-redux'
import { addNewUserItem } from 'redux/reducers/gameReducer'

store.dispatch(addNewUserItem('a'))
store.dispatch(addNewUserItem('b'))
store.dispatch(addNewUserItem('a'))

export const TestProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
)