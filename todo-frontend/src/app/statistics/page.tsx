'use client'
import Container from '@/components/container'
import { useCompleteTask } from '@/hooks/useCompleteTask'
import { useTask } from '@/hooks/useTask'
import { useSession } from 'next-auth/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Cell, Pie, PieChart } from 'recharts'

const Statistics = () => {
  const {t} = useTranslation()
  const session = useSession()
  const {data:leftTasks, isLoading:isLeftTasksLoading} = useTask(session.data?.user.email)
  const {data:completedTasks, isLoading:isCompletedTasksLoading} = useCompleteTask(session.data?.user.email)
  const data = [
    {name:'complete', value:completedTasks?.data.length, color:'purple'},
    {name:'left', value:leftTasks?.data.length, color:'red'}
  ]
  return (
    <Container>
      <h1 className='text-center text-headline text-3xl font-bold'>
        {t('statistics')}
      </h1>
      <div className='w-full bg-navbar p-2 rounded-xl my-4 flex flex-col md:flex-row gap-2 items-center justify-around'>
        <div className='text-text text-lg font-semibold flex gap-2 items-center'>
          {t('completed tasks')} - {isCompletedTasksLoading? t('loading') : completedTasks?.data.length}
          <div className='w-[25px] h-[25px] rounded-full bg-highlight'/>
        </div>
        <div className='text-text text-lg font-semibold flex gap-2 items-center'>
          {t('tasks left')} - {isLeftTasksLoading? t('loading') : leftTasks?.data.length}
          <div className='w-[25px] h-[25px] rounded-full bg-red-600'/>
        </div>
      </div>
      <div className='w-full bg-navbar p-2 rounded-xl my-4 flex items-center justify-center'>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey={'value'}
          >
            {
              data.map((item, index) => (
                <Cell key={index} fill={item.color}/>
              ))
            }
          </Pie>
        </PieChart>
      </div>
    </Container>
  )
}

export default Statistics