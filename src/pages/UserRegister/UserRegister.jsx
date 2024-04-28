import Button from '../../components/Button/Button'
import RegisterInput from "../../components/RegisterInput/RegisterInput"
import "./UserRegister.css"



export function UserRegister () {
  return (
    <>
    <section className='big-user'>
    <h1 className='user-title'>
             Register
        </h1>
        <h2 className='user-subtitle'>Please,enter your info</h2>
      <section className='form-regis'>
        <RegisterInput title="Email"></RegisterInput>
        <RegisterInput title= "Password"></RegisterInput>
      </section>
      <Button url ="/register" title= "Back"></Button>
      <Button url="/ProfileRegister" title="Next->"></Button>
      </section>
    </>
  )
}