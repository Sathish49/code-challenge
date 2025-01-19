import { configureStore } from '@reduxjs/toolkit'
import pokiListsReducer from "./slice"

export const store = configureStore({
  reducer: {
    pokiList: pokiListsReducer,
  },
})