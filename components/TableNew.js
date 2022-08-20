import React, { useContext,  useEffect,  useRef,  useState } from 'react';
import { Store } from "./contex/myContext"
import { useRouter } from 'next/router';
import CloseIcon from '@mui/icons-material/Close';
import TouchAppIcon from '@mui/icons-material/TouchApp';

function TableNew() {

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
    <div className=' w-full my-4 py-6'>
       
        <table class="table-auto w-full">
            <thead>
                <tr className='space-y-2'>
                    <th className='text-center'>RM</th>
                    <th className='text-center'>NAMA</th>
                    <th className='text-center'>NAMA KK</th>
                    <th className='text-center'>ALAMAT</th>
                    <th className='text-center hidden sm-inline-flex'>RT</th>
                    <th className='text-center hidden sm-inline-flex'>RT</th>
                    <th className='text-center'>ACT</th>
                </tr>
            </thead>
            <tbody>
                { users.map((customer, index )=> ( 
                <tr className="className='space-y-2" key={index}>
                                <td  className='text-center'>{customer.rm}</td>
                                <td  className='text-center'>{customer.nama}</td>
                                <td  className='text-center'>{customer.namakk}</td>
                                <td  className='text-center'>{customer.alamat}</td>
                                <td  className='text-center'>{customer.rt}</td>
                                <td  className='text-center'>{customer.rw}</td>
                                <div className='flex items-center justify-center space-x-1'>
                                <div onClick={(e)=>deleteData(e, customer._id)} className='  cursor-pointer w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center'>
                                   <CloseIcon />
                                </div>
                                <div  onClick={()=>router.push(`/id/${customer._id}`)} className=' cursor-pointer w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center'>
                                   <TouchAppIcon />
                                </div>
                                </div>
                            
                </tr>))}
                
            </tbody>
        </table>
    </div>
  )
}

export default TableNew