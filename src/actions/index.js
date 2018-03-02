// {
//   type: '',
//   payload
// }

export const incrementCounter = (by) => {
  return {
    type: 'INCREMENT_COUNTER',
    by
  }
}

export const decrementCounter = (by) => {
  return {
    type: 'DECEMENT_COUNTER',
    by
  }
}

export const updateUsername = (name) => {
  return {
    type: 'UPDATE_NAME',
    name
  }
}
