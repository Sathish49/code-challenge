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
        pokiLists: state
      }
    },
    removePokiLists: (state:any) => {
        return {
          pokiLists: state.pokiLists.filter((list:any) => list.name !== state.name)
        }
      },
  },
})

// Action creators are generated for each case reducer function
export const { savePokiLists, removePokiLists } = pokiListsSlice.actions

export default pokiListsSlice.reducer