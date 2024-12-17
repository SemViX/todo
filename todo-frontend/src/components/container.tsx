import { IContainerProps } from '@/types/containter'
import React from 'react'



const Container = ({children, className}:IContainerProps) => {
  return (
    <div className={`max-w-[1200px] mx-auto mt-5 p-2 pb-5 ${className}`}>
        {children}
    </div>
  )
}

export default Container