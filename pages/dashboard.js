import React, {useState} from 'react'
import Form from '../components/Form'
import styles from '../styles/Home.module.css'
import{useSession, signIn, signOut} from "next-auth/react"

function dashboard() {
    const [data, setData] = useState([])
    const {data: session, status} = useSession({required: true})
    const fetchData = async ()=>{
        const response = await fetch ('/api/dashboard')
        const data = await response.json()
      setData (data)
    }

    

if(status ==="authenticated"){
  return (
    
    <div className={styles.main} >
        <button onClick={()=>signOut()}>Logout</button>
        <Form/>
        <button onClick ={fetchData}>Customer List</button>
        
        {data?.map((x,i)=>(
        
            <div  className={styles.grid} key ={i}>
                <div  className={styles.card}>
                    <div className = {styles.detail}>
                        <p className={styles.description}>{x.rm}</p>
                        <p className={styles.description}>{x.nama}</p>
                        {/* <p className={styles.description}>{x.alamat}</p> */}

                    </div>
               
                </div>
            </div>
         
        ))}
    </div>
  )}
  else{
    return(
        <di>
            you are not signIn
        </di>
    )
  }
}

export default dashboard