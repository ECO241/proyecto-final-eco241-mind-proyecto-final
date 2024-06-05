import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import './Login.css'

export function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('andres@gmail.com')
  const [password, setPassword] = useState('andres1234')
  const [error, setError] = useState(null)

  const handleClickEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleClickPassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = async () => {
    try {
      // call endpoint to login user
      const response = await fetch('http://localhost:5500/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      // get data from response
      const data = await response.json()

      if (error) {
        throw error
      }

      // save token in local storage
      localStorage.setItem('token', data.token)

      // redirect to home
      navigate('/Home')
    } catch (error) {
      console.error('Please put your email and password', error.message)

      // show error message
      setError(error.message)
    }
  }
  return (
    <>
      <h1 className='login-title'>Login</h1>
        <h2 className='login-subtitle'>Please, enter your info</h2>
        <section className='form-login'>
          <input className='email'
            type='email'
            name='Email'
            value={email}
            onChange={handleClickEmail}
            placeholder='Email'
          />
          <input className='password'
            type='password'
            name='Password'
            value={password}
            onChange={handleClickPassword}
            placeholder='Password'
          />
        </section>
        {error && <p className='error-message'>{error}</p>}
        <Button variant="back-login" url='/' title='Back'></Button>
        <button className="login-btn" onClick={handleLogin}>Login</button>
    </>
  )
}
