import Button from '../../components/Button/Button'
import RegisterInput from "../../components/RegisterInput/RegisterInput"



export function UserRegister () {
  return (
    <>
    <section className='big-user'>
      <section className='form-regis'>
        <RegisterInput title="Email"></RegisterInput>
        <RegisterInput title= "Password"></RegisterInput>
      </section>
      <Button title= "Back"></Button>
      <Button title="Next->"></Button>
      </section>
    </>
  )
}