export function manageFriends(state = {friends: []}, action){
    switch (action.type) {
        case "ADD_FRIEND":
            return {friends: [...state.friends, action.friend]};
        case "REMOVE_FRIEND":
            const index = state.friends.findIndex(f => f.id === action.id)
            return {friends: [...state.friends.slice(0,index), ...state.friends.slice(index + 1)]}
        default:
            return state;
    }
}
