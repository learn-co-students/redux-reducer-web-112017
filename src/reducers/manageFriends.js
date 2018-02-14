export function manageFriends(state, action){
  if (action.type==='ADD_FRIEND' && action.friend){
    state = {friends: [...state.friends,action.friend]}
  } else if (action.type==='REMOVE_FRIEND' && action.id) {
    let stateFriends = state.friends.filter((friend) => {
      return friend.id !== action.id
    })
    state = {friends: stateFriends}
  }
  return state
}
