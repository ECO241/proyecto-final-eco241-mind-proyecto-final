import './Calm.css'
import { Audio } from '../../components/Audio/Audio'
import { dataCalma } from '../../Services/DataButtons/calm'
import { Link } from 'react-router-dom'

export function Calm() {
  return (
    <div className="calm-page">
      <section className='big-calm'>
        <Link to="/Home">
          <img className="back-arrow" src='/src/assets/Back-small2.png' alt='Back' />
        </Link>
        <img className="logo-calm" src='/src/assets/Logo2.png' alt='Logo' />
        <h1 className='calm-title'>CALM</h1>
        <img className="bck-img" src='/src/assets/Imgcalm23.png' alt='Calm' />
        <h1 className='Serenity'>Serenity now</h1>
        <h3 className='calm-text'>
          Step into a world of tranquility, where each breath eases your mind into a state of profound calm.
          Discover the art of serene living through guided meditations, soothing sounds, and gentle reminders to stay present.
          Let go of the days chaos and embrace peace at your own pace.
        </h3>
      </section>
      
      <section className="calm-section">
        <div className="audio-calm">
          {dataCalma.map(({id, audio, title, time}) => (
            <div key={id} className="audio-card">
              <Audio audio={audio} title={title} time={time} className="audio-player" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
