'use client'
import { IconDoorExit } from '@tabler/icons-react'
import React from 'react'

const ExitButton = () => {
  return (
    <div className='flex items-center gap-3 hover:text-red-400 transition-all ease-in delay-75 cursor-pointer' >
        <IconDoorExit /> 
        <p className='text-xs font-bold'>Exit</p>
    </div>
  )
}

export default ExitButton