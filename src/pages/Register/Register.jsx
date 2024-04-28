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
        <Button image="/src/assets/mail.png" title= "Sign in with Google"></Button>
        <Button url ="/UserRegister" image="/src/assets/person.png" title="User and password"></Button>
        </section>
        <section className="sign-in">
        <h3 className="account">Already have an account?</h3>
        <Button url = "/Login" title="Sign In"></Button>
        </section>
      </section> 
    )
  }
