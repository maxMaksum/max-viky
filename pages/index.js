import Head from 'next/head'
import {useSession, signIn, signOut, getSession} from "next-auth/react"
import React, {useContext, useEffect, useState} from 'react'

import Form from '../components/Form'
import Form3 from '../components/Form3'
import { Store } from '../components/contex/myContext'
import { useRouter } from 'next/router'
import Table from '../components/Table'



export default function Home() {

    const router = useRouter()
    const {data: session, status} = useSession()
    const { addUser, users, resetUsers } = useContext(Store);

    // useEffect(()=>{
    //     resetUsers()

    // },[router])

    if (status === "authenticated") {
        return (
            
            <div>
                <Head>
                    <title>Create Next App</title>
                    <meta name="description" content="Generated by create next app"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                    <main>
                        <Form />
                       
                    
                    </main>
            </div>
           
        )
    } else {
        return (
            <div>You are not signIn</div>
        )
    }
}

export const getServerSideProps = async (contex) => {
    const session = await getSession(contex)

    if (! session) {
        return {
            redirect: {
                destination: "/login"
            }
        }
    }
    return {props: {
            session
        }}

}
