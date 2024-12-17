'use client'
import Container from '@/components/container'
import { useAddTask } from '@/hooks/useTask'
import { IInputTask } from '@/utils/types'
import { useSession } from 'next-auth/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

const AddTask = () => {
  const {t} = useTranslation()
  const {register, handleSubmit, formState:{errors}} = useForm<IInputTask>({mode: 'onChange'})
  const addTask = useAddTask()
  const user = useSession().data?.user.id
  console.log(user)
  const OnSubmit = (data:IInputTask) => {
    const new_data = {
      ...data,
     user: user
    }
    addTask(new_data)
  }

  return (
    <Container>
      <div className='w-full p-2 bg-navbar rounded-xl h-full shadow-2xl shadow-shadow/20'>
        <form className='flex flex-col gap-2 items-center p-3' onSubmit={handleSubmit(OnSubmit)}>
          <label className='text-headline flex flex-col gap-1 max-w-[600px] w-full text-lg font-bold'>
            {t('title')}:
            <input type="text"
              placeholder={t('title')}
              className='p-1 rounded-lg text-text border-border shadow-shadow/0 shadow-lg focus:shadow-shadow/30 outline-none'
              {...register('title', {required:true})}
            />
            {errors.title && <span className='text-red-400 text-lg'>{t('required')}</span>}
          </label>

          <label className='text-headline flex flex-col gap-1 max-w-[600px] w-full text-lg font-bold'>
            {t('text')}:
            <textarea 
              placeholder={t('text')}
              className='p-1 rounded-lg text-text border-border shadow-shadow/0 shadow-lg focus:shadow-shadow/30 outline-none resize-none h-[150px]'
              {...register('text', {required:true})}
            />
            {errors.text && <span className='text-red-400 text-lg'>{t('required')}</span>}
          </label>

          <label className='text-headline flex flex-col gap-1 max-w-[600px] w-full text-lg font-bold'>
            {t('deadline')}:
            <input type='date'
              className='p-1 rounded-lg text-text border-border shadow-shadow/0 shadow-lg focus:shadow-shadow/30 outline-none'
              {...register('deadline', {required:true})}
            />
            {errors.deadline && <span className='text-red-400 text-lg'>{t('required')}</span>}
          </label>
          <button 
            type="submit"
            className='max-w-[200px] w-full h-[50px] bg-highlight text-white text-xl font-bold rounded-lg hover:bg-highlight/70 hover:text-text my-3'
          >
            {t('add')}
          </button>
        </form>
      </div>
    </Container>
  )
}

export default AddTask