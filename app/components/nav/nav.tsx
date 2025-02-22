import React from 'react'
import ExitButton from './exit-button'
import CurrentRepository from './current-repository'
import Profile from './profile'

const Nav = () => {
  return (
    <div className='p-4 w-full flex items-center justify-between'>
        <div className="">
            <ExitButton />
        </div>
        <div className="">
            <CurrentRepository />
        </div>
        <div className="">
            <Profile />
        </div>
    </div>
  )
}

export default Nav