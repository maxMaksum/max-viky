import React from 'react'
import { useState } from 'react';
import TableNew from '../TableNew';
const axios = require('axios');
const url = 'http://localhost:3000'


function Search({desas}) {
    // console.log(desas)

   

    const [searchNama, setSearchNama] = useState('');
    const [searchRm, setSearchRm] = useState('');
    const [searchDesa, setSearchDesa] = useState('')

    const [people, setPeople] = useState([])
   
    const handleSearchInputNama = (event) => {
        setSearchNama(event.target.value);
       };


    const handleSearchInputDesa = (event) => {
        setSearchDesa(event.target.value);
       }; 
       
    const handleSubmit = async (event) => {
      event.preventDefault();
      // Do something with the selected value, such as submitting it to a server
    //   console.log(selectedValue);
   
    // fetchRead('http://localhost:3000/api/persons',{kk:searchKK, nama:searchNama, desa:searchDesa, rm:searchRm})
      const response = await axios.post(`/api/persons`,{nama:searchNama})
      setPeople(response.data)
      console.log(response.data)
    
    };
  
  return (
    <div className="bg-gray-50 w-full">

    <form  onSubmit={handleSubmit} className="flex items-center justify-center mt-24 space-x-2">

     

      <div className="">
        
        <input
          type="text"
          value={searchNama}
          onChange={handleSearchInputNama}
          placeholder="Nama..."
          className="border rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400 h-10 w-96"
        />
       
      </div>
      
      <div className="relative">
        <input
          type="text"
          value={searchDesa}
          onChange={handleSearchInputDesa}
          placeholder="Desa.."
          className=" border rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400 w-40 h-10"
        />
           <div className='absolute top-10'>
       {desas?.filter(desa=>{
        const searchItem = searchDesa.toLowerCase()
        const newDesa = desa.nama.toLowerCase()
        return searchItem && newDesa?.startsWith(searchItem) && newDesa !==searchItem}    
        )
       .map(x=>(
        <div className='bg-gray-50' key={x._id} onClick={()=>setSearchDesa(x.nama)}><button>{x.nama}</button></div>
       ))}
    </div>
      </div>
        
      
      <button type="submit w-20 ">Submit</button>
    </form>

   <div className='bg-gray-50'>
   {/* {people?.filter(x=>{
        const searchItem = searchDesa.toLowerCase()
        const newDesa = x.desa.toLowerCase()
        return searchItem ==newDesa}    
        )
       .map(y=>(
        <div className='bg-gray-50' key={y._id}><TableNew person={y}/></div>
       ))} */}
       <TableNew people={people} searchDesa={searchDesa} />

   </div>
    </div>
  )
}

export default Search