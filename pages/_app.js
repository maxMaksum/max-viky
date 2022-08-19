import { SessionProvider } from "next-auth/react"
import Layout from "../components/Layout";
// import 'tailwindcss/tailwind.css'
import '../styles/globals.css';
import { StoreProvider } from "../components/contex/myContext"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
    <SessionProvider session={session}>
    
      
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    
   
    </SessionProvider>
     
    </>
  )
}
