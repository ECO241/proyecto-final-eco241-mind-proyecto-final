import "./Home.css"
import Button from "../../components/Button/Button";



export function Home () {
    return (
      <section className="big-home">
        <section className="home-title">
         <h1 className='title-home'>Welcome,</h1>
        <h2 className='top-message'>Camilo</h2>
        </section>
        <section className="mood">
        <p className='mood-home'>Choose the mood you desire</p>
        </section>
        <section className='button-home'>
        <Button image="/src/assets/Calm.png"></Button>
        <Button image="/src/assets/Sleep.png"></Button>
        <Button image="/src/assets/Relax.png"></Button>
        <Button image="/src/assets/Focus.png"></Button>
        </section>
        <section className="meditation-home">
        <h3 className="account">Check our meditation select for you</h3>
        </section>
        <section className="method-home">
        <Button image = "/src/assets/mail.png" title = "Start my own method"></Button>
        </section>
      </section> 
    )
  }
