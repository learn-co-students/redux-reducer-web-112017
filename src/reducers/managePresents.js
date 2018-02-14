export function managePresents(state, action){
  if (action.type === 'INCREASE'){
    state = {numberOfPresents: 1}
  }
  return state
}
