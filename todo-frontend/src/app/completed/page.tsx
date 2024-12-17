'use client'
import Container from '@/components/container'
import TaskBlock from '@/components/taskBlock'
import { useCompleteTask } from '@/hooks/useCompleteTask'
import { ITaskBlockProps } from '@/types/taskBlock'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Completed = () => {
  const session = useSession()
  const {data, isLoading, refetch} = useCompleteTask(session.data?.user.email ?? '')
  const {t} = useTranslation()
  console.log(data)
  useEffect(() => {refetch()}, [data])
  
  return (
    <Container className={'text-text'}>
      {isLoading? t('loading') :
        <div className='flex flex-col gap-2 w-full'>
        {
          data?.data.map((item:ITaskBlockProps) => (
            <TaskBlock 
              key={item.documentId} 
              documentId={item.documentId} 
              title={item.title} 
              text={item.text} 
              photo={item.photo} 
              deadline={item.deadline} 
              is_completed={item.is_completed}
            />
          ))
        }
      </div>
      }
    </Container>
  )
}

export default Completed