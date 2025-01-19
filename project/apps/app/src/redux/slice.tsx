import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pokiLists: [],
}

export const pokiListsSlice = createSlice({
  name: 'pokiLists',
  initialState,
  reducers: {
    savePokiLists: (state:any) => {
      return {
        ...state,
        pokiLists: state
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { savePokiLists } = pokiListsSlice.actions

export default pokiListsSlice.reducer