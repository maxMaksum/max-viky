// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import{useSession, signIn, signOut, getSession} from "next-auth/react"

export default async function handler(req, res) {
    // res.status(200).json(data)
    const session = await getSession({req})
    if(!session){
      res.status(401).json({error:"unauthenticated user"})
    }
    else{
       res.status(200).json({
        message:'success',
        session
       })
    }
  }
  