import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {useSession, signIn, signOut, getSession} from "next-auth/react"
import connectDB from '../../lib/db'
import Cusomer from '../../model/RM'
import mongoose from 'mongoose'
import Form2 from "../../components/Form2"
import Headers from '../../components/Headers'

function detailPage({data}) {
    const router = useRouter()
    const {data: session, status} = useSession()
    if(!router.isReady){
      return <>..Loading</>}
   
    if (status === "authenticated" && router.isReady) {
        return (
          <div className=''>
            <Headers />

             <div className="flex flex-col items-center justify-center">
              <Form2 data1 ={data}/>
              </div>
            </div>
        )
    } else {
        return (
            <div>
                not
            </div>
        )
    }

}

export default detailPage

export async function getServerSideProps(context) {
  await connectDB()
  const { params } = context;
  const { id } = params;
  const [idQ] =id

   console.log(idQ)
//   const product = await Product.findOne({ slug }).lean();
  const abc =  await Cusomer.findOne({_id:idQ}).lean()
  const abd = convertDocToObj(abc)

  console.log(abd)
  
//   await db.disconnect();
  return {
    props: {
        data : abd
    //   product: product ? db.convertDocToObj(product) : null,
    },
  };
}


 
function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}