import express from 'express'
// const express = require("express");

import { postAnswer, deleteAnswer } from '../controllers/Answers.js'
import auth from '../middlewares/auth.js'

const router = express.Router()

router.patch('/post/:id', auth, postAnswer)
router.patch('/delete/:id', auth, deleteAnswer)

export default router