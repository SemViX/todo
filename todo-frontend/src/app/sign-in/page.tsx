'use client'
import Container from '@/components/container'
import { ROUTES } from '@/utils/routes'
import { ISingInInput} from '@/utils/types'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

const SignIn = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<ISingInInput>({mode:'onChange'})
    const {t} = useTranslation()
    const {push} = useRouter()

    const onSubmit = async(data:ISingInInput) => {
        const signInData = await signIn('credentials', {
            email: data.email,
            password:data.password ,
            redirect: false
        })
        if (signInData?.error){
            console.log(signInData.error)
        }
        else{
            push(ROUTES.MAIN)
        }

    }

  return (
    <Container>
        <div className='w-full p-2 bg-navbar rounded-xl h-full shadow-2xl shadow-shadow/20'>
            <h1 className='text-headline text-2xl font-bold text-center'>
                {t('registration')}
            </h1>
            <form className='flex flex-col gap-2 items-center p-3' onSubmit={handleSubmit(onSubmit)}>
              <label className='text-headline flex flex-col gap-1 max-w-[600px] w-full text-lg font-bold'>
                {t('email')}:
                <input type="text"
                  placeholder={t('email')}
                  className='p-1 rounded-lg text-text border-border shadow-shadow/0 shadow-lg focus:shadow-shadow/30 outline-none'
                  {...register('email', {required:true})}
                />
                {errors.email && <span className='text-red-400 text-lg'>{t('required')}</span>}
              </label>
    
              <label className='text-headline flex flex-col gap-1 max-w-[600px] w-full text-lg font-bold'>
                {t('password')}:
                <input type="password"
                  placeholder={t('password')}
                  className='p-1 rounded-lg text-text border-border shadow-shadow/0 shadow-lg focus:shadow-shadow/30 outline-none'
                  {...register('password', {required:true, minLength: 8})}
                />
                {errors.password && <span className='text-red-400 text-lg'>{t('password error')}</span>}
              </label>
              
              <button 
                type="submit"
                className='max-w-[200px] w-full h-[50px] bg-highlight text-white text-xl font-bold rounded-lg hover:bg-highlight/70 hover:text-text my-3'
              >
                {t('sign-in')}
              </button>
              <p className='text-text'>
                {t("don`t have")} <Link className='font-bold text-highlight' href={ROUTES.REGISTER}>{t('register')}!</Link>
              </p>
            </form>
        </div>
    </Container>
  )
}

export default SignIn