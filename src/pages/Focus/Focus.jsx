import './Focus.css'
import { Audio } from '../../components/Audio/Audio'
import { dataFocus } from '../../Services/DataButtons/focus'
import { Link } from 'react-router-dom'

export function Focus() {
  

  return (
    <>
    <div className="focus-page">
      <section className='big-calm'>
      <Link to ="/Home">
       <img className="back-arrow" src='/src/assets/Back-small2.png' alt='Logo' />
       </Link>
        <img className="logo-calm" src='/src/assets/Logo2.png' alt='Logo' />
        <h1 className='calm-title'>FOCUS</h1>
        <img className="bck-img" src='/src/assets/Imgfocus.png' alt='Calm' />
        <h1 className='Serenity'>Clarity Quest</h1>
        <h3 className='calm-text'>
        Sharpen your mind, enhance your concentration, and achieve your goals with Clarity Quest. Through focus-boosting music, mindfulness exercises, and productivity tips, you'll find the mental clarity you need to tackle any task. Turn distractions into background noise and unlock your full potential.
        </h3>
      </section>
      
         <section className="calm-section">
                <div className="audio-calm">
                    {dataFocus.map(({id, audio, title, time}) => (
                        <Audio key={id} audio={audio} title={title} time={time}/>
                    ))}
                </div>
        </section>
        </div>
    </>
  )
}