export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      const removeIndex = state.friends.findIndex(f => f.id === action.id);
      return {friends: [...state.friends.slice(0, removeIndex),...state.friends.slice(removeIndex + 1)]}
    default:
      return state
  }
}
