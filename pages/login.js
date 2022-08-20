import React, { useEffect } from 'react'
import{useSession, signIn, signOut, getProviders, getSession} from "next-auth/react"
import { useRouter } from 'next/router'

export default function login(providers) {
    const {data: session} = useSession()
    const router = useRouter()

    return (

        <div>
          
             {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <div className="pl-4">
                <button
                  className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2"
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  Sign in
                </button>
              </div>
            </div>
          ))}
        </div>
    )


  
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
 
  return {
    props: {
      providers,
      
    },
  };
}