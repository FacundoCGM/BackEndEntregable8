import { Router } from "express"
import * as usersController from '../controller/usersController.js'
import passport from "passport"

const routerUsers = Router()

routerUsers.post('/register', passport.authenticate('register'), usersController.registerResponse)

routerUsers.post('/login', passport.authenticate('login'), usersController.loginResponse)

export default routerUsers