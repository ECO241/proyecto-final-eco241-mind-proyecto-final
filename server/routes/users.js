import express from 'express'
import getRootController from '../controllers/Controler.js'

const router = express.Router();
const controller = getRootController;

router.get('/',(req, res)=>{
    console.log("new message at user endpoint", req.body)
    res.send(controller())
});

router.get('/:id',(req, res)=>{
    console.log("location user id ", req.path.id)
    res.send("<h1> User ID </h1>")
});

export default router;
