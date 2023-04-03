import { Store } from "./contex/myContext"
import { useContext, useEffect, useState } from 'react'
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useRouter } from 'next/router';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
const axios = require('axios').default;

function Search() {

    const { addUsers, readUsers, users, setUsers } = useContext(Store);

    const router = useRouter()
    const [showSearch, setShowSearch] = useState(true)

    const [data, setData] = useState({
        rm:"",
        nama:"",
        namakk:""

    })


    const Search = async (e) => {
        e.preventDefault()
        await fetchSearch()
        
      
     }

    const fetchSearch = async()=>{
        try{
        const response = await axios.post("/api/customer/customer",{
           data
        })
        console.log(response)  
      }
      catch (error) {
        console.error(error);
      }
      }
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
                    onClick={(e)=>Search(e)}
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

export default Search
