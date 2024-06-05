/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import './Home.css'
import { Link } from 'react-router-dom'

export function Home() {
  const [user, setUser] = useState()
  const navigate = useNavigate()

  const getUserData = async () => {
    try {
      // call endpoint to get user data
      const response = await fetch('http://localhost:5500/auth/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })

      // get data from response
      const data = await response.json()

      // save user in state
      setUser(data.user)
      /*
      birth: "2024-05-16"
      column_id: "98b2655e-8617-43ef-8d34-4fdd35b26f0a"
      created_at: "2024-05-16T19:10:15.959403+00:00"
      email: "andres@gmail.com"
      gender: "male"
      last: "Denmark"
      name: "andres"
      */
    } catch (error) {
      // redirect to login if error
      navigate('/Login')
    }
  }

  // get user data when component is mounted
  useEffect(() => {
    getUserData()
  }, [])

  // handle logout
  const handleLogout = () => {
    // remove token from local storage
    localStorage.removeItem('token')

    // redirect to login
    navigate('/Login')
  }

  return (
    <section className='big-home'>
      <section className='home-title'>
        <img className="logo-home" src='/src/assets/Logo.png' alt='Logo' />
        <img className="user-calm" src='/src/assets/person-circle.png' alt='Person' />
        <h1 className='title-home'>Welcome,</h1>
        <h2 className='top-user'>{user?.name}</h2>
      </section>
      <section className='mood'>
        <p className='mood-home'>Choose the mood you desire</p>
      </section>
      <section className='button-home'>
      
        <Button url='/Calm'  variant="calm-icon" image='/src/assets/Calm.png'></Button>
        <Button url='/Sleep' variant="sleep-icon" image='/src/assets/Sleep.png'></Button>
        <Button url='/Relax' variant="relax-icon" image='/src/assets/Relax.png'></Button>
        <Button url='/Focus' variant="focus-icon" image='/src/assets/Focus.png'></Button>
      </section>
      <section>
        <h2 className='calm-label'>Calm</h2>
        <h2 className='sleep-label'>Sleep</h2>
        <h2 className='relax-label'>Relax</h2>
        <h2 className='focus-label'>Focus</h2>
      </section>
      <section className='meditation-home'>
        <h3 className='account2'>Check our meditation select for you</h3>
        <img className="man-calm" src='/src/assets/Man.png' alt='Man' />
      </section>
      <section className='method-home'>
        <Button variant="choose-own"
          url='/MethodPage'
          image='/src/assets/mail.png'
          title='Start my own method'></Button>
      </section>
      <button className="logout" onClick={handleLogout}>Logout</button>
    </section>
  )
}
