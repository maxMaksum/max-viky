import Customer from "../../../model/RM"
import db from "../../../lib/db"
import mongoose from "mongoose"
import { getSession } from 'next-auth/react';


const handler = async (req, res) => {
    const session = await getSession({ req });
    if (!session) {
      return res.status(401).send('admin signin required');
    }
    // const { user } = session;
    if (req.method === 'GET') {
      return getHandler(req, res);
    } 
  };

const getHandler = async (req, res) => {
    await db.connect();
    const LIMIT = 20
    const products = await Customer.find({})
    .sort({rm: 1}) // -1 for descending sort
    .limit(LIMIT);
    
    await db.disconnect();
    res.send(products);
  };
  export default handler;

// export default async (req, res) => {
//   // console.log(req.method)
//   if (req.method === "GET") {
//     const { page } = req.query

//     // console.log(page)

//     try {
//       const LIMIT = 6
//       const startIndex = (Number(page) - 1) * LIMIT
//       // console.log(startIndex)

//       const total = await Post.countDocuments({})

//       // console.log(total)

//       const posts = await Post.find()
//         .sort({ _id: 1 })
//         .limit(LIMIT)
//         .skip(startIndex)

//       //   console.log(posts)

//       res.json({ data: posts, count: Math.ceil(total / LIMIT) })
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }