import { Store } from "../components/contex/myContext"
import { useContext, useEffect, useState } from 'react'
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useRouter } from 'next/router';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
function Form() {

    const { addUsers, readUsers, users, setUsers } = useContext(Store);

    const router = useRouter()

    // console.log(users)
    const [showSearch, setShowSearch] = useState(true)
    const [data, setData] = useState({
        rm:"",
        nama:"",
        namakk:"",
        alamat:"",

    })
  
    const submit = async (e) => {

        // console.log(data)

    
         const res = await fetchData(data)
         
         console.log(res.products)
         setUsers(res.products)

       
        //  console.log(users)

     }
   
    const clearData = ()=>{
       setData({
        rm:"",
        nama:"",
        namakk:"",
        alamat:"",
       })
    }

    const fetchData = async (x)=>{
        try {
        const response = await fetch('/api/customer/customer', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(x)
            })
        const data =  await response.json()

       
     
        return data

    }
    catch(error) {
      console.log(error)
     } 
}

    let option = [
      {value : 'SODITAN', label: 'SODITAN'},
      {value : 'LASEM', label: 'LASEM'},
      {value : 'ABC', label: 'ABC'},
      {value : 'LARA', label: 'LARA'}
    
    
    
    ]
    return (
        <div className='flex flex-col justify-center items-start'>
            <div className='flex flex-col items-center mb-2 py-2 relative '>
                <div className='flex items-center justify-center space-x-2'>
                    <div className='flex items-center justify-center rounded animate-bounce '>
                       <KeyboardDoubleArrowDownIcon onClick={
                                () => setShowSearch(!showSearch)
                            } />
                    </div>
                    <div className=" relative rounded-md shadow-sm p-1">

                        <input 
                        className ="text-sm focus:outline-none bg-transparent ring-2 ring-gray-100 placeholder-gray-700 w-full pl-7 pr-12 flex-grow" 
                        placeholder="RM"
                        type='text'
                        value={data.rm}
                        onChange ={(e)=>setData({...data, rm:e.target.value})}
                        
                        
                        />
                    </div>

                    <button 
                    className='flex items-center align-center'
                    type="submit" 
                    value="Submit"
                    onClick={(e)=>submit(e)}
                    > <SearchRoundedIcon /></button>
                </div>

                <div className={
                    showSearch ? 'hidden' : 'block space-y-4 text-black absolute top-12 h-20 bg-gray-100 rounded'
                }>
              
                    <div className="mt-1 relative rounded-md shadow-sm px-1">
                        <input 
                        type='text'
                        value={data.nama}
                        onChange ={(e)=>setData({...data, nama:e.target.value})}
                        className ="text-sm focus:outline-none bg-transparent ring-2 ring-gray-100 placeholder-gray-700 w-full pl-7 pr-12 flex-grow"
                          placeholder="NAMA"/>
                    </div>
                    <div className="mt-1 relative rounded-md shadow-sm px-1">
                        <input 
                        type='text'
                        value={data.namakk}
                        onChange ={(e)=>setData({...data, namakk:e.target.value})}
                        className ="text-sm focus:outline-none bg-transparent ring-2 ring-gray-100 placeholder-gray-700 w-full pl-7 flex-grow"
                        placeholder="NAMA KK"/>
                    </div>

                    
                </div>
            </div>
            
        </div>

    )
}

export default Form
