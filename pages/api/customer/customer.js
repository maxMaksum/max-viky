import Cusomer from "../../../model/RM"
import connectDB from "../../../lib/db"
import mongoose, { Schema, Types } from "mongoose"
import { getSession } from 'next-auth/react';

connectDB()
const handler = async (req, res) => {
    const session = await getSession({ req });
    if (!session) {
      return res.status(401).send('admin signin required');
    }
    // const { user } = session;
    if (req.method === 'GET') {
      return getHandler(req, res);
    } 
    if (req.method === 'PUT') {
      return putHandler(req, res);
    } 
    if (req.method === 'POST') {
      return postHandler(req, res);
    } 
  };

const getHandler = async (req, res) => {
 
    const LIMIT = 20
    const products = await Cusomer.find({})
    .sort({rm: 1}) // -1 for descending sort
    .limit(LIMIT);
    
    // await db.disconnect();
    res.send(products);
  };
  export default handler;

const postHandler = async (req, res) => {

  const {rm, nama, namakk, alamat} = req.body

  let namare = new RegExp("^"+ nama );
  let namakkre = new RegExp(namakk);
  let rmre = new RegExp("^"+ rm);
  let alamatre = new RegExp("^"+ alamat);

  console.log(nama)
 

    const LIMIT = 5

    if(nama){
      const products = await Cusomer.find(
        {nama : { $regex: namare, $options: 'i' }
      })
      .limit(LIMIT)
      .sort({rm: 1}) // -1 for descending sort
      console.log(products)
      // await db.disconnect()
      res.status(200).json({ products})}

      if(rmre){
        const products = await Cusomer.find(
          {rm : { $regex: rmre, $options: 'i' }
          // {nama : { $regex: namare, $options: 'i' }},
          // {namakk : { $regex: namakkre, $options: 'i' }},
          // {alamat : { $regex: alamatre, $options: 'i' }}
        })
        .limit(LIMIT)
        .sort({rm: 1}) // -1 for descending sort
        console.log(products)
        // await db.disconnect()
        res.status(200).json({ products})}
      
        if(namakk){
          const products = await Cusomer.find(
            {namakk : { $regex: namakkre, $options: 'i' }
            // {nama : { $regex: namare, $options: 'i' }},
            // {namakk : { $regex: namakkre, $options: 'i' }},
            // {alamat : { $regex: alamatre, $options: 'i' }}
          })
          .limit(LIMIT)
          .sort({rm: 1}) // -1 for descending sort
          console.log(products)
          // await db.disconnect()
          res.status(200).json({ products})}
  };
  
  const putHandler = async (req, res)=>{
    const {rm, nama, namakk, alamat, rt, rw} = req.body
    console.log(rm)

    const newProduct = new Cusomer(
      {
        _id: new Types.ObjectId(), 
        rm: rm, 
        nama: nama,
        namakk: namakk ,    
        alamat: alamat,
        rt:rt ,    
        rw: rw,    }
      
      )
    const product = await newProduct.save()
    console.log(product)
   
  
    res.status(200).json({ MESSAGE:"SUKSES", product:product})
  }
  