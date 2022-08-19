import { createContext, useEffect, useState } from 'react';

export const Store = createContext( { users:[]});

export function StoreProvider({ children }) {
  const [users, setUsers] = useState([]);


 

  
const addUsers = (newUser) => {
  setUsers( [...users, newUser]);
};

const readUsers = () => {
   return users
};

const updateUsers = (id) => {
  const editUser = users.map(user => {
    if (user._id === id) {
      return editUser;
    }else{
      return user;
    }
  })
  setUsers( editUser)
};

const removeUsers = (id)=>{
  const userLists = users.filter((user) => user._id !== id );

  setUsers( userLists)
}

const resetUsers = (id)=>{
  // const userLists = users.filter((user) => user._id !== id );

  setUsers([])
}



  return (
    <Store.Provider value={{
      users,
      setUsers,
      addUsers,
      readUsers,
      resetUsers,
      removeUsers,
      updateUsers
  
    }}>
  
   {children}
   
   </Store.Provider>
  )
  
  
}