import React from 'react'
import './RegisterTitle.css'

export function RegisterTitle (props) {
  const { title, subti } = props
  return (
    <section>
      <h1> {title} </h1>
      <h3>{subti}</h3>
    </section>
  )
}
