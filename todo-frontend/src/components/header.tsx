'use client'
import { HEADER_LINKS } from '@/utils/constants'
import Link from 'next/link'
import React, { useEffect } from 'react'
import '../i18n'
import { useTranslation } from 'react-i18next'
import SwitchLanguage from './switchLanguage'
import SwitchTheme from './switchTheme'
import { LogOut, Menu, User, X } from 'lucide-react'
import { useHeaderMenu } from '@/store/useHeaderMenu'
import { ROUTES } from '@/utils/routes'
import { usePathname, useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'

const Header = () => {
  const {t} = useTranslation()
  const {isActive, setActive} = useHeaderMenu()
  const path = usePathname()
  const {push} = useRouter()
  const {status} = useSession()
  const SetActive = () => {
    setActive(!isActive)
  }

  const userButtonClick = () => {
    if (status ==='unauthenticated'){
      push(ROUTES.SIGN_IN)
    }
    else{
      signOut()
    }
  }

  return (
    <div className='my-2 flex items-center justify-around relative top-0 left-0 right-0 z-50 px-5'>
      <div className='text-4xl font-extrabold text-headline hover:text-highlight'>
        <Link href={ROUTES.MAIN}>SVX</Link>
      </div>
      <div className='hidden md:block bg-navbar p-3 max-w-[600px] w-full rounded-full'>
          <ul className='flex items-center text-text font-bold justify-around'>
            {
              HEADER_LINKS.map((link) => (
                <li key={link.title} className={`hover:text-highlight ${link.link == path? 'text-highlight pointer-events-none' : ''}`}>
                  <Link href={link.link} className='flex gap-2 items-center'>
                    <link.icon/>
                    {t(link.title)}
                  </Link>
                </li>
              ))
            }
          </ul>
      </div>
      <div className='md:flex gap-2 hidden'>
        <SwitchLanguage/>
        <SwitchTheme/>
        <div className='bg-navbar w-[50px] h-[50px] rounded-xl flex justify-center items-center text-text hover:text-highlight'
          onClick={userButtonClick}
        >
            {status === 'unauthenticated'? <User/> : <LogOut/>}
        </div>
      </div>

      <div 
        className='md:hidden w-[50px] h-[50px] bg-navbar rounded-md ml-auto text-text flex items-center justify-center'
        onClick={SetActive}
      >
        {isActive? <X size={40}/> : <Menu size={40}/>}
      </div>
    </div>
  )
}

export default Header