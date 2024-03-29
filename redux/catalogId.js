import { createSlice } from '@reduxjs/toolkit'

export const catalogId = createSlice({
  name: 'CatalogId',
  initialState: 1,
  reducers: {
    CatalogId: (state, action) => {
      return (state = action.payload)
    },
  },
})

export const { CatalogId } = catalogId.actions

export default catalogId.reducer
