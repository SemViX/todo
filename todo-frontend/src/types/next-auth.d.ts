import { User } from "./types";

  declare module 'next-auth' {
    
    interface Session{
        user: User & {
          id: number,
          email: string
        },
        token: {
          id: number,
          email: string
        }
    }
}