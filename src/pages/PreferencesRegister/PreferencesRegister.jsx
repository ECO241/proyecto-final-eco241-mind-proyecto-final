
import Button from '../../components/Button/Button'
import { RegisterSelect } from '../../components/RegisterSelect/RegisterSelect'


export function PreferencesRegister () {
  return (
    <>
      <section className='big-user'>
        <h1 className='user-title'>
          Register
        </h1>
        <h2 className='user-subtitle'>Select your preferences</h2>
        <section className='form-regis'>
          <RegisterSelect
            title='Why you choose to relax' options1='Strees' options2='Calm'
            options3='Relax' options4='Ansiety'
          />
          <RegisterSelect
            title='Which sound method do you prefer' options1='Strees' options2='Calm'
            options3='Relax' options4='Ansiety'
          />
          <RegisterSelect
            title='Do you like ligth colors' options1='Yes' options2='No'
            options3='N/A' options4='I dont want to answer'
          />
          <RegisterSelect
            title='Do you like ligth colors' options1='Yes' options2='No'
            options3='N/A' options4='I dont want to answer'
          />

        </section>
        <section>
        <Button url ="" title= "Back"></Button>
        <Button url ="" title="Next->"></Button>
      </section>
      </section>
    </>
  )
}