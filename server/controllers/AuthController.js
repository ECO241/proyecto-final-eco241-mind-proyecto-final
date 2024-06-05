import { MethodData } from '../../src/Services/MethodData/MethodData.js'
import supabase from '../Supabase/Supabase.js'

const AuthController = {
  async registerUser(req, res) {
    try {
      const { email, password, name, last, gender, why, method, light, aroma } = req.body

      // registrar usuario en la autenticación
      const { data, error: authError } = await supabase.auth.signUp({
        email,
        password
      })

      if (authError) {
        throw authError
      }

      // insertar usuario en la base de datos
      const { error: insertError } = await supabase.from('users').insert({
        name: name,
        last: last,
        birth: new Date(),
        gender: gender,
        email: email,
        why: why,
        method: method,
        light: light,
        aroma: aroma
        

        // opcion: 'valor'
      })

      if (insertError) {
        throw insertError
      }
      console.log(data)
      return res.status(201).send({ message: 'User created' })
    } catch (error) {
      console.error(error.message)
      res.status(500).send({ message: error.message })
    }
  },
  async loginUser(req, res) {
    try {
      const { email, password } = req.body
        
      const { data, error: authError } = await supabase.auth.signInWithPassword(
        {
          email,
          password
        }
      )

      if (authError) {
        throw authError
      }

      return res
        .status(201)
        .send({ message: 'User logged', token: data.session.access_token })
    } catch (error) {
      console.error(error.message)
      res.status(500).send({ message: 'Internal server error' })
    }
  },
  async dataFromUser(req, res) {
    try {
      /**
       * headers: {
       *  Authorization: Bearer token
       * }
       *
       */
      // obtener el token del header
      const token = req.headers.authorization.split(' ')[1]

      // obtener el usuario con el token
      const {
        data: { user },
        error
      } = await supabase.auth.getUser(token)

      if (error) {
        throw error
      }

      // obtener el email del usuario
      const userEmail = user.email

      // obtener los datos del usuario
      const { data } = await supabase
        .from('users')
        .select("")
        .eq('email', userEmail)

      console.log(data)
      return res.status(201).send({ message: 'User logged', user: data[0] })
    } catch (error) {
      console.error(error.message)
      res.status(500).send({ message: error.message })
    }
  },

  async dataFromMusic(req, res) {
    try {
    
      const token = req.headers.authorization.split(' ')[1]

      const {
        data: { user },
        error
      } = await supabase.auth.getUser(token)

      if (error) {
        throw error
      }


      const userEmail = user.email

      const { data } = await supabase
        .from('users')
        .select("why,method")
        .eq('email', userEmail)

      console.log('user: ',data[0])
      const userdata = data[0]
      const matchingMethods = MethodData.filter(method =>
        method.category.toLowerCase() === userdata.why.toLowerCase() &&
        method.subcategory.toLowerCase() === userdata.method.toLowerCase()
      );
      return res.status(200).send({data: {...data[0], music: matchingMethods} })
    } catch (error) {
      console.error(error.message)
      res.status(500).send({ message: error.message })
    }
  },
}

export default AuthController
