import React from 'react'

export function TitleDescrip (props) {
  const { title, description } = props
  return (
    <section>
      <h1>
        {title}
      </h1>
      <p>{description}</p>
    </section>
  )
}
