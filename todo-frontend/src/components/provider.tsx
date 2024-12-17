'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

interface IProvider{
    children: React.ReactNode
}

export const queryClient = new QueryClient()
const Provider = ({children}:IProvider) => {

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        {children}
      </SessionProvider>
    </QueryClientProvider>
  )
}

export default Provider