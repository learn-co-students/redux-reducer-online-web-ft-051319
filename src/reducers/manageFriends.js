let state = {friends: []}
export function manageFriends(state, action){
    switch(action.type) {
        case 'ADD_FRIEND':
            return (
                // returns state as is and modifies friends array to keep all existing friends and add the new friend using action.friend
                // action = {
                //   type: "ADD_FRIEND",
                //   friend: {
                //     name: "Chrome Boi"
                //     homewtown: "NYC",
                //     id: 1
                //   }
                // }
                {...state,
                    friends: [
                        ...state.friends,
                        action.friend

                    ]
                }
            )
        case 'REMOVE_FRIEND':
        //  assign removalIndex to the friend where it's id = to the action id submitted
        //  action = {
        //      type: "REMOVE_FRIEND",
        //      id: 1
        // }
            const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
        // return state as is and modify friends array to remove friends[removalIndex]
            return (
              {...state,
                  friends: [
                    ...state.friends.slice(0, removalIndex),
                    ...state.friends.slice(removalIndex + 1)
                  ]
              }
            )
        default:
            return state;
    }
}
