import React from 'react'
import '../i18n'
import { useTranslation } from 'react-i18next'

const SwitchLanguage = () => {
    const {t, i18n} = useTranslation()
    const changeLanguage = () => {
        if (i18n.language === 'uk'){
            i18n.changeLanguage('en')
        }
        else{
            i18n.changeLanguage('uk')
        }
    }
  return (
    <div className='bg-navbar rounded-lg text-text w-[50px] h-[50px] font-bold flex items-center justify-center hover:text-highlight'
        onClick={changeLanguage}
    >
        {i18n.language === 'uk'? 'UK' : 'EN'}    
    </div>
  )
}

export default SwitchLanguage