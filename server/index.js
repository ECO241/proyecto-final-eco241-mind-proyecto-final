import express from 'express'
import cors from 'cors'

import users from './routes/users.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/users', users);

const port = 5500
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


/*
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://thkktgjsoffghpbymfjg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoa2t0Z2pzb2ZmZ2hwYnltZmpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM0Nzg4ODgsImV4cCI6MjAyOTA1NDg4OH0.ZWfM7QpDRQJ7B5G_HMvRw5J58DPQCE8AqvE33eHKGBc'
const supabase = createClient(supabaseUrl, supabaseKey)


async function pruebaNombre() {
    const {data, error} = await supabase
    .from('Usuarios')
    .insert({name: 'Juan David'})
    .select()
    console.log(error)
    return data
}
console.log(pruebaNombre())
*/
