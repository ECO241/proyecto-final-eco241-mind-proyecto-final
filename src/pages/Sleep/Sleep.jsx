import './Sleep.css'
import { Audio } from '../../components/Audio/Audio'
import { dataSleep } from '../../Services/DataButtons/sleep'
import { Link } from 'react-router-dom'

export function Sleep() {
  

  return (
    <>
    <div className="sleep-page">
      <section className='big-calm'>
      <Link to ="/Home">
       <img className="back-arrow" src='/src/assets/Back-small2.png' alt='Logo' />
       </Link>
        <img className="logo-calm" src='/src/assets/Logo.png' alt='Logo' />
        <h1 className='calm-title'>SLEEP</h1>
        <img className="bck-img" src='/src/assets/Imgsleep.png' alt='Calm' />
        <h1 className='Serenity'>Dreamland Drift</h1>
        <h3 className='calm-text'>
        Embark on a journey to the land of dreams, where sleep comes naturally and restfulness awaits. Our carefully curated sleep stories, ambient soundscapes, and relaxation techniques are designed to gently lull you into a deep, restorative sleep. Close your eyes, let go of the day, and drift off into peaceful slumber.
        </h3>
      </section>
      
         {/* <img  className='sec-banner-img' src="../../src/assets/Ux-sec-banner.png"/> */}
         <section className="calm-section">
                <div className="audio-calm">
                    {dataSleep.map(({id, audio, title, time}) => (
                        <Audio key={id} audio={audio} title={title} time={time}/>
                    ))}
                </div>
        </section>
        </div>
    </>
  )
}