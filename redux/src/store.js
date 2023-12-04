import { configureStore } from '@reduxjs/toolkit'
import ashley from './Features/counterSlice'

export const store = configureStore({
  reducer: {
    counter: ashley,
  },
})