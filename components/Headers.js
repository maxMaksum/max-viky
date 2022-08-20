import React from 'react'

import Image from 'next/image';
import LogoutIcon from '@mui/icons-material/Logout';
import{useSession, signIn, signOut} from "next-auth/react"
import Form from './Form';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import { useRouter } from 'next/router';

function Headers() {
  const {data: session} = useSession()

  const router = useRouter()

  return (

      <header className="sticky top-0 z-40 bg-emerald-500 flex items-center justify-around py-1.5 px-3 focus-within:shadow-lg w-100">
        <div onClick={()=>router.push("/")} className="flex items-center space-x-2 cursor-pointer ">
       
        <Image src="/logo-puskesmas.png" width={60} height={60} />
         <p>
          LASEM
         </p>
        
      </div>

      <div>
      <div className="flex flex-1 items-center space-x-1 py-2.5 px-4 rounded">
          <Form />
        
        </div>

      </div>

       <div className="flex items-center space-x-6">

       

       <div onClick={()=>router.push("/addRm")}  className="flex items-center justify-center space-x-4 cursor-pointer">
        <p className='hidden sm:inline-flex'>Add RM</p>
       < DataSaverOnIcon />
       </div>
       <LogoutIcon onClick={()=>signOut()} className="cursor-pointer" />

      </div>
      
      
      </header>

      
      
  )
}

export default Headers