// import { createContext, useReducer } from 'react';


// export const Store = createContext( { users:[]});

// const initialState = { users:[]}

// function reducer(state, action) {

//   switch (action.type) {
//     case 'USER_ADD': {
//       const newUser =action.payload;

//       return { ...state, user: [ ...state.user, newUser ] };
//     }

//     case 'USER_REMOVE': {
//       const userLists = state.users.filter(
//         (item) => item._id !== action.payload.slug
//       );
    
//       return { ...state, user: userLists}; 
//     }
//     case 'USER_RESET':
//       return {
//         ...state,
//          users: [],
//       };

//     case 'USER_EDIT':
//         const updateUser = action.payload;
//         const updateUsers = state.users.map(user => {
//           if (user._id === updateUser.id) {
//             return updateUser;
//           }else{
//             return user;
//           }
//         })

//         return {
//           ...state,
//           users: updateUsers
//         }
//     default:
//       return state;
//   }
// }





// export function StoreProvider({ children }) {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const value = { state, dispatch };
//   return <Store.Provider value={value}>{children}</Store.Provider>;
// }