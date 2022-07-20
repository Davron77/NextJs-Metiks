import { createSlice } from '@reduxjs/toolkit'

export const Cart = createSlice({
  name: 'CartCount',
  initialState: 0,
  reducers: {
    CartCount: (state, action) => {
      return (state = action.payload)
    },
  },
})

export const { CartCount } = Cart.actions

export default Cart.reducer
