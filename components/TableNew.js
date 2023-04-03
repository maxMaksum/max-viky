import React, { useContext,  useEffect,  useRef,  useState } from 'react';


function TableNew({people, searchDesa}) {

console.log(people, searchDesa)



    const deleteData = async (e, customersId) => {
        e.preventDefault()
       if(customersId){
                console.log(customersId)
                const response = await deleteDataq('/api/id/'+customersId, customersId) 
                await removeUsers(customersId)
                return response 
            }
        
        }
        async function deleteDataq(url = '', data = {}) {

            const response = await fetch(url, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
        }


  return (
    <div className=''>
       
<table className="table-auto w-full mx-auto">
  <thead>
    <tr>
      <th className="px-4 py-2">RM</th>
      <th className="px-4 py-2">Nama</th>
      <th className="px-4 py-2">Nama KK</th>
      
      <th className="px-4 py-2">Desa</th>
      <th className="px-4 py-2">Rt</th>
      <th className="px-4 py-2">Rw</th>
      <th className="px-4 py-2">Update</th>
    </tr>
  </thead>
  <tbody>

  {searchDesa.length > 0 ? people?.filter(x=>{
        const searchItem = searchDesa.toLowerCase()
        const newDesa = x.desa.toLowerCase()
        return searchItem ==newDesa}    
        )
       .map(person=>(
       
        <tr className=" bg-gray-100" key={person._id}>     
        <td  className='borde px-4 py-2'>{person.rm}</td>
        <td  className='borde px-4 py-2'>{person.nama}</td>
        <td  className='borde px-4 py-2'>{person.kk}</td>
        <td  className='borde px-4 py-2'>{person.desa}</td>
        <td  className='borde px-4 py-2'>{person.rt}</td>
        <td  className='borde px-4 py-2'>{person.rw}</td>
        <td> <button onClick={()=>console.log(person._id)}>Update</button></td>              
   </tr>

      
       )):people?.map(person=>(
       
        <tr className=" bg-gray-100" key={person._id}>     
             <td  className='borde px-4 py-2'>{person.rm}</td>
             <td  className='borde px-4 py-2'>{person.nama}</td>
             <td  className='borde px-4 py-2'>{person.kk}</td>
             <td  className='borde px-4 py-2'>{person.desa}</td>
             <td  className='borde px-4 py-2'>{person.rt}</td>
             <td  className='borde px-4 py-2'>{person.rw}</td>
             <td> <button onClick={()=>console.log(person._id)}>Update</button></td>              
        </tr>

      
       )) }
  
  </tbody>
</table>   
         
    </div>
  )
}

export default TableNew