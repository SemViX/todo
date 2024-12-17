import { ROUTES } from "@/utils/routes";
import { UserResponse } from "@/utils/types";
import { MAIN_URL } from "@/utils/urls";
import axios from "axios";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: ROUTES.SIGN_IN
    },
    session:{
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers:[
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text", placeholder: "email@example.com" },
                password: { label: "Password", type: "password" },
              },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials.password){
                    return null
                }

                const res = await axios.post<UserResponse>(`${MAIN_URL}auth/local`, {
                    identifier: credentials.email,
                    password: credentials.password
                });

                

                const {user, jwt} = res.data;
                if (!user){
                    return null
                }
               
                return {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    jwt
                }
            },
        })
    ],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                return {
                    ...token,
                    id: user.id,
                    email:user.email
                }
            }
            return token
        },
        async session({session, token}){
            return {
                ...session,
                user:{
                    ...session.user,
                    id: token.id,
                    email:token.email
                }
            }
            return session
        }
    }
    
}

const handler = NextAuth(authOptions)

export {handler as POST, handler as GET}