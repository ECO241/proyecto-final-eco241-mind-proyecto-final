import Button from '../../components/Button/Button'
import RegisterInput from "../../components/RegisterInput/RegisterInput"
import "./Login.css"



export function Login () {
  return (
    <>
    <section className='big-login'>
    <h1 className='login-title'>
             Login
        </h1>
        <h2 className='login-subtitle'>Please,enter your info</h2>
      <section className='form-login'>
        <RegisterInput title="Email"></RegisterInput>
        <RegisterInput title= "Password"></RegisterInput>
      </section>
      <Button url ="/" title= "Back"></Button>
      <Button url="/Home" title="Next->"></Button>
      </section>
    </>
  )
}