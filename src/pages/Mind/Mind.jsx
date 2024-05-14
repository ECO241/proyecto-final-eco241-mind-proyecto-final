import Button from "../../components/Button/Button";
import "./Mind.css"

export function Mind () {
    return (
      <section className="big-mind">
        <img className="img-mind" src="/src/assets/Logo.png" alt="Mind Logo" />
        <p className='top-message'>
          Welcome to
        </p>
        <h1 className='bot-message'>Mind</h1>
        <Button url="/register" title="Continue ->"></Button>
      </section>
    )
  }