import { RegisterInput } from '../RegisterInput/RegisterInput'
import { RegisterTitle } from '../RegisterTitle/RegisterTitle'
import React from 'react'

export default function MainSection () {
  return (
    <>
      <section className='form-regis'>
        <RegisterTitle title='Register' />
        <RegisterTitle subti='Please enter your info' />
        <RegisterInput type='Email' title='Email' />
        <RegisterInput type='Password' title='Password' />

      </section>
    </>
  )
}
