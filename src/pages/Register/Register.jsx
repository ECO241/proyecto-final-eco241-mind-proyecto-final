import Button from "../../components/Button/Button";
import "./Register.css"


export function Register () {
    return (
      <section className="big-register">
         <p className='title-message'>
          Let´s get started!
        </p>
        <img src="/src/assets/Logo.png" alt="Mind Logo" />
        <p className='top-message'>
          Please,
        </p>
        <h1 className='bot-message'>Register</h1>
        <section className='button-regis'>
        <Button image="/src/assets/mail.png" title= "Sing in with Google"></Button>
        <Button url ="/UserRegister" image="/src/assets/person.png" title="User and password"></Button>
        </section>
        <h3 className="account">Already have an account?Sign In</h3>
      </section> 
    )
  }
