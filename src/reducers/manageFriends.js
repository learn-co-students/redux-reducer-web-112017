export function manageFriends(state = { friends: [] }, action){
  switch (action.type) {
    case 'ADD_FRIEND':
    return Object.assign({}, state, {
      friends: [
        ...state.friends,
        action.friend
      ]});
      break;
    case 'REMOVE_FRIEND':
      let friendToRemove = state.friends.findIndex(friend => friend.id === action.id);
      return Object.assign({}, state, {
        friends: [
          ...state.friends.slice(0, friendToRemove),
          ...state.friends.slice(friendToRemove + 1)
        ]
      });
      break;
    default:
      return state
  }
}
