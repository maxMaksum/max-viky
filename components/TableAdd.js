import React, { useContext,  useEffect,  useRef,  useState } from 'react';
import { Store } from "./contex/myContext"
import { useRouter } from 'next/router';
import CloseIcon from '@mui/icons-material/Close';

function TableAdd() {

    const { addUser, users, removeUsers } = useContext(Store);
    const router = useRouter()
    
    const [b] = users

  
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
                  <div className ="flex items-center justify-center">
                     <div >         
                        {
                        
                        users.map((customer, index )=> (

                            <div key={customer._id} className='flex flex-col space-x-4 '>
                                <div className='flex items-center justify-around w-60'>
                                    <p className ="w-20">RM :</p>    
                                    <p className=' '>{customer.rm}</p>
                                </div>
                                <div className='flex items-center justify-around w-60'>
                                    <p className ="w-20">RM :</p>    
                                    <p className=' '>{customer.rm}</p>
                                </div>
                                <div className='flex items-center justify-around w-60'>
                                    <p className ="w-20">RM :</p>    
                                    <p className=' '>{customer.rm}</p>
                                </div>
                                <div className='flex items-center justify-around w-60'>
                                    <p className ="w-20">RM :</p>    
                                    <p className=' '>{customer.rm}</p>
                                </div>
                                <div className='flex items-center justify-around w-60'>
                                    <p className ="w-20">RM :</p>    
                                    <p className=' '>{customer.rm}</p>
                                </div>
                              
                                <div onClick={(e)=>deleteData(e, customer._id)} className=' w-5'>
                                   <CloseIcon />
                                </div>
                                
                            </div>
                            
                            ))
                        } 
                        
                    
                </div>
                     </div>)}

            export default TableAdd