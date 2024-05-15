import { useState } from 'react'
import Button from '../../components/Button/Button'
import "./ProfileRegister.css"
import supabase from '../../../server/Supabase/Supabase'
import { Link } from 'react-router-dom'



export function ProfileRegister () {
  const [name, setName] = useState('');   
  const [last, setLast] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState(null);

  const handleClickName = (e) => {
    setName(e.target.value)
  }
  const handleClickLast = (e) => {
    setLast(e.target.value)  
  }
  const handleClickBirth = (e) => {
    setBirth(e.target.value)
  }
  const handleClickGender = (e) => {
    setGender(e.target.value)  
  }

  const handleProfile = async () => {
    try  {
      const user = supabase.auth.user;
  
      if (!user) {
        throw new Error('User is not authenticated');
      }
  
      // Guardar los datos del perfil en la base de datos de Supabase y asociarlos con el usuario actual
      const { data, error } = await supabase.from('Users').insert([
        { name, last, birth, gender, uid: user.id }
      ]);
  
      if (error) {
        throw error;
      }
  
      console.log('Profile registered successfully:', data);
      // Aquí puedes redirigir al usuario a la siguiente página o hacer otras acciones
    } catch (error) {
      console.error('Error registering profile:', error.message);
      setError(error.message);
    }
  };
  return (
    <>
    <section className='big-profile'>
      <section className='form-profile'>
      <h1 className='profile-title'>
             Register
        </h1>
        <h2 className='profile-subtitle'>One Step more</h2>
        <h3>Name*</h3>
        <input type='text' name='name' value={name} onChange={handleClickName} placeholder='Nicolas'></input>
        <h3>Last Name*</h3>
        <input type='text' name='last' value={last} onChange={handleClickLast} placeholder='Orozco'></input>
        <h3>Birth*</h3>
        <input type='date' name='birth' value={birth} onChange={handleClickBirth} placeholder='08/07/2001'></input>
        <h3>Gender*</h3>
        <input type='text' name='gender' value={gender} onChange={handleClickGender} placeholder='Male'></input>
      </section>
      <Button url ="/UserRegister" title= "Back"></Button>
      <Link to ="/ProfileRegister">
        <button onClick={handleProfile}>Next</button>
        </Link>
      </section>
    </>
  )
}