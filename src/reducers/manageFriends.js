export function manageFriends(state, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      if (action.friend.name && action.friend.hometown && action.friend.id) {
        return { friends: [...state.friends, action.friend]}
      } else {
        return state
      }
    case 'REMOVE_FRIEND':
      return { friends: state.friends.filter(f => f.id != action.id)}
    default:
      return state
  }
}
