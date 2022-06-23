import { createSlice } from '@reduxjs/toolkit'

export const openCatalog = createSlice({
  name: 'isOpen',
  initialState: false,
  reducers: {
    isOpen: (state, action) => {
      return (state = action.payload)
    },
  },
})

export const { isOpen } = openCatalog.actions

export default openCatalog.reducer
