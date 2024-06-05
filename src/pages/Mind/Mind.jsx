import Button from "../../components/Button/Button";
import "./Mind.css"

export function Mind () {
    return (
      <section className="big-mind">
        <img className="logoImage" src="/src/assets/Logo.png" alt="Mind Logo" />
        <h1 className='bot-message'>Welcome to</h1>
        <section>
        <img className="logoTextImage" src="/src/assets/LogoText.png" alt="Mind Logo" />
        </section>
        <Button  variant="our-button" url="/register" title="Continue"></Button>
      </section>
    )
  }