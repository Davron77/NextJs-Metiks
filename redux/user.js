import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'dataCatalog',
  initialState: [],
  reducers: {
    dataCatalog: (state, action) => {
      return (state = action.payload)
    },
  },
})

export const { dataCatalog } = counterSlice.actions

export default counterSlice.reducer
