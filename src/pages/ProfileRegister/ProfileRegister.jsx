import Button from '../../components/Button/Button'
import RegisterInput from "../../components/RegisterInput/RegisterInput"
import "./ProfileRegister.css"



export function ProfileRegister () {
  return (
    <>
    <section className='big-profile'>
      <section className='form-profile'>
      <h1 className='profile-title'>
             Register
        </h1>
        <h2 className='profile-subtitle'>One Step more</h2>
        <RegisterInput title="Name*"></RegisterInput>
        <RegisterInput title= "LastName*"></RegisterInput>
        <RegisterInput title= "Birth*"></RegisterInput>
        <RegisterInput title= "Gender*"></RegisterInput>
      </section>
      <Button url ="/UserRegister" title= "Back"></Button>
      <Button url ="/PreferencesRegister" title="Next->"></Button>
      </section>
    </>
  )
}