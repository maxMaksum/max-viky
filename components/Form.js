import styles from '../styles/Home.module.css'
import {useContext, useState} from 'react'
import { DataContext } from './contex/myContext';


function Form() {

    const {dataRe, setDataRe} = useContext(DataContext);
  

    const [showSearch, setShowSearch] = useState(true)
    const [data, setData] = useState({
        rm:"",
        nama:"",
        namakk:"",
        alamat:"",

    })
  
    const submit = async (e) => {
        e.preventDefault()
        await fetchData(data)
        clearData()
    
     }
   
    console.log(data)

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
               
        setDataRe(data)

    }catch(error) {
        // enter your logic for when there is an error (ex. error toast)
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
        <div className='flex justify-center items-start'>
            <div className='flex flex-col items-center mb-2 py-2 relative'>
                <div className='flex items-center justify-start space-x-2'>
                    <div className='flex items-center justify-center bg-gray-500 rounded'>
                        <button onClick={
                                () => setShowSearch(!showSearch)
                            }
                            className='px-2 text-gray-50 text-sm'>
                            More
                        </button>
                    </div>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input 
                        className ="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-500 rounded-md" 
                        placeholder="RM"
                        type='text'
                        value={data.rm}
                        onChange ={(e)=>setData({...data, rm:e.target.value})}
                        
                        
                        />
                    </div>
                    <button 
                    className='bg-gray-500 rounded text-sm text-white px-2'
                    type="submit" 
                    value="Submit"
                    onClick={(e)=>submit(e)}
                    
                    >Submit</button>
                </div>

                <div className={
                    showSearch ? 'hidden' : 'block space-y-4 text-black absolute top-10'
                }>
              
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input 
                        type='text'
                        value={data.nama}
                        onChange ={(e)=>setData({...data, nama:e.target.value})}
                         className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                          placeholder="NAMA"/>
                    </div>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input 
                        type='text'
                        value={data.namakk}
                        onChange ={(e)=>setData({...data, namakk:e.target.value})}
                         className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                          placeholder="NAMA KK"/>
                    </div>

                    <div className='mt-2 '>
                       
                       <div className="flex items-center">
                           <label htmlFor ="desa" className="sr-only">ALAMAT</label>
                           <select 
                           id="desa"
                            name="desa" 

                            type='text'
                            value={data.alamat}
                            onChange ={(e)=>setData({...data, alamat:e.target.value})}

                            className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-white text-gray-500 sm:text-sm rounded-md">
                           {option.map((x , i)=>(
                             <option key={i} value={x.value}> {x.label}</option>)
                           )} 
                           </select>
                       </div>
                   </div>
                </div>
            </div>
        </div>

    )
}

export default Form
