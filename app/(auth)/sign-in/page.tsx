import AuthForms from '@/components/AuthForm'
import React from 'react'

const signIn = () => {
  return (
    <section className='flex-center size-full max-sm:px-6'>

      <AuthForms type="sign-in"/>
      
    </section>
  )
}

export default signIn