'use client'
import Container from '@/components/container'
import TaskBlock from '@/components/taskBlock'
import { useTask } from '@/hooks/useTask'
import { ROUTES } from '@/utils/routes'
import { ITask } from '@/utils/types'
import { NotebookPen } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'



const Tasks = () => {
  const session = useSession()
  const {data, isLoading, refetch} = useTask(session.data?.user.email ?? '')
  const {t} = useTranslation()

  useEffect(() => {refetch()}, [data])

  return (
    <Container className='text-text'>
      <div className='w-full my-3'>
        <Link href={ROUTES.ADD_TASK}
          className='ml-auto max-w-[200px] h-[50px] rounded-xl w-full bg-navbar text-headline hover:text-text 
          hover:bg-highlight transition-all duration-200 text-lg flex gap-2 items-center justify-center'
        >
          {t('add task')} <NotebookPen/>
        </Link>
      </div>
      {isLoading? t('loading') :
        <div className='flex flex-col gap-2 w-full'>
          {
            data?.data.map((item:ITask) => (
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

export default Tasks