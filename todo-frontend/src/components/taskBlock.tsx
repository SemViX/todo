'use client'
import { STRAPI_URL } from '@/utils/urls'
import { Check, Trash, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from "framer-motion";
import { useChangeTaskState, useDeleteTask } from '@/hooks/useTask'
import { ITask } from '@/utils/types'

const TaskBlock = ({documentId, title, text, photo, deadline, is_completed}:ITask) => {


  const {t} = useTranslation()
  const {changeState}= useChangeTaskState()
  const deleteTask = useDeleteTask(documentId)

  const ChangeState = () => {
    const new_data = {
      documentId: documentId, 
      is_completed: !is_completed
    }
    changeState(new_data)
  }

  const DeleteTask = () => {
    deleteTask()
  }

  return (
    <motion.div className='bg-navbar flex flex-col justify-between items-center gap-3 p-3 rounded-xl'
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: false}}
      transition={{delay: 0.2, ease: 'easeInOut', duration: 0.4}}
    >
        <h3 className='text-xl max-w-[100px]'>{title}</h3>
        <div className='flex justify-between w-full items-center flex-col md:flex-row gap-3'>
          <div className='flex flex-col md:flex-row items-center justify-around w-full'>
            <p className='text-lg max-w-[500px] w-full'>{text}</p>
            <p className='font-bold'>{t('deadline')}: {deadline}</p>
            {photo && <Image src={`${STRAPI_URL}${photo.url}`} width={200} height={200} alt=''/>}
          </div>
          {!is_completed && <button className={`bg-red-700 hover:bg-red-700/50 shadow-red-800/50 
              max-w-[200px] w-full md:w-[50px] h-[50px] hover:text-text text-white rounded-xl shadow-lg  flex items-center justify-center gap-2 md:ml-auto `}
              onClick={DeleteTask}
              >
            <p className=' md:hidden'>
              {t('delete')}
            </p>
            <Trash size={30}/>
          </button>}
          <button className={`${is_completed? 'bg-red-700 hover:bg-red-700/50 shadow-red-800/50' : 'bg-highlight hover:bg-highlight/50 shadow-highlight/50'} 
              max-w-[200px] w-full md:w-[50px] h-[50px] hover:text-text text-white rounded-xl shadow-lg  flex items-center justify-center gap-2 md:ml-auto `}
              onClick={ChangeState}
              >
            <p className=' md:hidden'>
              {is_completed? t('not done') : t('done')}
            </p>
            {is_completed? <X size={30}/> : <Check size={30}/>}
          </button>
        </div>
    </motion.div>
  )
}

export default TaskBlock