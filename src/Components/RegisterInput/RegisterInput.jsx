import React from 'react'
import './RegisterInput.css'

export function RegisterInput (props) {
  const { title, uid, type } = props
  return (
    <p>{title}
      <input className='register-input' type={type} id={uid} />
    </p>
  )
}
