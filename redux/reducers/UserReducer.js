const initialState = [
  {
    name: 'name',
    lastName: 'lastName',
  },
]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER':
      return { ...state, posts: action.payload }
    default:
      return state
  }
}

export default reducer
