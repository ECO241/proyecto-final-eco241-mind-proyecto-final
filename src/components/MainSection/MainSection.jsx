import { RegisterInput } from '../RegisterInput/RegisterInput'


export default function MainSection () {
  return (
    <>
      <section className='form-regis'>
        <RegisterInput title='Email' />
        <RegisterInput title='Password' />

      </section>
    </>
  )
}