import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import "./Login.css"
import supabase from '../../../server/Supabase/Supabase'
import { useState } from 'react'



export function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleClickEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleClickPassword = (e) => {
    setPassword(e.target.value)  
  }
  const handleLogin = async () => {
    try {
      const { user, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      });

      if (error) {
        throw error;
      }

      console.log('User logged in successfully:', user);
      // Aquí puedes redirigir al usuario a la página de inicio u otra página de tu aplicación
    } catch (error) {
      console.error('Error logging in:', error.message);
      setError(error.message);
    }
  };
  return (
    <>
    <section className='big-login'>
    <h1 className='login-title'>
             Login
        </h1>
        <h2 className='login-subtitle'>Please,enter your info</h2>
      <section className='form-login'>
      <input type="email" name="Email" value={email}  onChange={handleClickEmail} placeholder='Email'/>
        <input type="password" name="Password" value={password}  onChange={handleClickPassword} placeholder='Password'/>
      </section>
      <Button url ="/" title= "Back"></Button>
      <Link to ="/ProfileRegister">
        <button onClick={handleLogin}>Next</button>
        </Link>
      </section>
    </>
  )
}