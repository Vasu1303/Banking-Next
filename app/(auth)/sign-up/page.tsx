import React from 'react'
import AuthForms from '@/components/AuthForm'


const signUp = async () => {
 
  return (
    <section className='flex-center size-full max-sm:px-6'>

      <AuthForms type="sign-up" />
      
    </section>
  )
}

export default signUp