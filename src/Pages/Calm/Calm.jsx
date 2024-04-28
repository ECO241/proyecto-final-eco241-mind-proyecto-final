import React from 'react'
import { TitleDescrip } from '../../Components/TitleDescripFun/TitleDescripFun'

export function CalmPage () {
  return (
    <>
      <section className='big-user'>
        <h1 className='user-title'>
          Calm
        </h1>
        <img src='./src/assets/Imgcalm.png' />
        <TitleDescrip
          title='Serenity now'
          description='Step into a world of tranquility, where each breath eases your mind into a state of profound calm.
          Discover the art of serene living through guided meditations, soothing sounds, and gentle reminders to stay present.
          Let go of the days chaos and embrace peace at your own pace.'
        />
      </section>
    </>
  )
}
