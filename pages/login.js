import React from 'react'
import{useSession, signIn, signOut} from "next-auth/react"

export default function login() {
    const {data: session} = useSession()
    console.log(session?.user?.image)

    if(session){
        return (
            <div>
                <div>welcome, {session.user.email}</div>
                <img src={session?.user?.image} />
                <button onClick={()=>signOut()}>signOut</button>
            </div>
            
        )
    }
    else{
        return (
            <div>
                <div>you are not signt</div>
                <button onClick={()=>signIn()}>signIn</button>
            </div>
          )
    }
  
}
