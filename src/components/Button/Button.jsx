import { Link } from 'react-router-dom'
import "./Button.css"

export function Button(props) {
  const { title, image, url,variant} = props
  return (
    <div className={variant}>
    <Link to={url}>
      <button className='buttons'>
        {' '}
        <img src={image}></img>
        <p>{title}</p> 
      </button>
    </Link>
    </div>
  )
}

export default Button
