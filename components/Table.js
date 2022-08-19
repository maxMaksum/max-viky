import React, { useContext,  useEffect,  useRef,  useState } from 'react';
import { Store } from "../components/contex/myContext"
import { useRouter } from 'next/router';

function Table() {

    const { addUser, users, removeUsers } = useContext(Store);
    const router = useRouter()
    
    const [b] = users

    console.log(b)
    console.log("ok")

    const fetchData = async () => {
        const response = await fetch('/api/customer/customer')
        const data = await response.json()
        setDataRe(data)
    }
  
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
                  <div className ="mx-auto">

        
                     <div >
                     <div className='flex space-x-8'>
                                <p className='px-2 w-40'>RM</p>
                                <p className='px-2 w-40'>Nama</p>
                                <p className='px-2 w-40'>Nama KK</p>
                                <p className='px-2 w-40'>Nama KK</p>
                     </div>           
                        
                        {
                        
                        users.map((customer, index )=> (
                            <div key={customer._id} className='flex space-x-8 space-y-4'>
                                <p className='px-2 w-40'>{customer.rm}</p>
                                <p className='px-2 w-40'>{customer.nama}</p>
                                <p className='px-2 w-40'>{customer.namakk}</p>
                                <p className='px-2 w-40'>{customer.alamat}</p>
                                <div className='px-2 w-40'>
                                    <button className='bg-gray-500 p-1 rounded' onClick={()=>router.push(`/id/${customer._id}`)}>Details</button>
                                    <button className='bg-gray-500 p-1 rounded' onClick={(e)=>deleteData(e, customer._id)}>DELETE</button>
                                </div>
                    
                            </div>
                            ))
                        } 
                    
                </div>
                     </div>)}

            export default Table