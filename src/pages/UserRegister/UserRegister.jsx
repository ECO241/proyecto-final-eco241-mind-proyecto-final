import { useState } from 'react'
import Button from '../../components/Button/Button'
import "./UserRegister.css"
import supabase from '../../../server/Supabase/Supabase';
import { Link } from 'react-router-dom';


export function UserRegister () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const handleClickEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleClickPassword = (e) => {
    setPassword(e.target.value)  
  }
  const handleRegister = async () => {
    try  {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,

      });
      console.log(user)
      if (error) {
        throw error;
      }

      console.log('User registered successfully:', user);
      // Aquí puedes redirigir al usuario a la página de inicio de sesión u otra página de tu aplicación
    } catch (error) {
      console.error('Please put your email and password', error.message);
      setError(error.message);
    }
  };

  return (
    <>
      <section className='big-user'>
        <h1 className='user-title'>
          Register
        </h1>
        <h2 className='user-subtitle'>Please, enter your info</h2>
        <section className='form-regis'>
        <input type="email" name="Email" value={email} onChange={handleClickEmail} placeholder='Email'/>
        <input type="password" name="Password" value={password} onChange={handleClickPassword} placeholder='Password'/>
        </section>
        {error && <p className="error-message">{error}</p>}
        <Button url="/register" title="Back"></Button>
        <Link to ="/Login">
        <button onClick={handleRegister}>Next</button>
        </Link>
      </section>
    </>
  )
}