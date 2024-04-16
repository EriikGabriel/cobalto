'use client'
import React from 'react'
import { signIn, useSession } from 'next-auth/react'
import Github from 'next-auth/providers/github'

const ButtonAuthGitHub = () => {

    const { data:session, status } = useSession()

    if( status === 'authenticated') {
        return (
            <div className="">
                <h1>Ola <span>{session.user?.name}</span>!! Voce foi autenticado</h1>
            </div>
        )
    }

    return (
        <button 
            onClick={() => {signIn("github")}}
            className='bg-primary-100 text-primary-900 hover:bg-primary-800 hover:text-primary-200 transition-all delay-50 w-11/12 p-5 rounded-md text-xl tracking-tighter font-semibold my-5'>
            Sign-in with GitHub
        </button>
    )
}

export default ButtonAuthGitHub