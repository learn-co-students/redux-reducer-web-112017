export function manageFriends(state, action){
  switch(action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]};
    case "REMOVE_FRIEND":
      let friend = state.friends.find(f => f.id === action.id)
      let friendIndex = state.friends.indexOf(friend)
      let newFriends = state.friends.slice()
      
      newFriends.splice(friendIndex, 1)
      
      return {friends: newFriends}
    default:
      return state
  }
}
