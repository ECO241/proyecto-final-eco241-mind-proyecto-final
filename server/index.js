import cors from 'cors'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

import auth from './routes/auth.js'


const app = express()
app.use(cors())
app.use(express.json())


app.use('/auth', auth)


const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
app.use("/static", express.static(path.join(__dirname, "../server/MethodAudio")));

const port = 5500
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

