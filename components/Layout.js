import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { MenuProvider } from './contex/myContext';
import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';



export default function Layout({ title, children }) {
  const { status, data: session } = useSession();



 
  return (
    <>
      <Head>
        <title>{title ? title + ' - Amazona' : 'Amazona'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuProvider>
      <Navbar/>
      <div className="min-h-screen bg-gray-50">
       
       {children}
          
      </div>
      </MenuProvider>
    </>
  );
}