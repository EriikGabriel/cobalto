import React from 'react'
import logoCobalto from "@/public/logo.svg"
import Image from 'next/image'
import { GitHubLogoIcon, LightningBoltIcon } from "@radix-ui/react-icons"
import ButtonAuthGitHub from '../components/button-auth-github'

const Auth = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center flex-col gap-5 md:gap-20 -mt-20 p-5" >
        <div className="" >
            <Image 
                src={logoCobalto} 
                alt='Logo Cobalto'
                height={80}
                width={95}
            />
        </div>
        <main className='bg-primary-900 h-2/5 md:h-1/3 rounded-lg flex flex-col justify-between'>
            <header className='flex items-center justify-center flex-col'>
                <figure className='w-full flex items-center justify-center py-5'>
                    <GitHubLogoIcon className='size-8 text-primary-400' />
                </figure>
                <h1 className='font-bold text-xl w-3/4 text-center text-primary-200 tracking-tight break-words'>
                    Enter your GitHub credentials to start using the application.
                </h1>
            </header>
            <article className='w-full flex items-center flex-col'>
                <ButtonAuthGitHub />
                <p className='text-xs flex items-center justify-center gap-5 font-bold py-5'>
                    <LightningBoltIcon className='size-4' />
                    Built with NextAuth
                </p>
            </article>
        </main>
    </div>
  )
}

export default Auth