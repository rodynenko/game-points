import React from 'react'
import store from 'redux/store'
import { Provider } from 'react-redux'

export const TestProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
)