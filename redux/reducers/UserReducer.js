import { USER } from '../actions/UserActions'

const counterReducer = (state = 'Davron', action) => {
  switch (action.type) {
    case USER:
      return { ...state }
    default:
      return { ...state }
  }
}

export default counterReducer
