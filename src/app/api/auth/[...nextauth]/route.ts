import userLogIn from "@/libs/userLogIn";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions:AuthOptions = {
    providers:[
        CredentialsProvider({
            name: "Credentials",
            credentials: {
              username: { label: "Email", type: "email", placeholder: "Email" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              if (!credentials) return null
              const user = await userLogIn(credentials.username, credentials.password)
              if (user) {
                return user
              } else {
                return null
              }
            }
          })
    ],
    session:{
        strategy:"jwt"
    },
    callbacks:{
      async jwt({token,user}) {
        return {...token, ...user}
      },
      async session({session, token}) {
        session.user = token as any;
        return session
      }
    }
}

const handler = NextAuth(authOptions);
export {
    handler as GET,
    handler as POST
}