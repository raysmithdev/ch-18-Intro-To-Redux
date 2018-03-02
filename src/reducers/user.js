const initialState = {
  username: '',
  location: ''
}

const userReducer = (state = initialState, action) => {
  if(action.type === 'UPDATE_NAME') {
    return {
      ...state,
      username: action.name
    }
  } else {
    return state
  }

  // switch(action.type) {
  //   case 'UPDATE_NAME':
  //     return {
  //       ...state,
  //       username: action.name
  //     }
  //
  //   default:
  //     return state
  // }
}

export default userReducer
