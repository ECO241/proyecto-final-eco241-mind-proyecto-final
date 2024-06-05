import './Relax.css'
import { Audio } from '../../components/Audio/Audio'
import { dataRelax } from '../../Services/DataButtons/relax'
import { Link } from 'react-router-dom'

export function Relax() {
  

  return (
    <>
    <div className="relax-page">
      <section className='big-calm'>
      <Link to ="/Home">
       <img className="back-arrow" src='/src/assets/Back-small2.png' alt='Logo' />
       </Link>
        <img className="logo-calm" src='/src/assets/Logo.png' alt='Logo' />
        <h1 className='calm-title'>RELAX</h1>
        <img className="bck-img" src='/src/assets/Imgrelax.png' alt='Calm' />
        <h1 className='Serenity'>Blissful Ease</h1>
        <h3 className='calm-text'>
        Unwind and let stress melt away with every note and every breath. Blissful Ease offers a sanctuary for relaxation, with calming activities, soothing music, and guided sessions to help you release tension. Whether it's a break from work or a moment of quiet in a busy day, find your zen and rejuvenate.
        </h3>
      </section>
      
         <section className="calm-section">
                <div className="audio-calm">
                    {dataRelax.map(({id, audio, title, time}) => (
                        <Audio key={id} audio={audio} title={title} time={time}/>
                    ))}
                </div>
        </section>
        </div>
    </>
  )
}