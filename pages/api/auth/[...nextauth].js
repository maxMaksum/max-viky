import NextAuth from "next-auth/next"
import  GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/monggodb"
import { redirect } from "next/dist/server/api-utils"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,

  jwt:{
    encryption: true
  },

  callbacks: {
    
    async jwt({ token, user, account, profile, isNewUser }) {

      if(account?.access_token){
        token.access_token =account.access_token
      }
      return token
    },

    redirect: async(url, _baseUrl) =>{

      // if(url==="/login"){
      //   return Promise.resolve("/")
      // }
      return Promise.resolve("/")

    }
  },





  // pages: {
  //   signIn: "/login",
  // },
  adapter: MongoDBAdapter(clientPromise)
})