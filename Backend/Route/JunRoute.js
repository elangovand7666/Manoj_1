import {add} from '../Controller/JunController.js'
import express from 'express'

const router1=express.Router()

router1.post('/add',add)

export default router1;