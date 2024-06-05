import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import './UserRegister.css'

const INITIAL_STEP = 1
const FINAL_STEP = 3

export function UserRegister() {
  const navigate = useNavigate()
  const [step, setStep] = useState(INITIAL_STEP)

  const [email, setEmail] = useState('andres@gmail.com')
  const [password, setPassword] = useState('andres1234')
  const [name, setName] = useState('andres')
  const [last, setLast] = useState('Jimenez')
  const [birth, setBirth] = useState('mayo')
  const [gender, setGender] = useState('')
  const [why, setWhy] = useState('')
  const [method, setMethod] = useState('')
  const [light, setLight] = useState('')
  const [aroma, setAroma] = useState('')

  const [error, setError] = useState(null)

  const handleClickEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleClickPassword = (e) => {
    setPassword(e.target.value)
  }

  const handleNext = () => {
    setStep((prevStep) => {
      return prevStep + 1
    })
  }

  const handlePrev = () => {
    setStep((prevStep) => {
      return prevStep - 1
    })
  }

  const handleRegister = async () => {
    try {
      // call endpoint to register user
      const response = await fetch('http://localhost:5500/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          name: name,
          last: last,
          birth: birth,
          gender: gender,
          why: why,
          method: method,
          light: light,
          aroma: aroma
        })
      })

      // get data from response
      const data = await response.json()
      console.log(data)

      if (error) {
        throw error
      }

      // redirect to login
      navigate('/Login')
    } catch (error) {
      console.error('Please put your email and password', error.message)

      // show error message
      setError(error.message)
    }
  }

  return (
    <>
      <section className='big-user'>
        <h1 className='user-title'>Register</h1>
        <h2 className='user-subtitle'>Please, enter your info</h2>
        {step === 1 && (
          <section className='form-regis'>
          <label className="email-label" htmlFor='email'>Email:</label>
            <input className='email2'
              type='email'
              name='Email'
              value={email}
              onChange={handleClickEmail}
              placeholder='Email'
            />
            
            <label className="password-label" htmlFor='password'>Password:</label>
            <input className='password2'
              type='password'
              name='Password'
              value={password}
              onChange={handleClickPassword}
              placeholder='Password'
            />
          </section>
        )}
        {step === 2 && (
          <section className='form-regis'>

            <label className='name-label' htmlFor='name'>Name:</label>
            <input className='name'
              type='string'
              name='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Name'
            />

            <label className='lastname-label' htmlFor='last'>Last name:</label>
            <input className='lastname'
              type='string'
              name='Lastname'
              value={last}
              onChange={(e) => setLast(e.target.value)}
              placeholder='Last name'
            />

            <label className='date-label' htmlFor='birth'>Birth date:</label>
            <input className='date'
              type='string'
              name='Birth'
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
              placeholder='Birth date'
            />

              <label className="select-label" htmlFor='gender'>Gender:</label>
              <select className="select"
              name='gender'
              value={gender}
              onChange={(e) => setGender(e.target.value)}>
              <option value=''>Select an option</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
          </section>
        )}
        {step === 3 && (
          <section className='form-regis'>

            <label className="Q1-label" htmlFor='why'>Why you choose to relax?</label>
            <select className="Q1" 
              name='Why you choose to relax?'
              value={why}
              onChange={(e) => setWhy(e.target.value)}>
              <option value=''>Select an option</option>
              <option value='anger'>Anger</option>
              <option value='stress'>Stress</option>
              <option value='relax'>Relax</option>
            </select>

            <label className="Q2-label" htmlFor='method'>Which sound method do you prefer?</label>
            <select className="Q2" 
              name='Which sound method do you prefer??'
              value={method}
              onChange={(e) => setMethod(e.target.value)}>
              <option value=''>Select an option</option>
              <option value='nature'>Nature sounds</option>
              <option value='white'>White noise</option>
              <option value='meditation'>Meditation</option>
            </select>

            <label className="Q3-label" htmlFor='light'>Do you like light colors?</label>
            <select className="Q3" 
              name='Do you like light colors?'
              value={light}
              onChange={(e) => setLight(e.target.value)}>
              <option value=''>Select an option</option>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>

            <label className="Q4-label" htmlFor='aroma'>Do you like aromatherapy?</label>
            <select className="Q4" 
              name='Do you like aromatherapy?'
              value={aroma}
              onChange={(e) => setAroma(e.target.value)}>
              <option value=''>Select an option</option>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </section>
        )}
        {error && <p className='error-message'>{error}</p>}

        {/* Botones de navegacion*/}
        {step === INITIAL_STEP && (
          <Button variant="back-register2" url='/register' title='Back'></Button>
        )}
        {step > INITIAL_STEP && <button className="back-btn2" onClick={handlePrev}>Previous</button>}
        {step < FINAL_STEP && <button className="next-btn2" onClick={handleNext}>Next</button>}
        {step === FINAL_STEP && (
          <button className="next-btn2" onClick={handleRegister}>Create</button>
        )}
      </section>
    </>
  )
}
