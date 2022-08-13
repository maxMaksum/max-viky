import Link from 'next/link'
import {useSession, signIn, signOut, getSession} from "next-auth/react"
import Form from './Form'

function Navbar() {

    const {data: session, status} = useSession()

    return (
        <nav>
         
            <div className="flex justify-between  items-center bg-gray-50 mx-2">
                <div className='flex '>
                  {status !=="authenticated"?  <button onClick={signIn}className='bg gray-100 mx-4'>Login</button>:<button onClick={signIn} className='bg gray-100'>Logout</button>}
                  
                    
                </div>
                <Form/>

                <div className='flex'>
                    <div>Dalam Wilayah</div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
