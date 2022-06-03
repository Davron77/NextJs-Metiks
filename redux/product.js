import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    product: (state, action) => {
      return (state = action.payload)
    },
  },
})

export const { product } = counterSlice.actions

export default counterSlice.reducer
