import express from 'express'
import AuthController from './../controllers/AuthController.js'

const router = express.Router()

router.post('/register', AuthController.registerUser)
router.post('/login', AuthController.loginUser)
router.get('/me', AuthController.dataFromUser)
router.get('/music', AuthController.dataFromMusic)

export default router
