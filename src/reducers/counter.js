// its job is to update the state that will be in the store

const initialState = {
  count: 0
}

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        count: state.count + action.by
      }
      // return Object.assign({}, state, {
      //   count: state.count + action.by
      // })

    case 'DECEMENT_COUNTER':
      return {
        ...state,
        count: state.count - action.by
      }

    default:
      return state
  }


  // if(action.type === 'INCREMENT_COUNTER') {
  //   return {}
  // } else {
  //   return state
  // }
}

export default counterReducer
