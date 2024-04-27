import './RegisterInput.css'

export function RegisterInput (props) {
  const { title, uid } = props
  return (
    <p>{title}
      <input className='register-input' id={uid} />
    </p>
  )
}