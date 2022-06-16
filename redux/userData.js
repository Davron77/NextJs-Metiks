import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'userData',
  initialState: [],
  reducers: {
    userData: (state, action) => {
      return (state = action.payload)
    },
  },
})

export const { userData } = counterSlice.actions

export default counterSlice.reducer
