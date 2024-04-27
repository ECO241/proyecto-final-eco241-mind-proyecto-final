import './style.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const AppContainer = document.querySelector('#app')
const root = createRoot(AppContainer)

root.render(<App />)

console.log(AppContainer)
