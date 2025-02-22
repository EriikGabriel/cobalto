'use client'
import { IconBox } from '@tabler/icons-react'
import React from 'react'

const CurrentRepository = () => {
  return (
    <div className='flex items-center gap-3 cursor-pointer hover:text-slate-400 transition-all ease-in delay-75'>
        <IconBox className='size-4' />
        <h1 className='text-sm'>nlw-repository-2024</h1>
    </div>
  )
}

export default CurrentRepository