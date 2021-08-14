import { Router } from 'express'
import * as authCtrl from '../controllers/auth.js'

const router = Router()
export {
  router
}


/*---------- Public Routes ----------*/
router.post('/signup', authCtrl.signup)
router.post('/login', authCtrl.login)

/*---------- Protected Routes ----------*/
