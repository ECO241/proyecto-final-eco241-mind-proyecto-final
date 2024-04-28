import Button from '../../components/Button/Button'
import RegisterInput from "../../components/RegisterInput/RegisterInput"
import "./ProfileRegister.css"



export function ProfileRegister () {
  return (
    <>
    <section className='big-user'>
      <section className='form-regis'>
      <h1 className='register-title'>
             Register
        </h1>
        <h2 className='register-subtitle'>One Step more</h2>
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