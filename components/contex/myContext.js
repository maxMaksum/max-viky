import React, { createContext, useState } from "react"

export const DataContext = createContext()

export const MenuProvider = ({ children }) => {

  const [dataRe, setDataRe] = useState(
    {
      rm:"",
      nama:"",
      namakk:"",
      alamat:"",
      rt:"",
      rw:""
     }
  );

  const [customersE, setCustomersE] = useState(
   []
  );

  
  return (
    <DataContext.Provider value={{customersE, setCustomersE}}>
        <DataContext.Provider value={{dataRe, setDataRe}}>
          {children}
        </DataContext.Provider>
    </DataContext.Provider>
  );
};