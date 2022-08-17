import React, { useState } from 'react'

function Table({customers}) {

  const [showSave, setShowSave] = useState(true)

  const [customersQ,setCustomersQ ] = useState (customers)


  const deleteData = async (e, id) => {
    e.preventDefault()
    console.log(id)
    const response = await deleteDataq('/api/id/'+id, id) 
    console.log(response)
    return response 
   
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
    <div className ="mx-auto flex items-center justify-center">
<table className="table-auto">
                            <thead className='bg-gray-50 border-b-2 border-gray-200'>
                                <tr>
                                    <th className='p-1 text-sm font-semibold tracking-tighter text-left'>RM</th >
                                    <th className='p-1 text-sm font-semibold tracking-tighter text-left' >NAMA</th >
                                    <th className='p-1 text-sm font-semibold tracking-tighter text-left'>NAMA KK</th >
                                    <th className='p-1 text-sm font-semibold tracking-tighter text-left'>ALAMAT</th >
                                </tr>
                            </thead>
                            <tbody> {


                                customersQ?.map((customer, index )=> (
                                    <tr  key={index }>
                                        <td className="p-1 text-sm text-gray-700">{
                                            <input value={   customer.rm}/>
                                            // customer.rm
                                        }</td>
                                        <td className="p-1 text-sm text-gray-700">{
                                            <input value={    customer.nama}/>
                                            // customer.nama
                                        }</td>
                                        <td className="p-1 text-sm text-gray-700">{
                                            <input value={    customer.namakk}/>
                                            // customer.namakk
                                        }</td>
                                        <td className="p-1 text-sm text-gray-700">{
                                             <input value={     customer.alamat}/>
                                            // customer.alamat
                                        }</td>
                                            <td className="p-1 text-sm text-gray-700">{
                                                  <input value={    customer.rt}/>
                                            // customer.rt
                                        }</td>
                                          <td className="p-1 text-sm text-gray-700">{
                                              <input value={    customer.rw}/>
                                            // customer.rw
                                        }</td>

                                        <td className="p-1 text-sm text-gray-700">{
                                            //   <input value={    customer.rw}/>
                                            // customer.rw
                                            <div className='flex items-center justify-center space-x-4'>
                                           
                                            <button onClick={(e)=>deleteData(e, customer._id)}>DELETE</button>
                                            </div>
                                          
                                        }</td>

                                       
                                        

                                    </tr>
                                ))
                            } 
                            </tbody>
                        </table>

    </div>
  )
}

export default Table