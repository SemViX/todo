'use client'
import { useHeaderMenu } from '@/store/useHeaderMenu'
import { HEADER_LINKS } from '@/utils/constants'
import React from 'react'
import SwitchLanguage from './switchLanguage'
import SwitchTheme from './switchTheme'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

const HeaderMenu = () => {
    const {isActive} = useHeaderMenu()
    const {t} = useTranslation()
    const {setActive} = useHeaderMenu()

    const Close = () => {
        setActive(false)
        document.querySelector('body')?.classList.remove('overflow-hidden')
    }

  return (
    <div className={`absolute md:hidden top-0 ${isActive? 'right-0' : 'right-[100%]'} left-0 bottom-0 bg-background z-5 transition-all duration-300 flex flex-col items-center justify-center`}>
        <ul className='text-3xl font-bold uppercase text-text'>
            { isActive &&
                HEADER_LINKS.map((link) =>(
                    <li key={link.title} className='mb-4 hover:text-highlight'>
                        <Link href={link.link} className='flex gap-2 items-center' onClick={Close}>
                            <link.icon size={40}/>
                            {t(link.title)}
                        </Link>
                    </li>
                )) 
            }
        </ul>
        { isActive &&
            <div className='flex gap-7'>
                <SwitchLanguage/>
                <SwitchTheme/>
            </div>
        }
    </div>
  )
}

export default HeaderMenu