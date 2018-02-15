export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      let removedFriends = state.friends.filter(friend => (friend.id !== action.id))
      return { friends: removedFriends }
    default:
      return state;
  }
}
