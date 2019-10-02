export function manageFriends(state={friends: []}, action){
  switch (action.type){
    case "ADD_FRIEND":
      state.friends.push(action.friend)
      return {friends: state.friends}
    case "REMOVE_FRIEND":
      return {friends: state.friends.filter(obj=>obj.id!==action.id)}
    default:
      return state
  }
}
