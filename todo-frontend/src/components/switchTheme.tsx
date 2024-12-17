'use client'
import { Moon, Sun } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const SwitchTheme = () => {
    const {refresh} = useRouter()

    const changeTheme = () => {
        if (document.querySelector('body')?.classList.contains('dark')){
            document.querySelector('body')?.classList.remove('dark')
            document.querySelector('body')?.classList.add('light')
        }else{
            document.querySelector('body')?.classList.remove('light')
            document.querySelector('body')?.classList.add('dark')
        }
        refresh()
    }
    
  return (
    <div className='bg-navbar rounded-lg text-text w-[50px] h-[50px] flex items-center justify-center hover:text-highlight'
        onClick={changeTheme}
    >
        {
            document.querySelector('body')?.classList.contains('dark')? <Moon/> : <Sun/>
        }
    </div>
  )
}

export default SwitchTheme