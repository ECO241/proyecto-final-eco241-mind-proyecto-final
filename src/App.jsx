import React from 'react'
import './style.css'
import { Body } from './Components/Body/Body'
import { CardSide } from './Components/CardsSideBar/CardsSideBar'
import MainSection from './Components/MainSection/MainSection'
export default function App () {
  return (
    <>

      <Body />

      <CardSide />
      <MainSection />

    </>
  )
}
