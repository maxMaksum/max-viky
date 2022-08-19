import React, {useContext, useEffect, useState} from 'react'
import Table from './Table';
import { Store } from "../components/contex/myContext"

function Form3({setShowForm}) {

  const { addUsers } = useContext(Store);

  const [dataQ, setDataQ] = useState({
    rm:"",
    nama:"",
    namakk:"",
    alamat:"",
    rt:"",
    rw:""

})


    async function putData(url = '', data = {}) {
     
        const response = await fetch(url, {
          method: 'PUT', // *GET, POST, PUT, DELETE, etc.
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
      

    const submit = async (e) => {
        e.preventDefault()
        const response = await putData('/api/customer/customer', dataQ)
          
        const {product, MESSEGE} = response
        console.log(response)

        if(response){
          e.preventDefault();
          addUsers(product);
        
        } 

      
     }
   


     const cancelDataQ = ()=>{
      clearData()
      setShowForm(true)
     }

    const clearData = ()=>{
       setDataQ({
        rm:"",
        nama:"",
        namakk:"",
        alamat:"",
        rt:"",
        rw:""
       })
    }

    let option = [
      {value : 'SODITAN', label: 'SODITAN'},
      {value : 'LASEM', label: 'LASEM'},
      {value : 'ABC', label: 'ABC'},
      {value : 'LARA', label: 'LARA'}
    
    
    
    ]
    return (
             <div className='flex flex-col justify-center  fitems-start space-y-8'>
            
                <div className="mt-1 relative rounded-md shadow-sm flex flex-start">
                    <p className='pl-2 w-28 bg-gray-50'>RM</p>
                    <input  
                     className ="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12  border-gray-500 bg-gray-100 text-lg rounded-xs" 
                     placeholder="RM"
                     type='text'
                     value={dataQ.rm}
                     onChange ={(e)=>setDataQ({...dataQ, rm:e.target.value})}
                     />
                </div>
                <div className="mt-1 relative rounded-xs shadow-sm flex flex-start">
                <p className='pl-2 w-28 bg-gray-50'>NAMA</p>
                    <input 
                    type='text'
                    value={dataQ.nama}
                    onChange ={(e)=>setDataQ({...dataQ, nama:e.target.value})}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12  border-gray-300 bg-gray-100 text-lg rounded-xs"
                    placeholder="NAMA"/>
                 </div>
                <div className="mt-1 relative rounded-xs shadow-sm flex flex-start">
                <p className='pl-2 w-28 bg-gray-50'>NAMA KK</p>
                   <input 
                    type='text'
                    value={dataQ.namakk}
                     onChange ={(e)=>setDataQ({...dataQ, namakk:e.target.value})}
                     className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12  border-gray-300 bg-gray-100 text-lg rounded-xs"
                     placeholder="NAMA KK"/>
                </div>

              
                <div className="mt-1 relative rounded-xs shadow-sm flex flex-start">
                <p className='pl-2 w-28 bg-gray-50'>RT</p>
                    <input 
                    type='text'
                    value={dataQ.rt}
                    onChange ={(e)=>setDataQ({...dataQ, rt:e.target.value})}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12  border-gray-300 bg-gray-100 text-lg rounded-xs"
                    placeholder="RT"/>
                </div>
                <div className="mt-1 relative rounded-xs shadow-sm flex flex-start">
                <p className='pl-2 w-28 bg-gray-50'>RW</p>
                   <input 
                    type='text'
                    value={dataQ.rw}
                    onChange ={(e)=>setDataQ({...dataQ, rw:e.target.value})}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12  border-gray-300 bg-gray-100 text-lg rounded-xs"
                    placeholder="RW"/>
                </div>
                <div className="flex">
                <p className='pl-2 w-28 bg-gray-50'>ALAMAT</p>
                     <select 
                           id="desa"
                            name="desa" 
                            type='text'
                            value={dataQ.alamat}
                            onChange ={(e)=>setDataQ({...dataQ, alamat:e.target.value})}

                            className="focus:ring-indigo-500 focus:border-indigo-500 w-full py-0 pl-2 pr-7 boparent bg-white bg-gray-100 text-lg ext-gray-500 sm:text-sm rounded-xs">
                           {option.map((x , i)=>(
                             <option key={i} value={x.value}> {x.label}</option>)
                           )} 
                     </select>
                </div>




                <div className="flex items-center justify-center space-x-4">
                    <button 
                    className='bg-gray-500 rounded text-sm text-white px-2'
                     type="submit" 
                     value="Submit"
                     onClick={(e)=>submit(e)}
                            
                    >Submit
                    </button>
                    <button 
                    className='bg-gray-500 rounded text-sm text-white px-2'
                     type="submit" 
                     value="Submit"
                     onClick={(e)=>cancelDataQ(e)}
                            
                    >Delete
                    </button>
                </div>
                <Table/>
             
            </div>
       

    )
}

export default Form3
