export function managePresents(state, action){
  let newState = Object.assign({}, state)
  switch (action.type) {
    case 'INCREASE':
      newState.numberOfPresents += 1
      break;
    case 'DECREASE':
      newState.numberOfPresents -= 1
      break;
    default:
      break;
  }
  return newState
}
