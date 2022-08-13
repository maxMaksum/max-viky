import styles from '../styles/Home.module.css'
import {useState} from 'react'


function Form() {

    const [rm, setRm] = useState("")
    const [nama, setNama] = useState("")
    const [namakk, setNamaKK] = useState("")
    const [alamat, setAlamat] = useState("")
    const [rt, setRt] = useState("")
    const [rw, setRw] = useState("")
    const [dataC, setDataC] = useState({})

    const [showSearch, setShowSearch] = useState(true)

    console.log(alamat)

    const submit = async (e) => {
        e.preventDefault()
        setDataC({
            rm: rm,
            nama: nama,
            namakk:namakk,
            alamat: alamat,
            rt: rt,
            rw: rw
        })


    }
    console.log(dataC)

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
                        value={rm}
                        onChange ={(e)=>setRm(e.target.value)}
                        
                        
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
                    <div className='mt-2 '>
                       
                        <div className="flex items-center">
                            <label htmlFor ="desa" className="sr-only">DESA</label>
                            <select 
                            id="desa"
                             name="desa" 

                             type='text'
                             value={alamat}
                             onChange ={(e)=>setAlamat(e.target.value)}

                             className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-white text-gray-500 sm:text-sm rounded-md">
                            {option.map((x , i)=>(
                              <option key={i} value={x.value}>{x.label}</option>)
                            )} 
                            </select>
                        </div>
                    </div>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input 
                        type='text'
                        value={nama}
                        onChange ={(e)=>setNama(e.target.value)}
                         className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                          placeholder="NAMA"/>
                    </div>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input 
                        type='text'
                        value={namakk}
                        onChange ={(e)=>setNamaKK(e.target.value)}
                         className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                          placeholder="NAMA KK"/>
                    </div>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input 
                        type='text'
                        value={rt}
                        onChange ={(e)=>setRt(e.target.value)}
                        
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="RT"/>
                    </div>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input 
                        type='text'
                        value={rw}
                        onChange ={(e)=>setRw(e.target.value)}
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="RW"/>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Form
